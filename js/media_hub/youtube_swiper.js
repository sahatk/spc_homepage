{
    const youtubeSwiper = new Swiper('.swiper-container-youtube', {
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
            nextEl: '.swiper-button-next-youtube',
            prevEl: '.swiper-button-prev-youtube',
        }
    });
    
    const spcSwiper = new Swiper('.swiper-container-spc', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-spc',
            prevEl: '.swiper-button-prev-spc',
        }
    });
    
    const samlipSwiper = new Swiper('.swiper-container-samlip', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-samlip',
            prevEl: '.swiper-button-prev-samlip',
        }
    });
    
    const parisSwiper = new Swiper('.swiper-container-paris', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-paris',
            prevEl: '.swiper-button-prev-paris',
        }
    });
    
    const baskinSwiper = new Swiper('.swiper-container-baskin', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-baskin',
            prevEl: '.swiper-button-prev-baskin',
        }
    });
    
    const dunkinSwiper = new Swiper('.swiper-container-dunkin', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-dunkin',
            prevEl: '.swiper-button-prev-dunkin',
        }
    });
    
    const shakeSwiper = new Swiper('.swiper-container-shake', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: '.swiper-button-next-shake',
            prevEl: '.swiper-button-prev-shake',
        }
    });    
}