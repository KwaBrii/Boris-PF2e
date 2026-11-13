/*
  PERSONALIZAÇÃO:
  Edite os textos, atributos e itens dentro do objeto "character".
  Para usar sua arte, coloque o arquivo em assets/personagem.png
  e altere art: "" para art: "assets/personagem.png".
*/

const character = {
  name: "Nome do Personagem",
  epithet: "O título ou epíteto do personagem",
  intro: "Uma breve apresentação do personagem. Conte em poucas linhas quem ele é, de onde veio ou o que o torna inesquecível.",
  role: "Classe · Arquétipo · Ocupação",
  level: 1,
  className: "Classe / arquétipo",
  art: "", // Exemplo: "assets/personagem.png"

  facts: [
    { label: "Raça", value: "Não definida" },
    { label: "Idade", value: "—" },
    { label: "Origem", value: "Não definida" },
    { label: "Alinhamento", value: "—" }
  ],

  bio: "Adicione aqui a história resumida, personalidade ou descrição geral do personagem. Você pode escrever um texto curto ou detalhar características, aparência e motivações.",

  stats: [
    { abbreviation: "FOR", name: "Força", value: 14, max: 20 },
    { abbreviation: "DES", name: "Destreza", value: 16, max: 20 },
    { abbreviation: "CON", name: "Constituição", value: 12, max: 20 },
    { abbreviation: "INT", name: "Inteligência", value: 13, max: 20 },
    { abbreviation: "SAB", name: "Sabedoria", value: 10, max: 20 },
    { abbreviation: "CAR", name: "Carisma", value: 15, max: 20 }
  ],

  derivedStats: [
    { label: "PONTOS DE VIDA", value: "32 / 32", note: "PV atuais / máximos" },
    { label: "ENERGIA / MANA", value: "18 / 24", note: "Recurso mágico" },
    { label: "CLASSE DE ARMADURA", value: "15", note: "Defesa atual" }
  ],

  carry: { current: 18, max: 40 },

  inventory: [
    {
      name: "Lâmina esquecida",
      category: "equipment",
      type: "Arma",
      rarity: "Incomum",
      icon: "⚔",
      quantity: 1,
      description: "Uma arma antiga, marcada por pequenas inscrições. Substitua esta descrição pelas propriedades, bônus e história do item."
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

  journalTitle: "Fragmentos de uma história",
  journalQuote: "Toda lenda começa com algo que alguém preferiu esquecer.",
  journalText: "Este espaço é destinado à história do personagem, anotações de campanha, relações importantes, objetivos e acontecimentos marcantes.\\n\\nVocê também pode separar o texto em parágrafos, registrar acontecimentos por data ou guardar informações que seu personagem ainda não compartilhou com o grupo."
};

// ========================================
// 1. ELEMENTOS DA PÁGINA
// ========================================

const world = document.getElementById("world");
const screens = Array.from(document.querySelectorAll(".screen"));
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

const previousButton = document.getElementById("previous-page");
const nextButton = document.getElementById("next-page");

const currentPage = document.getElementById("current-page");
const totalPages = document.getElementById("total-pages");
const pageProgress = document.getElementById("page-progress");


// ========================================
// 2. CONTROLE DA NAVEGAÇÃO
// ========================================

if (!world || screens.length === 0) {
    console.error("Não foi possível iniciar a navegação. Verifique o HTML.");
} else {

    let currentIndex = 0;

    // Atualiza os elementos de navegação
    function updateNavigation(index) {
        currentIndex = Math.max(0, Math.min(index, screens.length - 1));

        // Atualiza os números do HUD
        currentPage.textContent = String(currentIndex).padStart(2, "0");

        totalPages.textContent = String(screens.length - 1).padStart(2, "0");

        // Atualiza a barra de progresso
        const progress = screens.length > 1
            ? (currentIndex / (screens.length - 1)) * 100
            : 100;

        pageProgress.style.width = `${progress}%`;

        // Atualiza o menu lateral
        navLinks.forEach(link => {
            const isActive = link.dataset.target === screens[currentIndex].id;

            link.classList.toggle("is-active", isActive);
            link.setAttribute("aria-current", isActive ? "page" : "false");
        });

        // Habilita ou desabilita as setas
        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === screens.length - 1;
    }


    // Vai para uma página específica
    function goToPage(index) {
        const targetIndex = Math.max(0, Math.min(index, screens.length - 1));

        screens[targetIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });

        updateNavigation(targetIndex);
    }


    // Identifica qual página está mais próxima do centro da tela
    function getClosestPageIndex() {
        const worldCenter = world.getBoundingClientRect().left + world.clientWidth / 2;

        let closestIndex = 0;
        let smallestDistance = Infinity;

        screens.forEach((screen, index) => {
            const screenRect = screen.getBoundingClientRect();
            const screenCenter = screenRect.left + screenRect.width / 2;

            const distance = Math.abs(worldCenter - screenCenter);

            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    }


    // ========================================
    // 3. MENU LATERAL
    // ========================================

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetIndex = screens.findIndex(
                screen => screen.id === link.dataset.target
            );

            if (targetIndex !== -1) {
                goToPage(targetIndex);
            }
        });
    });


    // ========================================
    // 4. LINKS INTERNOS DA PÁGINA
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href").slice(1);

            const targetIndex = screens.findIndex(
                screen => screen.id === targetId
            );

            if (targetIndex !== -1) {
                event.preventDefault();
                goToPage(targetIndex);
            }
        });
    });


    // ========================================
    // 5. SETAS INFERIORES
    // ========================================

    previousButton.addEventListener("click", () => {
        goToPage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        goToPage(currentIndex + 1);
    });


    // ========================================
    // 6. TECLADO
    // ========================================

    document.addEventListener("keydown", event => {
        // Evita interferência quando o usuário está digitando
        if (
            ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName) ||
            event.target.isContentEditable
        ) {
            return;
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            goToPage(currentIndex + 1);
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToPage(currentIndex - 1);
        }
    });

    // ========================================
    // 7. ATUALIZAÇÃO AO DESLIZAR AS PÁGINAS
    // ========================================

    world.addEventListener("scroll", () => {
        updateNavigation(getClosestPageIndex());
    });

    // Inicializa a navegação na primeira página
    updateNavigation(0);
}