{
    const instaSwiper = new Swiper('.swiper-container-insta', {
        slidesPerView: 5,
        spaceBetween: 47.5,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction : false,
        },
        navigation: {
            nextEl: '.swiper-button-next-insta',
            prevEl: '.swiper-button-prev-insta',
        }
    });
    
    const facebookSwiper = new Swiper('.swiper-container-facebook', {
        slidesPerView: 3,
        spaceBetween: 45,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction : false,
        },
        navigation: {
            nextEl: '.swiper-button-next-facebook',
            prevEl: '.swiper-button-prev-facebook',
        }
    });
}