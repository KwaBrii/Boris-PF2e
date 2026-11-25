
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

    Durante a infância, sobrevivia como um marginal com o restante das crianças. Se tornou especialmente próximo de outras três crianças: uma Nephlim endiabrada como ele, chamada Amara; um Amurrun (catfolk) com pelagem de guepardo chamado Leper; e uma Iruxi (lizardfolk) chamada Param. Juntos se denominaram como 'O Quarteto Lancinante' e, durante sua infância e adolescência, aprontavam e roubavam pelas ruas de Bloodcove.

    Com o avançar dos anos, cada um começou a seguir seu próprio caminho. Leper, o mais novo, se juntou à embarcação de um Capitão Livre que passou por BloodCove e agora raramente dá as caras na cidade. Amara se tornou uma curandeira (das bem bravas) e que, no tempo livre, tenta cuidar do maior número de crianças órfãs possível. Param, sendo pouco mais velha, continuou na vida do crime, mas agora como uma mercenária, viajando por toda Expansão Mwangi. 

    Boris acabou ficando pela famosa Praça do Livre Comércio, com sua afinidade com magia e com seu charme natural, era fácil ser um cartomante para tirar dinheiro dos turistas e pobras desesperados por uma leitura de sorte. Ele só tinha que fugir, vez ou outra, de alguém que veio cobrar por suas leituras 'inconclusivas', mas regra de seu estabelecimento era clara: Nada de reembolsos!

    Um dia porém, ele viu algo que não deveria ter visto enquanto lia suas cartas. Sentindo uma leve vertigem, acabou tendo uma visão do seu passado onde viu uma cidade grande que parecia a capital (Anthusis), uma embarcação e uma família, junto de seu verdadeiro nome: Boreas Krasiv von Aaramong. Nesse dia, com as fortes enxaquecas causadas pela visão, decidiu sair para beber sozinho.

    Em uma famosa taverna, O Gancho do Pirata, se sentou no balcão e começou a beber. Em sua segunda ou terceira garrafa, um homem sorridente se aproximou, puxando conversa. O homem, que se identificou como Professor Ot, disse ter visto de longe a aura mágica de Boris e que via potencial no rapaz. Apesar de um pouco leve por conta do álcool, o tiefling rapidamente se empertigou na cadeira, achando que seria mais um humano que caçoaria dele por conta de sua herança, mas... A zombaria nunca veio. O tal professor Ot o tratou com um respeito que Boris nunca havia recebido. 

    Confiando nas palavras daquele homem, o rapaz decidiu contar sobre o que lhe ocorreu, a visão, a dor de cabeça... E perguntou se ele tinha algum conselho. Ot examinou Boris e, com um sorriso gentil, convidou-o para Magaambya, como um de seus pupilos. Antes de ir embora, lhe deu um pequeno cartão para onde se dirigir caso decidisse se juntar à escola de magia.

    Depois disso, Boris foi para sua casa e se deitou, esperando que fosse dormir rápido. Acabou rolando na cama durante toda a noite e, assim que o sol bateu em sua cara pela fresta da janela, decidiu ir até a Escola de Magia em Nantambu, determinado a descobrir mais sobre seu novo estranho poder e sobre seu passado.`,

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

    speed: "30 ft",

    defenses: [
        {
            name: "Vontade",
            rank: "expert"
        },
        {
            name: "Reflexos",
            rank: "trained"
        },
        {
            name: "Fortitude",
            rank: "trained"
        },
        {
            name: "Percepção",
            rank: "trained"
        }
    ],

    relationships: [
        {
            name: "Takulu Ot",
            role: "Professor/Mentor",
            tone: "positive",
            portrait: "assets/images/characters/teacherot.jpg",
            description: "O mais bonzinho dos professores parece ter um apreço por seu púpilo, e nem Boris entende o porquê direito, mas sua mentoria e seu cuidado fazem ele achar que realmente mereça mais do fizeram-no acreditar."
        },
        {
            name: "Amara Saidi",
            role: "Amiga de Infância",
            tone: "positive",
            portrait: "assets/images/characters/amarasaidi.jpg",
            description: "Amara, assim como Boris, é uma criança 'endiabrada' e a única do quarteto que conseguiu um trabalho digno como enfermeira local. Eles tem idades próximas. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Leper e Param."
        },
        {
            name: "Leper Langa",
            role: "Amigo de Infância",
            tone: "positive",
            portrait: "assets/images/characters/leperlanga.jpg",
            description: "Como o mais novo deles, Leper sempre foi o mais agitado dos quatro, e talvez por isso tenha se dado tão bem na vida da pirataria quando cresceu. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Param e Amara."
        },
        {
            name: "Param Juma",
            role: "Amiga de Infância",
            tone: "positive",
            portrait: "assets/images/characters/paramjuma.jpg",
            description: "A mais velha dos quatro. Com um olhar afiado, Param foi quem ensinou o grupo não a brigar, mas sim a matar. A vida mercenária chegou a ela como um convite irrecusável. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Amara e Leper."
        },
        {
            name: "Kamau Krasiv von Aaramong",
            role: "Irmão",
            tone: "negative",
            portrait: "assets/images/characters/kamau.jpg",
            description: "Apesar de Boris não saber, Kamau foi quem jogou seu irmão do navio quando ambos eram bem novos. Ele é mais velho que Boris e também é um tiefling, mas raspa os próprios chifres para que não apareçam no cabelo volumoso."
        },
        {
            name: "Bantu Krasiv von Aaramong",
            role: "Pai",
            tone: "neutral",
            portrait: "assets/images/characters/bantu.jpg",
            description: "Um elfo da alta sociedade que acha ter perdido o filho mais novo em uma tempestade enquanto viajavam em uma embarcação. Se culpa muito pela 'morte' do filho e quase nunca saí de sua propriedade em Anthusis."
        },
        {
            name: "Dandara Krasiv von Aaramong",
            role: "Mãe",
            tone: "neutral",
            portrait: "assets/images/characters/dandara.jpg",
            description: "Uma elfa nephlim da alta sociedade. Dandara é e sempre foi uma mãe amorosa, e apesar de perder o filho mais novo e do distanciamento do marido, ela fez o possível para se manter forte e cuidar de Kamau que ainda era bem jovem."
        }
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
            name: "Armadura de Couro Reforçada",
            category: "equipment",
            type: "Armadura",
            rarity: "Comum",
            icon: "⛉",
            quantity: 1,
            description: "Uma armadura leve de couro é reforçada com rebites de metal e, por vezes, pequenas placas metálicas, oferecendo a maior parte da flexibilidade de uma armadura de couro, porém com uma proteção mais robusta. É negra como a noite."
        },
        {
            name: "Escudo de Aço",
            category: "equipment",
            type: "Escudo",
            rarity: "Comum",
            icon: "⛊",
            quantity: 1,
            description: "Assim como os escudos de madeira, os escudos de aço apresentam uma variedade de formatos e tamanhos. Embora sejam mais caros que os de madeira, são muito mais duráveis. O escudo de Boris é de um aço azulado, e parece muito usado para ser de um mago."
        },
        {
            name: "Mochila",
            category: "equipment",
            type: "Mochila para Carga",
            rarity: "Comum",
            icon: "👜",
            quantity: 1,
            description: "Uma mochila comporta até 4 unidades de Volume (Bulk) em itens, e as primeiras 2 unidades de Volume desses itens não contam para os seus limites de Volume. Se você estiver carregando ou guardando a mochila, em vez de usá-la nas costas, o Volume dela passa a ser leve (light) em vez de desprezível (negligible). Parece uma bolsa de carteiro lateral."
        },
        {
            name: "Kit de Aventureiro",
            category: "consumables",
            type: "Suprimento",
            rarity: "Comum",
            icon: "✣",
            quantity: 1,
            description: `Este item é o kit inicial para um aventureiro, contendo os itens essenciais para exploração e sobrevivência. O valor de volume (Bulk) refere-se ao conjunto completo; consulte as descrições de cada item individual, se necessário. O kit contém os seguintes itens: uma mochila, um saco de dormir (ou rolo de dormir), 10 pedaços de giz, pederneira (fogo e aço), 50 pés (aprox. 15 metros) de corda, rações para 2 semanas, sabão, 5 tochas e um odre.`
        }
    ],

    journalTitle: "",

    journalQuote: "",

    journalText: "",

    playlist: [
        {
            title: "01 - The Spine (feat. Ashley Barrett)",
            artist: "Darren Korb",
            album: "Transistor Original Soundtrack",
            audio: "assets/music/01-The Spine.mp3",
            cover: "assets/images/covers/01.png",
            description: ""
        },
        {
            title: "02 - CHOSEN ANEW",
            artist: "Toby Fox & Camellia",
            album: "OFF Original Soundtrack (2025)",
            audio: "assets/music/02-CHOSEN ANEW.mp3",
            cover: "assets/images/covers/02.png",
            description: ""
        },
        {
            title: "03 - Bewitching Eyes",
            artist: "Supergiant Games",
            album: "Hades II Original Soundtrack",
            audio: "assets/music/03-Bewitching Eyes.mp3",
            cover: "assets/images/covers/03.png",
            description: ""
        },
        {
            title: "04 - Why",
            artist: "Nauts",
            album: "Lies of P Original Soundtrack",
            audio: "assets/music/04-Why.mp3",
            cover: "assets/images/covers/04.png",
            description: ""
        }
    ]
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
    const musicAudio = document.getElementById("music-audio");

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
    let currentTrackIndex = -1;

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
            untrained: "Destreinado",
            trained: "Treinado",
            expert: "Especialista",
            master: "Mestre",
            legendary: "Lendário"
        };

        const skills = character.skills || [];
        if (skills.length === 0) {
            grid.innerHTML = `
                <p class="skills-empty">
                    Nenhuma perícia cadastrada.
                </p>
            `;
            return;
        }

        grid.innerHTML = skills.map(skill => {
            const rank = rankLabels[skill.rank]
                ? skill.rank
                : "untrained";
            return `
                <div class="skill-card">
                    <div class="skill-card-info">
                        <strong>${escapeHTML(skill.name)}</strong>
                        <small>${escapeHTML(skill.ability || "")}</small>
                    </div>
                    <span class="skill-rank skill-rank--${rank}">
                        ${rankLabels[rank]}
                    </span>
                </div>
            `;
        }).join("");
    }

/* ========================================
       7. SPEED E DEFESAS
======================================== */

    function renderDefenses() {
        const speed = document.getElementById("character-speed");
        const list = document.getElementById("defenses-list");
        if (speed) {
            speed.textContent = character.speed || "—";
        }
        if (!list) return;

        const rankLabels = {
            untrained: "Destreinado",
            trained: "Treinado",
            expert: "Especialista",
            master: "Mestre",
            legendary: "Lendário"
        };

        const defenses = character.defenses || [];
        list.innerHTML = defenses.map(defense => {
            const rank = rankLabels[defense.rank]
                ? defense.rank
                : "untrained";
            return `
                <div class="skill-card">
                    <div class="skill-card-info">
                        <strong>${escapeHTML(defense.name)}</strong>
                    </div>
                    <span class="skill-rank skill-rank--${rank}">
                        ${rankLabels[rank]}
                    </span>
                </div>
            `;
        }).join("");
    }

/* ========================================
       RELAÇÕES
======================================== */

    function renderRelationships() {
        const grid = document.getElementById("relations-grid");
        if (!grid) return;
        const relationships = character.relationships || [];
        if (relationships.length === 0) return;
        const toneClasses = {
            positive: "relationship-role--positive",
            neutral: "relationship-role--neutral",
            negative: "relationship-role--negative"
        };

        grid.innerHTML = relationships.map(person => {
            const name = escapeHTML(person.name || "Sem nome");
            const role = escapeHTML(person.role || "");
            const description = escapeHTML(person.description || "");
            const toneClass = toneClasses[person.tone] || "";
            const portrait = person.portrait
                ? `
                    <img
                        class="relationship-portrait"
                        src="${escapeHTML(person.portrait)}"
                        alt="Retrato de ${name}"
                        loading="lazy"
                    >
                `
                : `
                    <div class="relationship-portrait relationship-portrait--empty">
                        ✧
                    </div>
                `;

            return `
                <article class="relationship-card">
                    <div class="relationship-portrait-frame">
                        <div class="relationship-portrait-window">
                            ${portrait}
                        </div>
                        <span class="portrait-ornament">✧</span>
                    </div>
                    <div class="relationship-card-content">
                        ${role ? `
                            <span class="relationship-role ${toneClass}">
                                ${role}
                            </span>
                        ` : ""}
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                </article>
            `;
        }).join("");
    }

    /* ========================================
       8. INVENTÁRIO
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
   9. PLAYLIST
======================================== */

    function renderPlaylist() {
        const grid = document.getElementById("playlist-grid");

        if (!grid) return;

        const tracks = Array.isArray(character.playlist)
            ? character.playlist
            : [];

        // Atualiza a quantidade de músicas.
        setText(
            "playlist-total",
            `${String(tracks.length).padStart(2, "0")} FAIXAS`
        );

        // Exibe o player somente quando houver músicas.
        const player = document.getElementById("music-player");

        if (player) {
            player.hidden = tracks.length === 0;
        }

        // Mensagem exibida quando a playlist está vazia.
        if (tracks.length === 0) {
            grid.innerHTML = `
                <div class="playlist-empty-state">
                    <span class="placeholder-symbol">♫</span>

                    <h3>Nenhuma faixa registrada</h3>

                    <p>
                        Este espaço será preenchido com músicas
                        que representem Boris, sua personalidade,
                        suas memórias e sua jornada.
                    </p>
                </div>
            `;

            return;
        }

        // Cria os cartões das músicas.
        grid.innerHTML = tracks.map((track, index) => {
            const title = escapeHTML(
                track.title || `Faixa ${index + 1}`
            );

            const artist = escapeHTML(
                track.artist || "Artista não informado"
            );

            const album = escapeHTML(
                track.album || "Álbum não informado"
            );

            const description = escapeHTML(
                track.description || "Nenhuma descrição cadastrada."
            );

            const cover = track.cover
                ? `
                    <img
                        class="playlist-track-cover"
                        src="${escapeHTML(track.cover)}"
                        alt="Capa de ${title}"
                        loading="lazy"
                    >
                `
                : `
                    <div class="playlist-track-cover" aria-hidden="true">
                        ♫
                    </div>
                `;

            return `
                <article class="playlist-track" data-track-card="${index}">

                    <button
                        type="button"
                        class="playlist-track-header"
                        data-track-toggle="${index}"
                        aria-expanded="false"
                        aria-controls="playlist-track-details-${index}"
                    >
                        ${cover}

                        <span class="playlist-track-info">
                            <h4>${title}</h4>
                            <p>${artist}</p>
                        </span>

                        <span class="playlist-track-toggle" aria-hidden="true">
                            ⌄
                        </span>
                    </button>

                    <div
                        class="playlist-track-details"
                        id="playlist-track-details-${index}"
                        hidden
                    >
                        <p class="playlist-track-album">
                            ${album}
                        </p>

                        <p class="playlist-track-description">
                            ${description}
                        </p>

                        <button
                            type="button"
                            class="playlist-track-play"
                            data-play-track="${index}"
                        >
                            ▶ Reproduzir
                        </button>
                    </div>

                </article>
            `;
        }).join("");
    }

/* ========================================
   CONTROLE DO PLAYER MUSICAL
======================================== */

    // Formata o tempo em minutos e segundos.
    function formatMusicTime(seconds) {
        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
    }


    // Atualiza as informações da música no player.
    function updateMusicPlayerInfo(track) {
        const player = document.getElementById("music-player");
        const cover = document.getElementById("music-player-cover");

        if (player) {
            player.hidden = false;
        }

        setText("music-player-title", track.title || "Faixa sem título");
        setText("music-player-artist", track.artist || "Artista desconhecido");

        setText(
            "music-player-panel-title",
            track.title || "Faixa sem título"
        );

        setText(
            "music-player-panel-artist",
            track.artist || "Artista desconhecido"
        );

        if (cover) {
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
    }


    // Atualiza o botão de reprodução e os cartões.
    function updateMusicPlayerButton() {
        const button = document.getElementById("music-player-play");
        const isPlaying = musicAudio && !musicAudio.paused;

        if (button) {
            button.textContent = isPlaying ? "Ⅱ" : "▶";

            button.setAttribute(
                "aria-label",
                isPlaying ? "Pausar música" : "Reproduzir música"
            );
        }

        document.querySelectorAll("[data-play-track]").forEach(trackButton => {
            const isCurrent =
                Number(trackButton.dataset.playTrack) === currentTrackIndex;

            trackButton.textContent =
                isCurrent && isPlaying
                    ? "Ⅱ Pausar"
                    : "▶ Reproduzir";
        });
    }


    // Atualiza a barra de progresso e os horários.
    function updateMusicProgress() {
        const progress = document.getElementById("music-player-progress");

        const currentTime = document.getElementById(
            "music-player-current-time"
        );

        const duration = document.getElementById(
            "music-player-duration"
        );

        if (!musicAudio) return;

        const totalDuration = Number.isFinite(musicAudio.duration)
            ? musicAudio.duration
            : 0;

        const percentage = totalDuration > 0
            ? (musicAudio.currentTime / totalDuration) * 100
            : 0;

        if (progress) {
            progress.value = percentage;
        }

        if (currentTime) {
            currentTime.textContent = formatMusicTime(
                musicAudio.currentTime
            );
        }

        if (duration) {
            duration.textContent = formatMusicTime(totalDuration);
        }
    }


    // Reproduz uma música pelo índice.
    function playMusicTrack(index) {
        const tracks = character.playlist || [];
        const track = tracks[index];

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
            card.classList.toggle(
                "is-active",
                Number(card.dataset.trackCard) === index
            );
        });

        musicAudio.src = track.audio;
        musicAudio.load();

        const playback = musicAudio.play();

        if (playback) {
            playback.catch(error => {
                console.error("Não foi possível reproduzir a música:", error);
                updateMusicPlayerButton();
            });
        }

        updateMusicPlayerButton();
    }


    // Reproduz ou pausa a música atual.
    function toggleMusicPlayback() {
        if (!musicAudio) return;

        if (currentTrackIndex === -1) {
            playMusicTrack(0);
            return;
        }

        if (musicAudio.paused) {
            const playback = musicAudio.play();

            if (playback) {
                playback.catch(error => {
                    console.error("Erro ao retomar a música:", error);
                });
            }
        } else {
            musicAudio.pause();
        }

        updateMusicPlayerButton();
    }


    // Avança ou retorna uma faixa.
    function changeMusicTrack(direction) {
        const tracks = character.playlist || [];

        if (tracks.length === 0) return;

        if (currentTrackIndex === -1) {
            const firstIndex = direction > 0
                ? 0
                : tracks.length - 1;

            playMusicTrack(firstIndex);
            return;
        }

        const nextIndex =
            (currentTrackIndex + direction + tracks.length) % tracks.length;

        playMusicTrack(nextIndex);
    }

/* ========================================
   EVENTOS DO PLAYER MUSICAL
======================================== */

    function setupMusicPlayerEvents() {
        const grid = document.getElementById("playlist-grid");

        const trigger = document.getElementById("music-player-trigger");
        const panel = document.getElementById("music-player-panel");

        const volume = document.getElementById("music-player-volume");
        const progress = document.getElementById("music-player-progress");

        const openPlaylist = document.getElementById(
            "music-player-open-playlist"
        );

        // Expansão dos cartões e reprodução das faixas.
        if (grid) {
            grid.addEventListener("click", event => {
                const playButton = event.target.closest("[data-play-track]");

                if (playButton) {
                    const index = Number(playButton.dataset.playTrack);

                    if (currentTrackIndex === index && musicAudio && !musicAudio.paused) {
                        musicAudio.pause();
                    } else if (currentTrackIndex === index) {
                        toggleMusicPlayback();
                    } else {
                        playMusicTrack(index);
                    }

                    return;
                }

                const toggleButton = event.target.closest("[data-track-toggle]");

                if (!toggleButton) return;

                const card = toggleButton.closest(".playlist-track");

                if (!card) return;

                const details = card.querySelector(".playlist-track-details");

                if (!details) return;

                const wasExpanded = !details.hidden;

                // Fecha os outros cartões.
                grid.querySelectorAll(".playlist-track").forEach(otherCard => {
                    const otherDetails = otherCard.querySelector(
                        ".playlist-track-details"
                    );

                    const otherButton = otherCard.querySelector(
                        "[data-track-toggle]"
                    );

                    otherCard.classList.remove("is-expanded");

                    if (otherDetails) {
                        otherDetails.hidden = true;
                    }

                    if (otherButton) {
                        otherButton.setAttribute("aria-expanded", "false");
                    }
                });

                // Abre ou fecha o cartão selecionado.
                if (!wasExpanded) {
                    details.hidden = false;
                    card.classList.add("is-expanded");

                    toggleButton.setAttribute("aria-expanded", "true");
                }
            });
        }

        // Expande ou recolhe o player global.
        if (trigger && panel) {
            trigger.addEventListener("click", () => {
                const isExpanded =
                    trigger.getAttribute("aria-expanded") === "true";

                panel.hidden = isExpanded;

                trigger.setAttribute(
                    "aria-expanded",
                    String(!isExpanded)
                );

                const arrow = trigger.querySelector(
                    ".music-player-trigger-arrow"
                );

                if (arrow) {
                    arrow.textContent = isExpanded ? "⌃" : "⌄";
                }
            });
        }

        // Controles de reprodução.
        document.querySelectorAll("[data-player-action]").forEach(button => {
            button.addEventListener("click", () => {
                const action = button.dataset.playerAction;

                if (action === "toggle") {
                    toggleMusicPlayback();
                }

                if (action === "previous") {
                    changeMusicTrack(-1);
                }

                if (action === "next") {
                    changeMusicTrack(1);
                }
            });
        });

        if (!musicAudio) return;

        // Volume inicial e controle de volume.
        if (volume) {
            musicAudio.volume = Number(volume.value);

            volume.addEventListener("input", () => {
                musicAudio.volume = Number(volume.value);
            });
        }

        // Atualização do progresso.
        musicAudio.addEventListener("timeupdate", updateMusicProgress);
        musicAudio.addEventListener("loadedmetadata", updateMusicProgress);
        musicAudio.addEventListener("durationchange", updateMusicProgress);

        // Busca por um ponto específico da música.
        if (progress) {
            progress.addEventListener("input", () => {
                if (
                    Number.isFinite(musicAudio.duration) &&
                    musicAudio.duration > 0
                ) {
                    musicAudio.currentTime =
                        (Number(progress.value) / 100) * musicAudio.duration;
                }
            });
        }

        // Atualiza o botão ao reproduzir ou pausar.
        musicAudio.addEventListener("play", updateMusicPlayerButton);
        musicAudio.addEventListener("pause", updateMusicPlayerButton);

        // Quando uma música termina, passa para a próxima.
        musicAudio.addEventListener("ended", () => {
            if ((character.playlist || []).length > 1) {
                changeMusicTrack(1);
            } else {
                updateMusicPlayerButton();
            }
        });

        // Atalho para a seção da playlist.
        if (openPlaylist) {
            openPlaylist.addEventListener("click", () => {
                goToScreen("playlist");
            });
        }

        // Atualiza os controles na inicialização.
        updateMusicPlayerButton();
        updateMusicProgress();
    }

    function setupMusicPlayerDrag() {
        const player = document.getElementById("music-player");
        const handle = document.getElementById("music-player-trigger");

        if (!player || !handle) return;

        const storageKey = "borisMusicPlayerPosition";

        let pointerActive = false;
        let isDragging = false;
        let suppressNextClick = false;

        let startX = 0;
        let startY = 0;
        let startLeft = 0;
        let startTop = 0;

        // Define a posição do player, mantendo-o dentro da tela.
        function setPlayerPosition(left, top) {
            const rect = player.getBoundingClientRect();

            const maxLeft = Math.max(0, window.innerWidth - rect.width);
            const maxTop = Math.max(0, window.innerHeight - rect.height);

            const safeLeft = Math.min(Math.max(0, left), maxLeft);
            const safeTop = Math.min(Math.max(0, top), maxTop);

            player.style.left = `${safeLeft}px`;
            player.style.top = `${safeTop}px`;
            player.style.right = "auto";
            player.style.bottom = "auto";
        }

        // Salva a posição escolhida pelo visitante.
        function savePlayerPosition() {
            const rect = player.getBoundingClientRect();

            try {
                localStorage.setItem(
                    storageKey,
                    JSON.stringify({
                        left: rect.left,
                        top: rect.top
                    })
                );
            } catch (error) {
                console.warn("Não foi possível salvar a posição do player.");
            }
        }

        // Recupera a posição salva anteriormente.
        try {
            const savedPosition = JSON.parse(
                localStorage.getItem(storageKey)
            );

            if (
                savedPosition &&
                Number.isFinite(savedPosition.left) &&
                Number.isFinite(savedPosition.top)
            ) {
                setPlayerPosition(
                    savedPosition.left,
                    savedPosition.top
                );
            }
        } catch (error) {
            console.warn("Não foi possível recuperar a posição do player.");
        }

        // Inicia o movimento.
        handle.addEventListener("pointerdown", event => {
            if (event.button !== 0) return;

            pointerActive = true;
            isDragging = false;

            startX = event.clientX;
            startY = event.clientY;

            const rect = player.getBoundingClientRect();

            startLeft = rect.left;
            startTop = rect.top;

            handle.setPointerCapture(event.pointerId);
        });

        // Acompanha o movimento do mouse ou toque.
        handle.addEventListener("pointermove", event => {
            if (!pointerActive) return;

            const deltaX = event.clientX - startX;
            const deltaY = event.clientY - startY;

            // Evita confundir um clique normal com movimento.
            if (
                !isDragging &&
                Math.hypot(deltaX, deltaY) < 5
            ) {
                return;
            }

            isDragging = true;
            player.classList.add("is-dragging");

            setPlayerPosition(
                startLeft + deltaX,
                startTop + deltaY
            );
        });

        // Finaliza o movimento.
        function finishDrag(event) {
            if (!pointerActive) return;

            pointerActive = false;

            if (isDragging) {
                savePlayerPosition();

                // Impede que o movimento também abra ou feche o player.
                suppressNextClick = true;

                setTimeout(() => {
                    suppressNextClick = false;
                }, 0);
            }

            isDragging = false;
            player.classList.remove("is-dragging");

            if (handle.hasPointerCapture(event.pointerId)) {
                handle.releasePointerCapture(event.pointerId);
            }
        }

        handle.addEventListener("pointerup", finishDrag);

        handle.addEventListener("pointercancel", () => {
            pointerActive = false;
            isDragging = false;
            player.classList.remove("is-dragging");
        });

        // Bloqueia o clique que seria disparado após arrastar.
        handle.addEventListener("click", event => {
            if (!suppressNextClick) return;

            event.preventDefault();
            event.stopImmediatePropagation();

            suppressNextClick = false;
        }, true);

        // Reposiciona o player ao expandir ou recolher.
        handle.addEventListener("click", () => {
            requestAnimationFrame(() => {
                const rect = player.getBoundingClientRect();

                const maxTop = Math.max(
                    0,
                    window.innerHeight - rect.height
                );

                const adjustedTop = Math.min(rect.top, maxTop);

                setPlayerPosition(rect.left, adjustedTop);
                savePlayerPosition();
            });
        });

        // Ajusta a posição caso o tamanho da janela mude.
        window.addEventListener("resize", () => {
            if (player.hidden || !player.style.left) return;

            const rect = player.getBoundingClientRect();

            setPlayerPosition(rect.left, rect.top);
            savePlayerPosition();
        });
    }


    /* ========================================
       10. DETALHES DOS ITENS
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
       11. NAVEGAÇÃO ENTRE AS SEÇÕES
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
       12. ATUALIZAÇÃO DO MENU E HUD
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
       13. CONFIGURAÇÃO DOS EVENTOS
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
                event.target.closest(".profile-layout, .stats-main, .defenses-card, .relations-grid")
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
       14. INICIALIZAÇÃO
    ======================================== */

    renderCharacter();
    renderStats();
    renderSkills();
    renderDefenses();
    renderRelationships();
    renderInventory();
    renderPlaylist();
    setupEvents();
    setupMusicPlayerEvents();
    setupMusicPlayerDrag();
    updateNavigation();

}

/* ========================================
   15. INICIA QUANDO O HTML ESTIVER PRONTO
======================================== */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeDossier
    );
} else {
    initializeDossier();
}
