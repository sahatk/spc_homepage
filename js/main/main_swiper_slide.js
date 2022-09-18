// 유튜브 슬라이드
const youtubeSwiper = new Swiper('.swiper-container-youtube', {
    slidesPerView: 'auto',
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-youtube',
        prevEl: '.swiper-button-prev-youtube',
    }
});

// SNS 슬라이드
const snsSwiper = new Swiper('.swiper-container-sns', {
    slidesPerView: 5,
    spaceBetween: 47.5,
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-sns',
        prevEl: '.swiper-button-prev-sns',
    }
});

// FOOTER 로고 슬라이드
const footerSwiper = new Swiper('.swiper-container-footer', {
    slidesPerView: 5,
    spaceBetween: 110,
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-footer',
        prevEl: '.swiper-button-prev-footer',
    }
});