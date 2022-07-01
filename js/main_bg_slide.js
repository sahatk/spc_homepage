{
    //Array of images which you want to show: Use path you want.
    const images = ['img/main_img/section_box1/main_bg_wrap/main_slide_01.jpg',
        'img/main_img/section_box1/main_bg_wrap/main_slide_02.png',
        'img/main_img/section_box1/main_bg_wrap/main_slide_03.png',
        'img/main_img/section_box1/main_bg_wrap/main_slide_04.jpg'
    ];
    const prevBtn = document.querySelector('.prev_button_wrap');
    const nextBtn = document.querySelector('.next_button_wrap');

    const mainBgSlide = document.querySelector('#section_box1');

    mainBgSlide.style.backgroundImage = `url(${images[0]})`;

 
    const currentImage = 0;

    function nextSlideshow() {
        if(currentImage <= images.length){
            nextImage = currentImage+1;
            const mainBgSlide = document.querySelector('#section_box1');
            mainBgSlide.style.backgroundImage = `url(${images[nextImage]})`; 
        } else{
            mainBgSlide.style.backgroundImage = `url(${images[3]})`;
        }
        return currentImage = currentImage+1; 
    }
    

    function prevSlideshow() {
        if (currentImage > 0) {
            prevImage = currentImage-1;
            const mainBgSlide = document.querySelector('#section_box1');
            mainBgSlide.style.backgroundImage = `url(${images[prevImage]})`; 
            return currentImage-1;
        } else{
            mainBgSlide.style.backgroundImage = `url(${images[0]})`;
        }
    }



    function init() {
        prevBtn.addEventListener('click', prevSlideshow);
        nextBtn.addEventListener('click', nextSlideshow);
    }

    init();

    console.log(currentImage);





}