{
// 유튜브 슬라이드
const youtubeSwiper = new Swiper('.swiper-container-youtube', {
    slidesPerView: 4,
    spaceBetween:40,
    speed:500,
    loop: true,
    breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
            slidesPerView: 1,
        },
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
        disableOnInteraction : true,
    },
    breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
            slidesPerView: 1,
        },
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
        disableOnInteraction : false,
    },
    navigation: {
        nextEl: '.swiper-button-next-footer',
        prevEl: '.swiper-button-prev-footer',
    }
});
}