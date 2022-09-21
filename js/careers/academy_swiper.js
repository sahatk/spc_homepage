const schoolOneSwiper = new Swiper('.swiper-container-guideOne', {
    slidesPerView: 1,
    spaceBetween: 120,
    slidesPerGroup: 1,
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-guideOne',
        prevEl: '.swiper-button-prev-guideOne',
    }
});

const schoolTwoSwiper = new Swiper('.swiper-container-guideTwo', {
    slidesPerView: 1,
    spaceBetween: 120,
    slidesPerGroup: 1,
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-guideTwo',
        prevEl: '.swiper-button-prev-guideTwo',
    }
});