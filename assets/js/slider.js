const swiper = new Swiper(".cottages__swiper-one", {
    loop: true,

    pagination: {
        el: ".cottages__swiper-one-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".cottages__swiper-one-button-next",
        prevEl: ".cottages__swiper-one-button-prev",
    },
});
const swiper2 = new Swiper(".cottages__swiper-two", {
    loop: true,

    pagination: {
        el: ".cottages__swiper-two-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".cottages__swiper-two-button-next",
        prevEl: ".cottages__swiper-two-button-prev",
    },
});
const swiper3 = new Swiper(".cottages__swiper-three", {
    loop: true,

    pagination: {
        el: ".cottages__swiper-three-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".cottages__swiper-three-button-next",
        prevEl: ".cottages__swiper-three-button-prev",
    },
});
const swiper4 = new Swiper(".build__swiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    spaceBetween: 30,
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },

    pagination: {
        el: ".build__pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".build__button-next",
        prevEl: ".build__button-prev",
    },
});
