const youtubeSwiper = new Swiper('.swiper-container-youtube', {
    slidesPerView: 3,
    spaceBetween: 47.5,
    slidesPerGroup: 1,
    speed:500,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    // },
    navigation: {
        nextEl: '.swiper-button-next-youtube',
        prevEl: '.swiper-button-prev-youtube',
    }
});