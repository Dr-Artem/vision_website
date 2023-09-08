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

menuToggle.addEventListener("click", () => {
    const visible = navigation.getAttribute("data-visible");

    if (visible === "false") {
        navigation.setAttribute("data-visible", "true");
        menuToggle.setAttribute("aria-open", "true");
        document.querySelector("body").classList.add("is-hidden");
    } else if (visible === "true") {
        navigation.setAttribute("data-visible", "false");
        menuToggle.setAttribute("aria-open", "false");
        document.querySelector("body").classList.remove("is-hidden");
    }
});

if (docWidth <= 768) {
    navLinks.forEach((link) =>
        link.addEventListener("click", () => {
            navigation.setAttribute("data-visible", "false");
            menuToggle.setAttribute("aria-open", "false");
            document.body.classList.toggle("is-hidden");
        })
    );
}

phoneBtn.addEventListener("click", () => {
    if (docWidth <= 768) {
        navigation.setAttribute("data-visible", "false");
        menuToggle.setAttribute("aria-open", "false");
    }
    phoneModal.classList.toggle("active");
    document.body.classList.add("is-hidden");
});

telegramBtn.addEventListener("click", () => {
    if (docWidth <= 768) {
        navigation.setAttribute("data-visible", "false");
        menuToggle.setAttribute("aria-open", "false");
    }
    telegramModal.classList.toggle("active");
    document.body.classList.add("is-hidden");
});

phoneModal.addEventListener("click", (event) => {
    if (event.target === phoneModal) {
        phoneModal.classList.toggle("active");
        document.body.classList.remove("is-hidden");
    }
});
telegramModal.addEventListener("click", (event) => {
    if (event.target === telegramModal) {
        telegramModal.classList.toggle("active");
        document.body.classList.remove("is-hidden");
    }
});

telegramClose.addEventListener("click", () => {
    telegramModal.classList.toggle("active");
    document.body.classList.remove("is-hidden");
});

phoneClose.addEventListener("click", () => {
    phoneModal.classList.toggle("active");
    document.body.classList.remove("is-hidden");
});
