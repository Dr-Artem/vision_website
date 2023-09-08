const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector(".header__navigation");
const navLinks = document.querySelectorAll(".header__nav-links a");

const telegramBtn = document.querySelector(".telegram-btn");
const telegramModal = document.getElementById("telegram-modal");
const telegramClose = document.getElementById("telegram-close");

const phoneBtn = document.querySelector(".phone-btn");
const phoneModal = document.getElementById("phone-modal");
const phoneClose = document.getElementById("phone-close");

const docWidth = window.innerWidth;

function toggleMenu() {
    const visible = navigation.getAttribute("data-visible");
    const isOpen = visible === "true";

    navigation.setAttribute("data-visible", isOpen ? "false" : "true");
    menuToggle.setAttribute("aria-open", !isOpen);
    document.body.classList.toggle("is-hidden", isOpen);
}

menuToggle.addEventListener("click", toggleMenu);

if (docWidth <= 768) {
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            toggleMenu();
        });
    });
}

function toggleModal(modal) {
    if (docWidth <= 768) {
        toggleMenu();
    }
    modal.classList.toggle("active");
    document.body.classList.toggle("is-hidden");
}

phoneBtn.addEventListener("click", () => {
    toggleModal(phoneModal);
});

telegramBtn.addEventListener("click", () => {
    toggleModal(telegramModal);
});

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.classList.remove("is-hidden");
}

phoneModal.addEventListener("click", (event) => {
    if (event.target === phoneModal) {
        closeModal(phoneModal);
    }
});

telegramModal.addEventListener("click", (event) => {
    if (event.target === telegramModal) {
        closeModal(telegramModal);
    }
});

telegramClose.addEventListener("click", () => {
    closeModal(telegramModal);
});

phoneClose.addEventListener("click", () => {
    closeModal(phoneModal);
});
