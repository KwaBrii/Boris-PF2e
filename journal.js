/**
 * ============================================================================
 * DIÁRIO — PILHA DE REGISTROS
 * ============================================================================
 * Carregar DEPOIS de `character-data.js` e ANTES de `script.js`.
 * Usa `escapeHTML` e `hasValue`, definidas em `script.js`.
 * É iniciado por `initializeJournal()`, chamada em `initializeDossier()`.
 *
 * Este módulo NÃO depende do CSS para posicionar ou animar as cartas:
 * poses, z-index e animação são aplicados direto nos elementos (estilo inline
 * e Web Animations API). Assim, regras antigas do style.css não interferem.
 *
 * Como funciona a troca de folhas:
 *   1. A folha da frente desliza para a esquerda e se inclina.
 *   2. No meio do caminho, ela passa para trás das outras (troca de z-index).
 *   3. Ela segue até o fundo da pilha, enquanto a folha escolhida sobe
 *      para a frente e as demais avançam uma posição.
 * ============================================================================
 */

/* ========================================
   AJUSTES DA ANIMAÇÃO
======================================== */

/** Duração do movimento da folha que sai (ms). */
const JOURNAL_LEAVE_MS = 1400;

/** Duração do movimento das folhas que avançam (ms). */
const JOURNAL_RISE_MS = 1100;

/** Espera antes de a folha escolhida começar a subir (ms). */
const JOURNAL_RISE_DELAY_MS = 350;

/** Número do primeiro registro (aparece em "NO. 000" e "PÁGINA 00"). */
const JOURNAL_FIRST_NUMBER = 0;

/** Curva de suavização (começa e termina devagar). */
const JOURNAL_EASING = "cubic-bezier(0.45, 0, 0.25, 1)";

/**
 * Até onde a folha da frente desliza antes de ir para trás.
 * Valores em % da própria folha: translate(lado, altura).
 * Positivo = direita/baixo, negativo = esquerda/cima.
 */
const JOURNAL_LEAVE_POSE = "translate(24%, -3%) rotate(5deg)";

/**
 * Respeitar a opção "reduzir movimento" do sistema (acessibilidade).
 * Se estiver ativa no computador, a troca acontece sem animação.
 * Mude para false apenas para testar; o ideal é manter true.
 */
const JOURNAL_RESPECT_REDUCED_MOTION = true;

/**
 * Pose de cada profundidade na pilha (0 = frente).
 * x e y em pixels, r (rotação) em graus. A última pose se repete.
 */
const JOURNAL_POSES = [
    { x: 0,  y: 0,  r: -1 },
    { x: 10, y: 8,  r: 1.2 },
    { x: 18, y: 15, r: -1.5 },
    { x: 26, y: 22, r: 2 },
    { x: 32, y: 28, r: -2 }
];


/* ========================================
   POSIÇÃO DAS CARTAS
======================================== */

/** Transform de uma profundidade (pilha mais compacta no celular). */
function journalPose(depth) {
    const pose = JOURNAL_POSES[Math.min(depth, JOURNAL_POSES.length - 1)];
    const scale = window.matchMedia("(max-width: 600px)").matches ? 0.6 : 1;

    return `translate(${pose.x * scale}px, ${pose.y * scale}px) rotate(${pose.r}deg)`;
}

/** Z-index de uma profundidade: quanto menor a profundidade, mais à frente. */
function journalZIndex(depth) {
    return 20 - depth;
}

/** Posiciona uma carta na profundidade informada (sem animar). */
function placeJournalCard(card, depth) {
    card.style.gridArea = "1 / 1";
    card.style.transition = "none";   // evita brigar com transições do CSS antigo
    card.style.transform = journalPose(depth);
    card.style.zIndex = String(journalZIndex(depth));
    card.dataset.depth = depth;
}

/** Marca (ou desmarca) uma carta como a da frente. */
function setJournalCurrent(card, isCurrent) {
    card.classList.toggle("is-current", isCurrent);
    card.setAttribute("aria-pressed", String(isCurrent));
}


/* ========================================
   RENDERIZAÇÃO
======================================== */

/** Monta o HTML de uma entrada do diário. */
function journalCardHTML(entry, index) {
    const title = escapeHTML(entry.title || `Registro ${index + 1}`);
    const date = escapeHTML(entry.date || "");
    const pageNumber = index + JOURNAL_FIRST_NUMBER;
    const hasSignature = hasValue(entry.signature);

    // Separa o texto em parágrafos (linha em branco = novo parágrafo).
    const paragraphs = String(entry.text || "")
        .split(/\r?\n\s*\r?\n/)
        .map(paragraph => paragraph.trim())
        .filter(Boolean)
        .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
        .join("");

    return `
        <article
            class="journal-paper ${index === 0 ? "is-current" : ""}"
            data-journal-index="${index}"
            role="button"
            tabindex="0"
            aria-pressed="${index === 0}"
            aria-label="Registro ${index + 1}: ${title}"
        >
            <div class="journal-paper-top">
                <span>REGISTRO PESSOAL</span>
                <span>NO. ${String(pageNumber).padStart(3, "0")} — <i>✦</i></span>
            </div>

            <h3>${title}</h3>

            ${date ? `<span class="journal-date">${date}</span>` : ""}

            <div class="journal-paper-content">${paragraphs}</div>

            <div class="journal-signature">
                <span class="${hasSignature ? "journal-autograph" : ""}">
                    ${hasSignature ? escapeHTML(entry.signature) : "FIM DO REGISTRO"}
                </span>
                <b>✧</b>
            </div>

            <div class="journal-page-number">
                PÁGINA ${String(pageNumber).padStart(2, "0")}
                <span>·</span>
                ARQUIVO DO PERSONAGEM
            </div>
        </article>
    `;
}

/** Atualiza o contador "01 / 05" do diário. */
function updateJournalCounter(stack) {
    const currentCard = stack.querySelector(".journal-paper.is-current");
    const currentDisplay = document.getElementById("journal-current-entry");
    const totalDisplay = document.getElementById("journal-total-entries");

    if (!currentDisplay || !totalDisplay) return;

    const currentNumber = currentCard ? Number(currentCard.dataset.journalIndex) + 1 : 0;

    currentDisplay.textContent = String(currentNumber).padStart(2, "0");
    totalDisplay.textContent = String(stack.querySelectorAll(".journal-paper").length).padStart(2, "0");
}

function renderJournal(stack) {
    const entries = Array.isArray(character.journal) ? character.journal : [];

    stack.innerHTML = entries.length === 0
        ? `<p class="journal-empty-state">Nenhum registro encontrado.</p>`
        : entries.map(journalCardHTML).join("");

    stack.querySelectorAll(".journal-paper").forEach((card, depth) => {
        placeJournalCard(card, depth);
    });

    updateJournalCounter(stack);
}


/* ========================================
   INTERAÇÃO E ANIMAÇÃO
======================================== */

function setupJournalEvents(stack) {
    const reduceMotion = JOURNAL_RESPECT_REDUCED_MOTION &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ordem atual da pilha: o índice 0 é a folha da frente.
    let order = [...stack.querySelectorAll(".journal-paper")];
    let isAnimating = false;

    /** Traz `selected` para a frente e manda a folha atual para o fundo. */
    function bringToFront(selected) {
        if (isAnimating || order.length < 2) return;
        if (!order.includes(selected) || selected === order[0]) return;

        const leaving = order[0];

        // Guarda a pose atual de cada carta para animar a partir dela.
        const previousPose = new Map(order.map(card => [card, card.style.transform]));

        order = [selected, ...order.filter(card => card !== selected && card !== leaving), leaving];

        // Define o estado FINAL de todas as cartas.
        order.forEach((card, depth) => {
            setJournalCurrent(card, card === selected);
            placeJournalCard(card, depth);
        });

        updateJournalCounter(stack);

        if (reduceMotion) return;

        isAnimating = true;

        const finalLeavingZ = leaving.style.zIndex;
        const animations = [];

        // A folha que sai fica por cima durante a primeira metade do movimento.
        leaving.style.zIndex = "30";

        animations.push(leaving.animate([
            { transform: previousPose.get(leaving), offset: 0 },
            { transform: JOURNAL_LEAVE_POSE, offset: 0.42 },
            { transform: JOURNAL_LEAVE_POSE, offset: 0.55 },   // breve pausa
            { transform: leaving.style.transform, offset: 1 }
        ], {
            duration: JOURNAL_LEAVE_MS,
            easing: JOURNAL_EASING
        }));

        // No ponto de pausa, a folha passa para trás das outras.
        setTimeout(() => {
            leaving.style.zIndex = finalLeavingZ;
        }, JOURNAL_LEAVE_MS * 0.5);

        // As demais avançam; a escolhida espera um pouco para não sair de trás da folha.
        order.forEach(card => {
            if (card === leaving) return;

            animations.push(card.animate([
                { transform: previousPose.get(card) },
                { transform: card.style.transform }
            ], {
                duration: JOURNAL_RISE_MS,
                delay: card === selected ? JOURNAL_RISE_DELAY_MS : 0,
                easing: JOURNAL_EASING,
                fill: "backwards"   // mantém a pose antiga durante o atraso
            }));
        });

        Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
            isAnimating = false;
        });
    }

    stack.addEventListener("click", event => {
        const card = event.target.closest(".journal-paper");

        if (card) bringToFront(card);
    });

    stack.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;

        const card = event.target.closest(".journal-paper");

        if (!card) return;

        event.preventDefault();
        bringToFront(card);
    });
}


/* ========================================
   PONTO DE ENTRADA
======================================== */

function initializeJournal() {
    const stack = document.getElementById("journal-stack");

    if (!stack) return;

    renderJournal(stack);
    setupJournalEvents(stack);
}