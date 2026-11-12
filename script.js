
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
