const newsSwiper = new Swiper('.swiper-container-news', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed:500,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next-news',
        prevEl: '.swiper-button-prev-news',
    }
});