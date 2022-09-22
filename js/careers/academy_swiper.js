{
    const schoolOneSwiper = new Swiper('.swiper-container-guideOne', {
        slidesPerView: 1,
        spaceBetween: 120,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        loopAdditionalSlides : 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction : false,
        },
        navigation: {
            nextEl: '.swiper-button-next-guideOne',
            prevEl: '.swiper-button-prev-guideOne',
        },
        pagination: {	//페이징 사용자 설정
            el: ".swiper-pagination-guideOne",	//페이징 태그 클래스 설정 
            clickable: true,	//버튼 클릭 여부
            type : 'bullets',	//페이징 타입 설정(종류: bullets, fraction, progress, progressbar)
            // Bullet Numbering 설정
        },
        // autoplayDisableOnInteraction: false,
    });
    
    const schoolTwoSwiper = new Swiper('.swiper-container-guideTwo', {
        slidesPerView: 1,
        spaceBetween: 120,
        slidesPerGroup: 1,
        speed:500,
        loop: true,
        loopAdditionalSlides : 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction : false,
        },
        navigation: {
            nextEl: '.swiper-button-next-guideTwo',
            prevEl: '.swiper-button-prev-guideTwo',
        },
        pagination: {	//페이징 사용자 설정
            el: ".swiper-pagination-guideTwo",	//페이징 태그 클래스 설정 
            clickable: true,	//버튼 클릭 여부
            type : 'bullets',	//페이징 타입 설정(종류: bullets, fraction, progress, progressbar)
            // Bullet Numbering 설정
        },
    });
}
