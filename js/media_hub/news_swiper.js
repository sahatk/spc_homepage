{
    const newsSwiper = new Swiper('.swiper-container-news', {
        slidesPerView: 3,
        spaceBetween: 47.5,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction : false,
        },
        navigation: {
            nextEl: '.swiper-button-next-news',
            prevEl: '.swiper-button-prev-news',
        }
    });
}