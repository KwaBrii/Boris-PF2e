
/* ========================================
   1. DADOS DO PERSONAGEM
======================================== */

const character = {
    name: "Boris Leuenaar",

    epithet: "Tudo pode ser descoberto lendo as cartas... Ou a pessoa que puxou elas.",

    intro: "Nem todo Tiefling é mau, mas Boris certamente é caótico. Escondendo suas verdadeiras intenções através de sorrisos fáceis e um olhar oblíquo, ele chega em Magaambya, para a surpresa de todos os alunos dos Ramos Esmeraldas, financiado pelo mais bonzinho dos professores.",

    role: "Oracle · Lore Mystery",

    level: 1,

    className: "Oracle",

    art: "",

    facts: [
        { label: "Ancestralidade", value: "Elfo" },
        { label: "Herança", value: "Nephilim ✧ Hellspawn" },
        { label: "Mistério", value: "Lore" },
        { label: "Origem", value: "Sponsored by Teacher Ot" },
        { label: "Idade", value: "27 anos" },
        { label: "Alinhamento", value: "Chaotic Neutral" }
    ],

    bio: `Boris é apenas mais uma das inúmeras crianças demônio que foi abandonada pelas crenças do povo de Mwangi. Cresceu pelas ruas de Bloodcove, onde foi abandonado durante uma viagem de barco dos seus pais. Ou pelo menos é nisso que acreditava.

Durante a infância, sobrevivia como um marginal com o restante das crianças. Se tornou especialmente próximo de outras três crianças: uma Nephlim como ele chamada Maalika, um Amurrun (catfolk) de pelagem castanha chamado Leper e um Iruxi (lizardfolk) chamado Param. Juntos, eles aprontavam e roubavam pelas ruas de Bloodcove.`,

    stats: [
        { abbreviation: "FOR", name: "Força", value: 0, max: 6 },
        { abbreviation: "DES", name: "Destreza", value: 2, max: 6 },
        { abbreviation: "CON", name: "Constituição", value: 0, max: 6 },
        { abbreviation: "INT", name: "Inteligência", value: 3, max: 6 },
        { abbreviation: "SAB", name: "Sabedoria", value: 0, max: 6 },
        { abbreviation: "CAR", name: "Carisma", value: 4, max: 6 }
    ],

    skills: [
        { name: "Acrobacia", ability: "DES", rank: "trained" },
        { name: "Arcanismo", ability: "INT", rank: "trained" },
        { name: "Atletismo", ability: "FOR", rank: "untrained" },
        { name: "Artesanato", ability: "INT", rank: "untrained" },
        { name: "Enganação", ability: "CAR", rank: "trained" },
        { name: "Diplomacia", ability: "CAR", rank: "trained" },
        { name: "Intimidação", ability: "CAR", rank: "untrained" },
        { name: "Conhecimento: Leitura de Sorte", ability: "INT", rank: "trained" },
        { name: "Conhecimento: Leis", ability: "INT", rank: "trained" },
        { name: "Conhecimento: Bloodcove", ability: "INT", rank: "trained" },
        { name: "Medicina", ability: "SAB", rank: "untrained" },
        { name: "Natureza", ability: "SAB", rank: "untrained" },
        { name: "Ocultismo", ability: "INT", rank: "trained" },
        { name: "Performance", ability: "CAR", rank: "trained" },
        { name: "Religião", ability: "SAB", rank: "trained" },
        { name: "Sociedade", ability: "INT", rank: "trained" },
        { name: "Furtividade", ability: "DES", rank: "trained" },
        { name: "Sobrevivência", ability: "SAB", rank: "untrained" },
        { name: "Ladinagem", ability: "DES", rank: "trained" }
    ],

    derivedStats: [
        { label: "PONTOS DE VIDA", value: "14 / 14", note: "PV atuais / máximos" },
        { label: "CLASSE DE ARMADURA", value: "17", note: "Defesa atual" }
    ],

    carry: { current: 4, max: 10 },

    inventory: [
        {
            name: "Tesoura",
            category: "equipment",
            type: "Arma",
            rarity: "Incomum",
            icon: "✂",
            quantity: 1,
            description: "Uma tesoura para costura que fica sempre no cinto de Boris. Não é como se ele à escondesse, mas ela também não parece uma arma até ser sacada."
        },
        {
            name: "Manto de viagem",
            category: "equipment",
            type: "Vestimenta",
            rarity: "Comum",
            icon: "♜",
            quantity: 1,
            description: "Um manto resistente, usado em longas jornadas. Descreva aqui sua aparência, proteção ou efeitos."
        },
        {
            name: "Frasco âmbar",
            category: "consumables",
            type: "Consumível",
            rarity: "Comum",
            icon: "⚗",
            quantity: 2,
            description: "Um pequeno frasco com conteúdo ainda não identificado. Informe aqui o efeito e as condições de uso."
        },
        {
            name: "Relíquia lunar",
            category: "relics",
            type: "Relíquia",
            rarity: "Raro",
            icon: "☾",
            quantity: 1,
            description: "Uma relíquia que parece reagir à luz da lua. Acrescente aqui sua origem, poderes e possíveis consequências."
        },
        {
            name: "Chave ornamentada",
            category: "relics",
            type: "Objeto-chave",
            rarity: "Especial",
            icon: "⚿",
            quantity: 1,
            description: "Uma chave de procedência desconhecida. Talvez abra uma porta; talvez seja importante por outro motivo."
        },
        {
            name: "Kit de viagem",
            category: "consumables",
            type: "Suprimento",
            rarity: "Comum",
            icon: "✣",
            quantity: 1,
            description: "Um conjunto de itens úteis para a estrada. Edite para listar o conteúdo do kit."
        }
    ],

    journalTitle: "",

    journalQuote: "",

    journalText: ""
};


/* ========================================
   2. FUNÇÕES AUXILIARES
======================================== */

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value ?? "";
    }
}

function setTextIfProvided(id, value) {
    if (value !== undefined && value !== null && value !== "") {
        setText(id, value);
    }
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}


/* ========================================
   3. ELEMENTOS DA PÁGINA
======================================== */

function initializeDossier() {
    const world = document.getElementById("world");

    const screens = Array.from(
        document.querySelectorAll(".screen")
    );

    const navButtons = Array.from(
        document.querySelectorAll(".nav-link")
    );

    const coverButtons = Array.from(
        document.querySelectorAll(".cover-menu [data-target]")
    );

    const currentPage = document.getElementById("current-page");
    const totalPages = document.getElementById("total-pages");
    const pageProgress = document.getElementById("page-progress");

    const previousButton =
        document.getElementById("previous-screen") ||
        document.getElementById("previous-page");

    const nextButton =
        document.getElementById("next-screen") ||
        document.getElementById("next-page");

    if (!world || screens.length === 0) {
        console.error(
            "Não foi possível iniciar o dossiê. Verifique o HTML."
        );
        return;
    }

    let activeIndex = 0;
    let activeFilter = "all";


    /* ========================================
       4. CAPA E PERFIL DO PERSONAGEM
    ======================================== */

    function renderCharacter() {
        setTextIfProvided("cover-title", character.name);
        setTextIfProvided("cover-epithet", character.epithet);
        setTextIfProvided("cover-intro", character.intro);
        setTextIfProvided("profile-name", character.name);
        setTextIfProvided("profile-role", character.role);
        setTextIfProvided("profile-bio", character.bio);

        setTextIfProvided(
            "character-level",
            String(character.level).padStart(2, "0")
        );

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

        // Carrega a arte do personagem, caso exista.

        if (character.art && character.art.trim() !== "") {
            ["cover", "profile"].forEach(place => {
                const image = document.getElementById(
                    `${place}-art-image`
                );

                const placeholder = document.getElementById(
                    `${place}-art-placeholder`
                );

                if (!image) return;

                image.src = character.art;
                image.hidden = false;

                if (placeholder) {
                    placeholder.hidden = true;
                }

                image.addEventListener("error", () => {
                    image.hidden = true;

                    if (placeholder) {
                        placeholder.hidden = false;
                    }

                    console.error(
                        "Não foi possível carregar a imagem:",
                        character.art
                    );
                }, { once: true });
            });
        }
    }


    /* ========================================
       5. ATRIBUTOS E ESTATÍSTICAS
    ======================================== */

    function renderStats() {
        const list = document.getElementById("stat-list");
        const derived = document.getElementById("derived-grid");

        // Preenche os atributos principais.

        if (list) {
            if (character.stats.length === 0) {
                list.innerHTML = `
                    <p class="empty-inventory">
                        Atributos ainda não cadastrados.
                    </p>
                `;
            } else {
                list.innerHTML = character.stats.map(stat => {
                    const max = Math.max(
                        1,
                        Number(stat.max) || 20
                    );

                    const value = Math.max(
                        0,
                        Math.min(max, Number(stat.value) || 0)
                    );

                    const percent = (value / max) * 100;

                    return `
                        <div class="stat-row">
                            <div class="stat-abbr">
                                ${escapeHTML(stat.abbreviation)}
                            </div>

                            <div class="stat-info">
                                <div class="stat-name">
                                    <span>${escapeHTML(stat.name)}</span>
                                    <span>${value}/${max}</span>
                                </div>

                                <div class="stat-track">
                                    <span style="width: ${percent}%"></span>
                                </div>
                            </div>

                            <strong class="stat-value">
                                ${value}
                            </strong>
                        </div>
                    `;
                }).join("");
            }
        }

        // Preenche os valores derivados.

        if (derived) {
            if (character.derivedStats.length === 0) {
                derived.innerHTML = `
                    <p class="empty-inventory">
                        Valores derivados ainda não cadastrados.
                    </p>
                `;
            } else {
                derived.innerHTML = character.derivedStats.map(stat => `
                    <div class="derived-card">
                        <span>${escapeHTML(stat.label)}</span>
                        <strong>${escapeHTML(stat.value)}</strong>
                        <small>${escapeHTML(stat.note)}</small>
                    </div>
                `).join("");
            }
        }
    }


    /* ========================================
       6. PERÍCIAS
    ======================================== */

    function renderSkills() {
        const grid = document.getElementById("skills-grid");

        if (!grid) return;

        const rankLabels = {
            trained: "Treinado",
            expert: "Especialista",
            master: "Mestre",
            legendary: "Lendário"
        };

        const validRanks = Object.keys(rankLabels);

        const trainedSkills = (character.skills || []).filter(skill =>
            validRanks.includes(skill.rank)
        );

        if (trainedSkills.length === 0) {
            grid.innerHTML = `
                <p class="skills-empty">
                    Nenhuma perícia treinada cadastrada.
                </p>
            `;
            return;
        }

        grid.innerHTML = trainedSkills.map(skill => `
            <div class="skill-card">

                <div class="skill-card-info">
                    <strong>${escapeHTML(skill.name)}</strong>
                    <small>${escapeHTML(skill.ability || "")}</small>
                </div>

                <span class="skill-rank skill-rank--${skill.rank}">
                    ${rankLabels[skill.rank]}
                </span>

            </div>
        `).join("");
    }


    /* ========================================
       7. INVENTÁRIO
    ======================================== */

    function renderInventory(filter = activeFilter) {
        activeFilter = filter;

        const grid = document.getElementById("inventory-grid");

        if (!grid) return;

        // Filtra os itens pela categoria selecionada.

        const items = character.inventory
            .map((item, index) => ({
                ...item,
                originalIndex: index
            }))
            .filter(item =>
                filter === "all" || item.category === filter
            );

        // Atualiza os botões de filtro.

        document.querySelectorAll(".filter-tab").forEach(button => {
            const selected = button.dataset.filter === filter;

            button.classList.toggle("is-selected", selected);

            button.setAttribute(
                "aria-pressed",
                String(selected)
            );
        });

        // Atualiza os contadores.

        setText(
            "inventory-total",
            `${String(character.inventory.length).padStart(2, "0")} ITENS`
        );

        setText(
            "inventory-counter",
            `${items.length} ${
                items.length === 1
                    ? "item encontrado"
                    : "itens encontrados"
            }`
        );

        // Exibe os itens ou uma mensagem vazia.

        if (items.length === 0) {
            grid.innerHTML = `
                <p class="empty-inventory">
                    Nenhum item registrado nesta categoria.
                </p>
            `;
        } else {
            grid.innerHTML = items.map(item => `
                <button
                    class="item-card"
                    type="button"
                    data-item-index="${item.originalIndex}"
                >
                    <span class="item-icon">
                        ${escapeHTML(item.icon || "✧")}
                    </span>

                    <span class="item-type">
                        ${escapeHTML(item.type)}
                    </span>

                    <span class="item-name">
                        ${escapeHTML(item.name)}
                    </span>

                    <span class="item-bottom">
                        <span class="item-rarity">
                            ${escapeHTML(item.rarity)}
                        </span>

                        <span>
                            × ${escapeHTML(item.quantity)}
                        </span>
                    </span>
                </button>
            `).join("");
        }

        // Atualiza a capacidade de carga.

        if (character.carry) {
            const current = Number(character.carry.current) || 0;
            const max = Number(character.carry.max) || 0;

            if (max > 0) {
                const percentage = Math.min(
                    100,
                    (current / max) * 100
                );

                setText(
                    "capacity-value",
                    `${current} / ${max}`
                );

                const capacityFill = document.getElementById(
                    "capacity-fill"
                );

                if (capacityFill) {
                    capacityFill.style.width = `${percentage}%`;
                }
            }
        }
    }


    /* ========================================
       8. DETALHES DOS ITENS
    ======================================== */

    function showItem(index) {
        const item = character.inventory[index];

        if (!item) return;

        const dialog = document.getElementById("item-dialog");

        if (!dialog) return;

        setText("dialog-category", item.type);
        setText("dialog-icon", item.icon || "✧");
        setText("dialog-name", item.name);
        setText("dialog-rarity", item.rarity);
        setText("dialog-description", item.description);

        setText(
            "dialog-quantity",
            `Quantidade registrada: ${item.quantity}`
        );

        if (!dialog.open) {
            dialog.showModal();
        }
    }


    /* ========================================
       9. NAVEGAÇÃO ENTRE AS SEÇÕES
    ======================================== */

    function goToScreen(id) {
        const target = document.getElementById(id);

        if (!target) return;

        world.scrollTo({
            left: target.offsetLeft,
            behavior: "smooth"
        });
    }

    function moveScreen(direction) {
        const nextIndex = Math.max(
            0,
            Math.min(
                screens.length - 1,
                activeIndex + direction
            )
        );

        goToScreen(screens[nextIndex].id);
    }


    /* ========================================
       10. ATUALIZAÇÃO DO MENU E HUD
    ======================================== */

    function updateNavigation() {
        const center = world.scrollLeft + world.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        // Descobre qual seção está mais próxima do centro.

        screens.forEach((screen, index) => {
            const screenCenter =
                screen.offsetLeft + screen.offsetWidth / 2;

            const distance = Math.abs(center - screenCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        activeIndex = closestIndex;

        // Atualiza os botões do menu lateral.

        navButtons.forEach(button => {
            const active =
                button.dataset.target === screens[activeIndex].id;

            button.classList.toggle("is-active", active);

            button.setAttribute(
                "aria-current",
                active ? "page" : "false"
            );
        });

        // Atualiza o número da página.

        setText(
            "current-page",
            String(activeIndex).padStart(2, "0")
        );

        setText(
            "total-pages",
            String(screens.length - 1).padStart(2, "0")
        );

        // Atualiza a barra de progresso.

        const progress = screens.length > 1
            ? (activeIndex / (screens.length - 1)) * 100
            : 100;

        if (pageProgress) {
            pageProgress.style.width = `${progress}%`;
        }

        // Habilita ou desabilita as setas.

        if (previousButton) {
            previousButton.disabled = activeIndex === 0;
        }

        if (nextButton) {
            nextButton.disabled = activeIndex === screens.length - 1;
        }
    }


    /* ========================================
       11. CONFIGURAÇÃO DOS EVENTOS
    ======================================== */

    function setupEvents() {
        // Menu lateral e botões da capa.

        [...navButtons, ...coverButtons].forEach(button => {
            button.addEventListener("click", () => {
                const target = button.dataset.target;

                if (target) {
                    goToScreen(target);
                }
            });
        });

        // Links internos que apontam para outras seções.

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener("click", event => {
                const targetId = link.getAttribute("href").slice(1);

                const targetScreen = screens.find(
                    screen => screen.id === targetId
                );

                if (targetScreen) {
                    event.preventDefault();
                    goToScreen(targetId);
                }
            });
        });

        // Filtros do inventário.

        document.querySelectorAll(".filter-tab").forEach(button => {
            button.addEventListener("click", () => {
                renderInventory(button.dataset.filter);
            });
        });

        // Clique nos itens do inventário.

        const inventoryGrid = document.getElementById("inventory-grid");

        if (inventoryGrid) {
            inventoryGrid.addEventListener("click", event => {
                const card = event.target.closest("[data-item-index]");

                if (card) {
                    showItem(Number(card.dataset.itemIndex));
                }
            });
        }

        // Botões de avançar e voltar.

        if (previousButton) {
            previousButton.addEventListener("click", () => {
                moveScreen(-1);
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                moveScreen(1);
            });
        }

        // Fecha o diálogo ao clicar fora do conteúdo.

        const dialog = document.getElementById("item-dialog");

        if (dialog) {
            dialog.addEventListener("click", event => {
                if (event.target === dialog) {
                    dialog.close();
                }
            });
        }

        // Rodinha do mouse: navegação horizontal,
        // exceto dentro das áreas com rolagem vertical.

        world.addEventListener("wheel", event => {
            if (
                event.target instanceof Element &&
                event.target.closest(".profile-layout, .stats-main")
            ) {
                return;
            }

            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.preventDefault();
                world.scrollLeft += event.deltaY;
            }
        }, { passive: false });

        // Atualiza a navegação ao deslizar as páginas.

        world.addEventListener(
            "scroll",
            updateNavigation,
            { passive: true }
        );

        // Navegação pelas setas do teclado.

        window.addEventListener("keydown", event => {
            const tag = document.activeElement?.tagName?.toLowerCase();

            const isTyping = [
                "input",
                "textarea",
                "select"
            ].includes(tag);

            const dialog = document.getElementById("item-dialog");

            if (isTyping || document.activeElement?.isContentEditable) {
                return;
            }

            if (dialog?.open) {
                return;
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                moveScreen(1);
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveScreen(-1);
            }
        });
    }


    /* ========================================
       12. INICIALIZAÇÃO
    ======================================== */

    renderCharacter();
    renderStats();
    renderSkills();
    renderInventory();
    setupEvents();
    updateNavigation();

}


/* ========================================
   13. INICIA QUANDO O HTML ESTIVER PRONTO
======================================== */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeDossier
    );
} else {
    initializeDossier();
}
