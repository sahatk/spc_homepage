{
    const startUpSwiper = new Swiper('.swiper-container-startup', {
        slidesPerView: 5,
        spaceBetween: 47.5,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction : false,
        // },
        navigation: {
            nextEl: '.swiper-button-next-startup',
            prevEl: '.swiper-button-prev-startup',
        }
    });
}