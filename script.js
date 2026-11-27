/**
 * ============================================================================
 * DOSSIÊ DE BORIS LEUENAAR — LÓGICA DA PÁGINA
 * ============================================================================
 * Depende de `character-data.js`, que deve ser carregado ANTES deste arquivo
 * e declarar a constante global `character`.
 *
 * Índice:
 *   1. Constantes compartilhadas
 *   2. Funções auxiliares (puras)
 *   3. initializeDossier()
 *        3.1  Estado e elementos
 *        3.2  Capa e perfil
 *        3.3  Atributos
 *        3.4  Perícias e defesas
 *        3.5  Relações
 *        3.6  Inventário e itens
 *        3.7  Magias
 *        3.8  Playlist
 *        3.9  Player musical (reprodução, eventos, arrastar)
 *        3.10 Navegação e HUD
 *        3.11 Eventos globais
 *        3.12 Ornamentos
 *        3.13 Inicialização
 *   4. Ponto de entrada
 * ============================================================================
 */

/* ========================================
   1. CONSTANTES COMPARTILHADAS
======================================== */

/** Nomes dos graus de proficiência (perícias, defesas, conjuração). */
const RANK_LABELS = {
    untrained: "Destreinado",
    trained: "Treinado",
    expert: "Especialista",
    master: "Mestre",
    legendary: "Lendário"
};

/** Bônus de proficiência por grau (Pathfinder 2e). */
const PROFICIENCY_BONUS = {
    untrained: 0,
    trained: 2,
    expert: 4,
    master: 6,
    legendary: 8
};

/** Tradições mágicas reconhecidas (também usadas como sufixo de classe CSS). */
const TRADITION_LABELS = {
    divine: "Divine",
    occult: "Occult",
    primal: "Primal",
    arcane: "Arcane"
};

/** Títulos exibidos no painel de detalhes, por categoria de magia. */
const SPELL_CATEGORY_LABELS = {
    class: "MAGIA DE CLASSE · ORACLE",
    innate: "MAGIA INATA",
    focus: "FOCUS SPELL"
};

/**
 * Campos opcionais do painel de detalhes da magia.
 * [propriedade em `character.spells`, sufixo do id no HTML]
 * Ids resultantes: `spell-{sufixo}-row` e `spell-details-{sufixo}`.
 */
const SPELL_OPTIONAL_FIELDS = [
    ["actions", "actions"],
    ["range", "range"],
    ["area", "area"],
    ["targets", "targets"],
    ["duration", "duration"],
    ["savingThrow", "saving-throw"],
    ["defense", "defense"],
    ["cost", "cost"],
    ["requirements", "requirements"],
    ["trigger", "trigger"],
    ["components", "components"],
    ["traits", "traits"],
    ["heightened", "heightened"]
];

/** Áreas com rolagem vertical própria: a roda do mouse não move as telas. */
const VERTICAL_SCROLL_AREAS = [
    ".profile-layout",
    ".stats-main",
    ".defenses-card",
    ".relations-grid",
    ".spells-list-column",
    ".spell-details-panel"
].join(", ");

/** Chave do localStorage com a posição do player flutuante. */
const PLAYER_POSITION_KEY = "borisMusicPlayerPosition";


/* ========================================
   2. FUNÇÕES AUXILIARES
======================================== */

/** Define o texto de um elemento pelo id (ignora ids inexistentes). */
function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value ?? "";
    }
}

/** Como `setText`, mas só altera se houver valor (preserva o texto do HTML). */
function setTextIfProvided(id, value) {
    if (value !== undefined && value !== null && value !== "") {
        setText(id, value);
    }
}

/** Escapa caracteres especiais para uso seguro em innerHTML. */
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

/** Informa se um valor opcional deve ser exibido. */
function hasValue(value) {
    return value !== undefined && value !== null && String(value).trim() !== "";
}

/** Retorna o grau de proficiência válido (ou "untrained"). */
function normalizeRank(rank) {
    return RANK_LABELS[rank] ? rank : "untrained";
}

/** Gera a etiqueta colorida de proficiência. */
function rankBadgeHTML(rank) {
    const key = normalizeRank(rank);

    return `<span class="skill-rank skill-rank--${key}">${RANK_LABELS[key]}</span>`;
}

/** Texto do rank de uma magia: "CANTRIP", "SPELL RANK 1" etc. */
function getSpellRankLabel(rank) {
    const value = String(rank ?? "").toLowerCase();

    if (value === "cantrip") return "CANTRIP";
    if (/^\d+$/.test(value)) return `SPELL RANK ${value}`;

    return "RANK NÃO INFORMADO";
}

/** Rótulo e modificador de classe CSS de uma tradição mágica. */
function getTraditionInfo(tradition) {
    const key = String(tradition || "").toLowerCase();
    const known = Boolean(TRADITION_LABELS[key]);

    return {
        label: known ? TRADITION_LABELS[key] : "Tradição não informada",
        modifier: known ? `spell-tradition--${key}` : ""
    };
}

/** Escapa o texto e converte **negrito** em <strong>. */
function formatSpellDescription(description) {
    return escapeHTML(description).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/** Gera uma inscrição aleatória de 5 runas (U+16A0 a U+16F8). */
function generateRunicInscription() {
    const first = 0x16A0;
    const last = 0x16F8;

    return Array.from({ length: 5 }, () =>
        String.fromCodePoint(first + Math.floor(Math.random() * (last - first + 1)))
    ).join("");
}

/** Formata segundos como "m:ss". */
function formatMusicTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remaining = Math.floor(seconds % 60);

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

/** Calcula a CD de magia: 10 + atributo + (nível + proficiência, se treinado). */
function calculateSpellDC() {
    const spellcasting = character.spellcasting || {};
    const ability = character.stats.find(
        stat => stat.abbreviation === spellcasting.ability
    );

    const rank = String(spellcasting.proficiency || "untrained").toLowerCase();
    const rankBonus = PROFICIENCY_BONUS[rank];

    if (rankBonus === undefined) {
        console.error("Proficiência de conjuração inválida:", rank);
        return "—";
    }

    const modifier = Number(ability?.value) || 0;
    const level = Number(character.level) || 0;
    const proficiency = rank === "untrained" ? 0 : level + rankBonus;

    return 10 + modifier + proficiency;
}


/* ========================================
   3. DOSSIÊ
======================================== */

function initializeDossier() {

    /* ---- 3.1 Estado e elementos ---- */

    const world = document.getElementById("world");
    const musicAudio = document.getElementById("music-audio");
    const screens = Array.from(document.querySelectorAll(".screen"));
    const navButtons = Array.from(document.querySelectorAll(".nav-link"));
    const coverButtons = Array.from(document.querySelectorAll(".cover-menu [data-target]"));
    const pageProgress = document.getElementById("page-progress");
    const previousButton = document.getElementById("previous-screen");
    const nextButton = document.getElementById("next-screen");

    if (!world || screens.length === 0) {
        console.error("Não foi possível iniciar o dossiê. Verifique o HTML.");
        return;
    }

    let activeIndex = 0;
    let activeFilter = "all";
    let currentTrackIndex = -1;


    /* ---- 3.2 Capa e perfil ---- */

    /** Mostra a arte do personagem na capa e no perfil (se houver). */
    function renderArt() {
        if (!character.art || character.art.trim() === "") return;

        ["cover", "profile"].forEach(place => {
            const image = document.getElementById(`${place}-art-image`);
            const placeholder = document.getElementById(`${place}-art-placeholder`);

            if (!image) return;

            image.src = character.art;
            image.hidden = false;
            if (placeholder) placeholder.hidden = true;

            // Se a imagem falhar, volta ao placeholder.
            image.addEventListener("error", () => {
                image.hidden = true;
                if (placeholder) placeholder.hidden = false;
                console.error("Não foi possível carregar a imagem:", character.art);
            }, { once: true });
        });
    }

    function renderCharacter() {
        setTextIfProvided("cover-title", character.name);
        setTextIfProvided("cover-epithet", character.epithet);
        setTextIfProvided("cover-intro", character.intro);
        setTextIfProvided("profile-name", character.name);
        setTextIfProvided("profile-role", character.role);
        setTextIfProvided("profile-bio", character.bio);
        setTextIfProvided("character-level", String(character.level).padStart(2, "0"));
        setTextIfProvided("character-class", character.className);

        const facts = document.getElementById("profile-facts");

        if (facts && character.facts.length > 0) {
            facts.innerHTML = character.facts.map(fact => `
                <div class="fact">
                    <span>${escapeHTML(fact.label)}</span>
                    <strong>${escapeHTML(fact.value)}</strong>
                </div>
            `).join("");
        }

        renderArt();
    }


    /* ---- 3.3 Atributos ---- */

    function renderStats() {
        const list = document.getElementById("stat-list");
        const derived = document.getElementById("derived-grid");

        if (list) {
            list.innerHTML = character.stats.length === 0
                ? `<p class="empty-inventory">Atributos ainda não cadastrados.</p>`
                : character.stats.map(stat => {
                    const max = Math.max(1, Number(stat.max) || 20);
                    const value = Math.max(0, Math.min(max, Number(stat.value) || 0));

                    return `
                        <div class="stat-row">
                            <div class="stat-abbr">${escapeHTML(stat.abbreviation)}</div>
                            <div class="stat-info">
                                <div class="stat-name">
                                    <span>${escapeHTML(stat.name)}</span>
                                    <span>${value}/${max}</span>
                                </div>
                                <div class="stat-track">
                                    <span style="width: ${(value / max) * 100}%"></span>
                                </div>
                            </div>
                            <strong class="stat-value">${value}</strong>
                        </div>
                    `;
                }).join("");
        }

        if (derived) {
            derived.innerHTML = character.derivedStats.length === 0
                ? `<p class="empty-inventory">Valores derivados ainda não cadastrados.</p>`
                : character.derivedStats.map(stat => `
                    <div class="derived-card">
                        <span>${escapeHTML(stat.label)}</span>
                        <strong>${escapeHTML(stat.value)}</strong>
                        <small>${escapeHTML(stat.note)}</small>
                    </div>
                `).join("");
        }
    }


    /* ---- 3.4 Perícias e defesas ---- */

    function renderSkills() {
        const grid = document.getElementById("skills-grid");
        if (!grid) return;

        const skills = character.skills || [];

        grid.innerHTML = skills.length === 0
            ? `<p class="skills-empty">Nenhuma perícia cadastrada.</p>`
            : skills.map(skill => `
                <div class="skill-card">
                    <div class="skill-card-info">
                        <strong>${escapeHTML(skill.name)}</strong>
                        <small>${escapeHTML(skill.ability || "")}</small>
                    </div>
                    ${rankBadgeHTML(skill.rank)}
                </div>
            `).join("");
    }

    /** Speed e defesas (usam o mesmo cartão das perícias). */
    function renderDefenses() {
        const speed = document.getElementById("character-speed");
        const list = document.getElementById("defenses-list");

        if (speed) speed.textContent = character.speed || "—";
        if (!list) return;

        list.innerHTML = (character.defenses || []).map(defense => `
            <div class="skill-card">
                <div class="skill-card-info">
                    <strong>${escapeHTML(defense.name)}</strong>
                </div>
                ${rankBadgeHTML(defense.rank)}
            </div>
        `).join("");
    }


    /* ---- 3.5 Relações ---- */

    function renderRelationships() {
        const grid = document.getElementById("relations-grid");
        const relationships = character.relationships || [];

        // Sem relações: mantém a mensagem vazia que já está no HTML.
        if (!grid || relationships.length === 0) return;

        grid.innerHTML = relationships.map(person => {
            const name = escapeHTML(person.name || "Sem nome");
            const role = escapeHTML(person.role || "");
            const description = escapeHTML(person.description || "");
            const toneClass = ["positive", "neutral", "negative"].includes(person.tone)
                ? `relationship-role--${person.tone}`
                : "";

            const portrait = person.portrait
                ? `<img class="relationship-portrait" src="${escapeHTML(person.portrait)}"
                        alt="Retrato de ${name}" loading="lazy">`
                : `<div class="relationship-portrait relationship-portrait--empty">✧</div>`;

            return `
                <article class="relationship-card">
                    <div class="relationship-portrait-frame">
                        <div class="relationship-portrait-window">${portrait}</div>
                        <span class="portrait-ornament">✧</span>
                    </div>
                    <div class="relationship-card-content">
                        ${role ? `<span class="relationship-role ${toneClass}">${role}</span>` : ""}
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                </article>
            `;
        }).join("");
    }


    /* ---- 3.6 Inventário e itens ---- */

    function renderInventory(filter = activeFilter) {
        activeFilter = filter;

        const grid = document.getElementById("inventory-grid");
        if (!grid) return;

        // Guarda o índice original para abrir o item certo após filtrar.
        const items = character.inventory
            .map((item, index) => ({ ...item, originalIndex: index }))
            .filter(item => filter === "all" || item.category === filter);

        document.querySelectorAll(".filter-tab").forEach(button => {
            const selected = button.dataset.filter === filter;

            button.classList.toggle("is-selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });

        setText("inventory-total", `${String(character.inventory.length).padStart(2, "0")} ITENS`);
        setText(
            "inventory-counter",
            `${items.length} ${items.length === 1 ? "item encontrado" : "itens encontrados"}`
        );

        grid.innerHTML = items.length === 0
            ? `<p class="empty-inventory">Nenhum item registrado nesta categoria.</p>`
            : items.map(item => `
                <button class="item-card" type="button" data-item-index="${item.originalIndex}">
                    <span class="item-icon">${escapeHTML(item.icon || "✧")}</span>
                    <span class="item-type">${escapeHTML(item.type)}</span>
                    <span class="item-name">${escapeHTML(item.name)}</span>
                    <span class="item-bottom">
                        <span class="item-rarity">${escapeHTML(item.rarity)}</span>
                        <span>× ${escapeHTML(item.quantity)}</span>
                    </span>
                </button>
            `).join("");

        renderCarryCapacity();
    }

    /** Atualiza o texto e a barra de capacidade de carga. */
    function renderCarryCapacity() {
        if (!character.carry) return;

        const current = Number(character.carry.current) || 0;
        const max = Number(character.carry.max) || 0;

        if (max <= 0) return;

        setText("capacity-value", `${current} / ${max}`);

        const fill = document.getElementById("capacity-fill");

        if (fill) {
            fill.style.width = `${Math.min(100, (current / max) * 100)}%`;
        }
    }

    /** Abre a janela de detalhes de um item. */
    function showItem(index) {
        const item = character.inventory[index];
        const dialog = document.getElementById("item-dialog");

        if (!item || !dialog) return;

        setText("dialog-category", item.type);
        setText("dialog-icon", item.icon || "✧");
        setText("dialog-name", item.name);
        setText("dialog-rarity", item.rarity);
        setText("dialog-description", item.description);
        setText("dialog-quantity", `Quantidade registrada: ${item.quantity}`);

        if (!dialog.open) dialog.showModal();
    }


    /* ---- 3.7 Magias ---- */

    /** Monta o cartão de uma magia na lista. */
    function spellCardHTML(spell, categoryKey, rankLabel) {
        const tradition = getTraditionInfo(spell.tradition);
        const isClass = categoryKey === "class";

        return `
            <button class="spell-card" type="button"
                    data-spell-category="${categoryKey}"
                    data-spell-index="${spell.originalIndex}">
                <span class="spell-card-top">
                    <span class="spell-tradition ${tradition.modifier}">${tradition.label}</span>
                    <span class="spell-card-rank">${escapeHTML(rankLabel)}</span>
                </span>
                <span class="spell-card-title-row">
                    <span class="spell-card-name">${escapeHTML(spell.name || "Magia sem nome")}</span>
                    ${isClass && spell.signature === true
                        ? `<span class="spell-signature" title="Signature Spell" aria-label="Signature Spell">★</span>`
                        : ""}
                    ${isClass && spell.granted === true
                        ? `<span class="spell-granted">Granted Spell</span>`
                        : ""}
                    ${spell.damage ? `<span class="spell-damage">${escapeHTML(spell.damage)}</span>` : ""}
                    ${spell.healing ? `<span class="spell-healing">${escapeHTML(spell.healing)}</span>` : ""}
                </span>
            </button>
        `;
    }

    /** Agrupa as magias de uma categoria por rank (Cantrips primeiro). */
    function groupSpellsByRank(spells) {
        const groups = new Map();

        spells.forEach((spell, index) => {
            const rank = String(spell.rank ?? "unknown").toLowerCase();

            if (!groups.has(rank)) groups.set(rank, []);
            groups.get(rank).push({ ...spell, originalIndex: index });
        });

        const order = rank => (rank === "cantrip" ? 0 : Number(rank) || 99);

        return [...groups.entries()].sort(([a], [b]) => order(a) - order(b));
    }

    function renderSpells() {
        setText("spell-dc-value", calculateSpellDC());

        const categories = ["class", "innate", "focus"];
        let totalSpells = 0;

        categories.forEach(key => {
            const section = document.getElementById(`${key}-spells-section`);
            const list = document.getElementById(`${key}-spells-list`);

            if (!section || !list) return;

            const spells = Array.isArray(character.spells?.[key]) ? character.spells[key] : [];

            totalSpells += spells.length;
            section.hidden = spells.length === 0;

            list.innerHTML = groupSpellsByRank(spells).map(([rank, rankSpells]) => {
                const rankLabel = getSpellRankLabel(rank);

                return `
                    <div class="spell-rank-group">
                        <div class="spell-rank-heading">
                            <h4>${escapeHTML(rankLabel)}</h4>
                            <span>${rankSpells.length} ${rankSpells.length === 1 ? "MAGIA" : "MAGIAS"}</span>
                        </div>
                        <div class="spell-grid">
                            ${rankSpells.map(spell => spellCardHTML(spell, key, rankLabel)).join("")}
                        </div>
                    </div>
                `;
            }).join("");
        });

        const emptyState = document.getElementById("spells-empty-state");
        if (emptyState) emptyState.hidden = totalSpells > 0;
    }

    /** Preenche um campo opcional e oculta a linha se estiver vazio. */
    function updateOptionalField(slug, value) {
        const row = document.getElementById(`spell-${slug}-row`);
        const element = document.getElementById(`spell-details-${slug}`);
        const visible = hasValue(value);

        if (element) element.textContent = visible ? value : "";
        if (row) row.hidden = !visible;
    }

    /** Preenche uma etiqueta (dano/cura) e a oculta se não houver valor. */
    function updateTag(id, prefix, value) {
        const element = document.getElementById(id);
        if (!element) return;

        element.textContent = value ? `${prefix}: ${value}` : "";
        element.hidden = !value;
    }

    /** Mostra os detalhes da magia selecionada. */
    function showSpell(category, index) {
        const spells = character.spells?.[category];
        const spell = Array.isArray(spells) ? spells[index] : null;

        setText("spell-details-runes", generateRunicInscription());

        if (!spell) return;

        setText("spell-details-category", SPELL_CATEGORY_LABELS[category] || "MAGIA");
        setText("spell-details-rank", getSpellRankLabel(spell.rank));
        setText("spell-details-name", spell.name || "Magia sem nome");

        document.getElementById("spell-details-description").innerHTML =
            formatSpellDescription(spell.description || "Descrição não cadastrada.");

        const traditionElement = document.getElementById("spell-details-tradition");

        if (traditionElement) {
            const tradition = getTraditionInfo(spell.tradition);

            traditionElement.textContent = tradition.label;
            traditionElement.className = `spell-tradition ${tradition.modifier}`.trim();
        }

        SPELL_OPTIONAL_FIELDS.forEach(([field, slug]) => {
            updateOptionalField(slug, spell[field]);
        });

        updateTag("spell-details-damage", "Dano", spell.damage);
        updateTag("spell-details-healing", "Cura", spell.healing);

        // Signature: somente para magias de classe.
        const signature = document.getElementById("spell-details-signature");
        if (signature) signature.hidden = !(category === "class" && spell.signature === true);

        const emptyPanel = document.getElementById("spell-details-empty");
        const content = document.getElementById("spell-details-content");

        if (emptyPanel) emptyPanel.hidden = true;
        if (content) content.hidden = false;

        document.querySelectorAll(".spell-card").forEach(card => {
            card.classList.toggle(
                "is-selected",
                card.dataset.spellCategory === category &&
                Number(card.dataset.spellIndex) === index
            );
        });
    }

    /* ---- 3.8 Diário ---- */

    function renderJournal() {
        const stack = document.getElementById("journal-stack");
        if (!stack) return;

        const entries = Array.isArray(character.journal)
            ? character.journal
            : [];

        if (entries.length === 0) {
            stack.innerHTML = `
                <p class="journal-empty-state">
                    Nenhum registro encontrado.
                </p>
            `;
            return;
        }

        stack.innerHTML = entries.map((entry, index) => {
            const title = escapeHTML(entry.title || `Registro ${index + 1}`);
            const date = escapeHTML(entry.date || "");
            const pageNumber = index + 5;

            // Separa o texto em parágrafos.
            const paragraphs = String(entry.text || "")
                .split(/\r?\n\s*\r?\n/)
                .map(paragraph => paragraph.trim())
                .filter(Boolean)
                .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
                .join("");

            const hasSignature = hasValue(entry.signature);

            const signature = hasSignature
                ? escapeHTML(entry.signature)
                : "FIM DO REGISTRO";

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
                        <span>
                            NO. ${String(pageNumber).padStart(3, "0")} —
                            <i>✦</i>
                        </span>
                    </div>

                    <h3>${title}</h3>

                    ${date
                        ? `<span class="journal-date">${date}</span>`
                        : ""}

                    ${paragraphs}

                    <div class="journal-signature">
                        <span class="${hasSignature ? "journal-autograph" : ""}">
                            ${signature}
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
        }).join("");
    }

    /* ---- 3.8.1 Interação do Diário ---- */

    function setupJournalEvents() {
        const stack = document.getElementById("journal-stack");
        if (!stack) return;

        function activateJournalCard(selectedCard) {
            if (!selectedCard || !stack.contains(selectedCard)) return;

            const cards = [...stack.querySelectorAll(".journal-paper")];
            const currentCard = stack.querySelector(".journal-paper.is-current");

            if (!currentCard || selectedCard === currentCard) return;

            const currentIndex = cards.indexOf(currentCard);
            const selectedIndex = cards.indexOf(selectedCard);

            // Troca a posição das duas cartas.
            [cards[currentIndex], cards[selectedIndex]] =
                [cards[selectedIndex], cards[currentIndex]];

            // Atualiza a ordem no HTML.
            cards.forEach(card => stack.appendChild(card));

            // Define qual carta está em primeiro plano.
            cards.forEach((card, index) => {
                const isCurrent = index === 0;

                card.classList.toggle("is-current", isCurrent);
                card.setAttribute("aria-pressed", String(isCurrent));
            });
        }

        // Clique do mouse.
        stack.addEventListener("click", event => {
            const card = event.target.closest(".journal-paper");
            activateJournalCard(card);
        });

        // Teclas Enter e Espaço.
        stack.addEventListener("keydown", event => {
            if (event.key !== "Enter" && event.key !== " ") return;

            const card = event.target.closest(".journal-paper");
            if (!card) return;

            event.preventDefault();
            activateJournalCard(card);
        });
    }

    /* ---- 3.9 Playlist ---- */

    /** Monta o cartão expansível de uma faixa. */
    function trackCardHTML(track, index) {
        const title = escapeHTML(track.title || `Faixa ${index + 1}`);
        const artist = escapeHTML(track.artist || "Artista não informado");
        const album = escapeHTML(track.album || "Álbum não informado");
        const description = escapeHTML(track.description || "Nenhuma descrição cadastrada.");

        const cover = track.cover
            ? `<img class="playlist-track-cover" src="${escapeHTML(track.cover)}"
                    alt="Capa de ${title}" loading="lazy">`
            : `<div class="playlist-track-cover" aria-hidden="true">♫</div>`;

        return `
            <article class="playlist-track" data-track-card="${index}">
                <button type="button" class="playlist-track-header"
                        data-track-toggle="${index}"
                        aria-expanded="false"
                        aria-controls="playlist-track-details-${index}">
                    ${cover}
                    <span class="playlist-track-info">
                        <h4>${title}</h4>
                        <p>${artist}</p>
                    </span>
                    <span class="playlist-track-toggle" aria-hidden="true">⌄</span>
                </button>

                <div class="playlist-track-details" id="playlist-track-details-${index}" hidden>
                    <p class="playlist-track-album">${album}</p>
                    <p class="playlist-track-description">${description}</p>
                    <button type="button" class="playlist-track-play" data-play-track="${index}">
                        ▶ Reproduzir
                    </button>
                </div>
            </article>
        `;
    }

    function renderPlaylist() {
        const grid = document.getElementById("playlist-grid");
        if (!grid) return;

        const tracks = Array.isArray(character.playlist) ? character.playlist : [];

        setText("playlist-total", `${String(tracks.length).padStart(2, "0")} FAIXAS`);

        // O player global só aparece quando há músicas.
        const player = document.getElementById("music-player");
        if (player) player.hidden = tracks.length === 0;

        grid.innerHTML = tracks.length === 0
            ? `
                <div class="playlist-empty-state">
                    <span class="placeholder-symbol">♫</span>
                    <h3>Nenhuma faixa registrada</h3>
                    <p>
                        Este espaço será preenchido com músicas
                        que representem Boris, sua personalidade,
                        suas memórias e sua jornada.
                    </p>
                </div>
            `
            : tracks.map(trackCardHTML).join("");
    }

    /** Expande um cartão da playlist (fechando os outros) ou o recolhe. */
    function toggleTrackCard(toggleButton, grid) {
        const card = toggleButton.closest(".playlist-track");
        const details = card?.querySelector(".playlist-track-details");

        if (!card || !details) return;

        const wasExpanded = !details.hidden;

        grid.querySelectorAll(".playlist-track").forEach(other => {
            other.classList.remove("is-expanded");
            other.querySelector(".playlist-track-details").hidden = true;
            other.querySelector("[data-track-toggle]").setAttribute("aria-expanded", "false");
        });

        if (!wasExpanded) {
            details.hidden = false;
            card.classList.add("is-expanded");
            toggleButton.setAttribute("aria-expanded", "true");
        }
    }


    /* ---- 3.9 Player musical ---- */

    /** Atualiza título, artista e capa no player global. */
    function updateMusicPlayerInfo(track) {
        const player = document.getElementById("music-player");
        const cover = document.getElementById("music-player-cover");
        const title = track.title || "Faixa sem título";
        const artist = track.artist || "Artista desconhecido";

        if (player) player.hidden = false;

        setText("music-player-title", title);
        setText("music-player-artist", artist);
        setText("music-player-panel-title", title);
        setText("music-player-panel-artist", artist);

        if (!cover) return;

        if (track.cover) {
            cover.src = track.cover;
            cover.alt = `Capa de ${track.title || "música"}`;
            cover.hidden = false;
        } else {
            cover.removeAttribute("src");
            cover.alt = "";
            cover.hidden = true;
        }
    }

    /** Atualiza o botão play/pause do player e os botões dos cartões. */
    function updateMusicPlayerButton() {
        const button = document.getElementById("music-player-play");
        const isPlaying = Boolean(musicAudio) && !musicAudio.paused;

        if (button) {
            button.textContent = isPlaying ? "Ⅱ" : "▶";
            button.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproduzir música");
        }

        document.querySelectorAll("[data-play-track]").forEach(trackButton => {
            const isCurrent = Number(trackButton.dataset.playTrack) === currentTrackIndex;

            trackButton.textContent = isCurrent && isPlaying ? "Ⅱ Pausar" : "▶ Reproduzir";
        });
    }

    /** Atualiza a barra de progresso e os tempos. */
    function updateMusicProgress() {
        if (!musicAudio) return;

        const progress = document.getElementById("music-player-progress");
        const total = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;

        if (progress) {
            progress.value = total > 0 ? (musicAudio.currentTime / total) * 100 : 0;
        }

        setText("music-player-current-time", formatMusicTime(musicAudio.currentTime));
        setText("music-player-duration", formatMusicTime(total));
    }

    /** Reproduz a faixa de índice `index`. */
    function playMusicTrack(index) {
        const track = (character.playlist || [])[index];

        if (!track) return;

        if (!track.audio) {
            alert("Esta música ainda não possui um arquivo de áudio cadastrado.");
            return;
        }

        if (!musicAudio) {
            console.error("Elemento de áudio não encontrado no HTML.");
            return;
        }

        currentTrackIndex = index;
        updateMusicPlayerInfo(track);

        document.querySelectorAll(".playlist-track").forEach(card => {
            card.classList.toggle("is-active", Number(card.dataset.trackCard) === index);
        });

        musicAudio.src = track.audio;
        musicAudio.load();

        musicAudio.play()?.catch(error => {
            console.error("Não foi possível reproduzir a música:", error);
            updateMusicPlayerButton();
        });

        updateMusicPlayerButton();
    }

    /** Alterna entre reproduzir e pausar a faixa atual. */
    function toggleMusicPlayback() {
        if (!musicAudio) return;

        if (currentTrackIndex === -1) {
            playMusicTrack(0);
            return;
        }

        if (musicAudio.paused) {
            musicAudio.play()?.catch(error => {
                console.error("Erro ao retomar a música:", error);
            });
        } else {
            musicAudio.pause();
        }

        updateMusicPlayerButton();
    }

    /** Avança (+1) ou volta (-1) uma faixa, de forma circular. */
    function changeMusicTrack(direction) {
        const tracks = character.playlist || [];

        if (tracks.length === 0) return;

        if (currentTrackIndex === -1) {
            playMusicTrack(direction > 0 ? 0 : tracks.length - 1);
            return;
        }

        playMusicTrack((currentTrackIndex + direction + tracks.length) % tracks.length);
    }

    function setupMusicPlayerEvents() {
        const grid = document.getElementById("playlist-grid");
        const trigger = document.getElementById("music-player-trigger");
        const panel = document.getElementById("music-player-panel");
        const volume = document.getElementById("music-player-volume");
        const progress = document.getElementById("music-player-progress");
        const openPlaylist = document.getElementById("music-player-open-playlist");

        // Cartões da playlist: reproduzir ou expandir.
        grid?.addEventListener("click", event => {
            const playButton = event.target.closest("[data-play-track]");

            if (playButton) {
                const index = Number(playButton.dataset.playTrack);

                if (currentTrackIndex === index) {
                    toggleMusicPlayback();
                } else {
                    playMusicTrack(index);
                }
                return;
            }

            const toggleButton = event.target.closest("[data-track-toggle]");

            if (toggleButton) toggleTrackCard(toggleButton, grid);
        });

        // Expande/recolhe o painel do player global.
        if (trigger && panel) {
            trigger.addEventListener("click", () => {
                const isExpanded = trigger.getAttribute("aria-expanded") === "true";
                const arrow = trigger.querySelector(".music-player-trigger-arrow");

                panel.hidden = isExpanded;
                trigger.setAttribute("aria-expanded", String(!isExpanded));
                if (arrow) arrow.textContent = isExpanded ? "⌃" : "⌄";
            });
        }

        // Botões anterior / play-pause / próxima.
        const playerActions = {
            toggle: toggleMusicPlayback,
            previous: () => changeMusicTrack(-1),
            next: () => changeMusicTrack(1)
        };

        document.querySelectorAll("[data-player-action]").forEach(button => {
            button.addEventListener("click", () => {
                playerActions[button.dataset.playerAction]?.();
            });
        });

        if (!musicAudio) return;

        if (volume) {
            musicAudio.volume = Number(volume.value);
            volume.addEventListener("input", () => {
                musicAudio.volume = Number(volume.value);
            });
        }

        ["timeupdate", "loadedmetadata", "durationchange"].forEach(name => {
            musicAudio.addEventListener(name, updateMusicProgress);
        });

        // Busca por um ponto da música.
        progress?.addEventListener("input", () => {
            if (Number.isFinite(musicAudio.duration) && musicAudio.duration > 0) {
                musicAudio.currentTime = (Number(progress.value) / 100) * musicAudio.duration;
            }
        });

        musicAudio.addEventListener("play", updateMusicPlayerButton);
        musicAudio.addEventListener("pause", updateMusicPlayerButton);

        // Ao terminar, passa para a próxima faixa.
        musicAudio.addEventListener("ended", () => {
            if ((character.playlist || []).length > 1) {
                changeMusicTrack(1);
            } else {
                updateMusicPlayerButton();
            }
        });

        openPlaylist?.addEventListener("click", () => goToScreen("playlist"));

        updateMusicPlayerButton();
        updateMusicProgress();
    }

    /** Permite arrastar o player flutuante e lembra a última posição. */
    function setupMusicPlayerDrag() {
        const player = document.getElementById("music-player");
        const handle = document.getElementById("music-player-trigger");

        if (!player || !handle) return;

        let pointerActive = false;
        let isDragging = false;
        let suppressNextClick = false;
        let startX = 0;
        let startY = 0;
        let startLeft = 0;
        let startTop = 0;

        /** Posiciona o player mantendo-o dentro da janela. */
        function setPlayerPosition(left, top) {
            const rect = player.getBoundingClientRect();
            const maxLeft = Math.max(0, window.innerWidth - rect.width);
            const maxTop = Math.max(0, window.innerHeight - rect.height);

            player.style.left = `${Math.min(Math.max(0, left), maxLeft)}px`;
            player.style.top = `${Math.min(Math.max(0, top), maxTop)}px`;
            player.style.right = "auto";
            player.style.bottom = "auto";
        }

        function savePlayerPosition() {
            const rect = player.getBoundingClientRect();

            try {
                localStorage.setItem(
                    PLAYER_POSITION_KEY,
                    JSON.stringify({ left: rect.left, top: rect.top })
                );
            } catch (error) {
                console.warn("Não foi possível salvar a posição do player.");
            }
        }

        // Restaura a posição salva.
        try {
            const saved = JSON.parse(localStorage.getItem(PLAYER_POSITION_KEY));

            if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) {
                setPlayerPosition(saved.left, saved.top);
            }
        } catch (error) {
            console.warn("Não foi possível recuperar a posição do player.");
        }

        handle.addEventListener("pointerdown", event => {
            if (event.button !== 0) return;

            const rect = player.getBoundingClientRect();

            pointerActive = true;
            isDragging = false;
            startX = event.clientX;
            startY = event.clientY;
            startLeft = rect.left;
            startTop = rect.top;

            handle.setPointerCapture(event.pointerId);
        });

        handle.addEventListener("pointermove", event => {
            if (!pointerActive) return;

            const deltaX = event.clientX - startX;
            const deltaY = event.clientY - startY;

            // Movimentos pequenos continuam sendo um clique.
            if (!isDragging && Math.hypot(deltaX, deltaY) < 5) return;

            isDragging = true;
            player.classList.add("is-dragging");
            setPlayerPosition(startLeft + deltaX, startTop + deltaY);
        });

        handle.addEventListener("pointerup", event => {
            if (!pointerActive) return;

            pointerActive = false;

            if (isDragging) {
                savePlayerPosition();

                // Impede que o fim do arraste também abra/feche o player.
                suppressNextClick = true;
                setTimeout(() => { suppressNextClick = false; }, 0);
            }

            isDragging = false;
            player.classList.remove("is-dragging");

            if (handle.hasPointerCapture(event.pointerId)) {
                handle.releasePointerCapture(event.pointerId);
            }
        });

        handle.addEventListener("pointercancel", () => {
            pointerActive = false;
            isDragging = false;
            player.classList.remove("is-dragging");
        });

        // Captura o clique gerado após arrastar e o descarta.
        handle.addEventListener("click", event => {
            if (!suppressNextClick) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            suppressNextClick = false;
        }, true);

        // Reajusta a posição ao expandir/recolher o painel.
        handle.addEventListener("click", () => {
            requestAnimationFrame(() => {
                const rect = player.getBoundingClientRect();

                setPlayerPosition(rect.left, rect.top);
                savePlayerPosition();
            });
        });

        // Mantém o player visível se a janela mudar de tamanho.
        window.addEventListener("resize", () => {
            if (player.hidden || !player.style.left) return;

            const rect = player.getBoundingClientRect();

            setPlayerPosition(rect.left, rect.top);
            savePlayerPosition();
        });
    }

    /* ---- 3.10 Navegação e HUD ---- */

    /** Rola horizontalmente até a seção com o id informado. */
    function goToScreen(id) {
        const target = document.getElementById(id);

        if (target) {
            world.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
        }
    }

    /** Move uma seção para frente (+1) ou para trás (-1). */
    function moveScreen(direction) {
        const nextIndex = Math.max(0, Math.min(screens.length - 1, activeIndex + direction));

        goToScreen(screens[nextIndex].id);
    }

    /** Sincroniza menu lateral, contador, barra e setas com a seção visível. */
    function updateNavigation() {
        const center = world.scrollLeft + world.clientWidth / 2;
        let closestDistance = Infinity;

        // A seção ativa é a mais próxima do centro da área visível.
        screens.forEach((screen, index) => {
            const distance = Math.abs(center - (screen.offsetLeft + screen.offsetWidth / 2));

            if (distance < closestDistance) {
                closestDistance = distance;
                activeIndex = index;
            }
        });

        navButtons.forEach(button => {
            const active = button.dataset.target === screens[activeIndex].id;

            button.classList.toggle("is-active", active);
            button.setAttribute("aria-current", active ? "page" : "false");
        });

        setText("current-page", String(activeIndex).padStart(2, "0"));
        setText("total-pages", String(screens.length - 1).padStart(2, "0"));

        if (pageProgress) {
            const progress = screens.length > 1 ? (activeIndex / (screens.length - 1)) * 100 : 100;

            pageProgress.style.width = `${progress}%`;
        }

        if (previousButton) previousButton.disabled = activeIndex === 0;
        if (nextButton) nextButton.disabled = activeIndex === screens.length - 1;
    }

    /* ---- 3.11 Eventos globais ---- */

    function setupEvents() {
        // Menu lateral e botões da capa.
        [...navButtons, ...coverButtons].forEach(button => {
            button.addEventListener("click", () => {
                if (button.dataset.target) goToScreen(button.dataset.target);
            });
        });

        // Links internos (#secao) viram rolagem suave.
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener("click", event => {
                const targetId = link.getAttribute("href").slice(1);

                if (screens.some(screen => screen.id === targetId)) {
                    event.preventDefault();
                    goToScreen(targetId);
                }
            });
        });

        // Filtros do inventário.
        document.querySelectorAll(".filter-tab").forEach(button => {
            button.addEventListener("click", () => renderInventory(button.dataset.filter));
        });

        // Clique em um item do inventário.
        document.getElementById("inventory-grid")?.addEventListener("click", event => {
            const card = event.target.closest("[data-item-index]");

            if (card) showItem(Number(card.dataset.itemIndex));
        });

        // Clique em uma magia.
        document.getElementById("spells-content")?.addEventListener("click", event => {
            const card = event.target.closest(".spell-card");

            if (card) {
                showSpell(card.dataset.spellCategory, Number(card.dataset.spellIndex));
            }
        });

        previousButton?.addEventListener("click", () => moveScreen(-1));
        nextButton?.addEventListener("click", () => moveScreen(1));

        // Fecha o diálogo ao clicar fora do conteúdo.
        const dialog = document.getElementById("item-dialog");

        dialog?.addEventListener("click", event => {
            if (event.target === dialog) dialog.close();
        });

        // Roda do mouse: navegação horizontal, exceto nas áreas com rolagem vertical.
        world.addEventListener("wheel", event => {
            if (event.target instanceof Element && event.target.closest(VERTICAL_SCROLL_AREAS)) {
                return;
            }

            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.preventDefault();
                world.scrollLeft += event.deltaY;
            }
        }, { passive: false });

        world.addEventListener("scroll", updateNavigation, { passive: true });

        // Setas do teclado (ignoradas ao digitar ou com o diálogo aberto).
        window.addEventListener("keydown", event => {
            const active = document.activeElement;
            const isTyping = ["input", "textarea", "select"].includes(active?.tagName?.toLowerCase());

            if (isTyping || active?.isContentEditable || dialog?.open) return;

            if (event.key === "ArrowRight") {
                event.preventDefault();
                moveScreen(1);
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveScreen(-1);
            }
        });
    }

    /* ---- 3.12 Ornamentos ---- */

    /** Adiciona uma inscrição rúnica ao divisor de cada título de seção. */
    function addRunicDividers() {
        document.querySelectorAll(".screen-heading").forEach(heading => {
            if (heading.querySelector(".heading-runes")) return;

            const runes = document.createElement("span");

            runes.className = "heading-runes";
            runes.textContent = generateRunicInscription();
            runes.setAttribute("aria-hidden", "true");
            heading.appendChild(runes);
        });
    }

    /* ---- 3.13 Inicialização ---- */

    renderCharacter();
    renderJournal();
    setupJournalEvents();
    renderStats();
    renderSkills();
    renderDefenses();
    renderRelationships();
    renderInventory();
    renderSpells();
    renderPlaylist();
    setupEvents();
    setupMusicPlayerEvents();
    setupMusicPlayerDrag();
    addRunicDividers();
    updateNavigation();
}

/* ========================================
   4. PONTO DE ENTRADA
======================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDossier);
} else {
    initializeDossier();
}