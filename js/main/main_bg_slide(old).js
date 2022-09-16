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

 
    let currentImage = 0;
    function nextSlideshow() {
        if(currentImage < images.length-1){
            nextImage = currentImage+1;
            const mainBgSlide = document.querySelector('#section_box1');
            mainBgSlide.style.backgroundImage = `url(${images[nextImage]})`; 
        } else{
            currentImage = currentImage-5;

        }
        return currentImage = currentImage+1; 
    }
    

    function prevSlideshow() {
        if ( 0 < currentImage && currentImage <= 4 ) {
            prevImage = currentImage-1;
            const mainBgSlide = document.querySelector('#section_box1');
            mainBgSlide.style.backgroundImage = `url(${images[prevImage]})`;
            return currentImage = currentImage-1;
        } else{
            return currentImage = currentImage+4;
        }
        
    }



    function init() {
        prevBtn.addEventListener('click', prevSlideshow);
        nextBtn.addEventListener('click', nextSlideshow);
    }

    init();

    console.log(currentImage);





}