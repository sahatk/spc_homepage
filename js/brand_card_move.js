    const elBrandCard = document.querySelector(".main_brand_card"); // bran_icon 큰박스
    const nextBtn = elBrandCard.querySelector(".next_button"); // 다음 버튼
    const prevBtn = elBrandCard.querySelector(".prev_button"); // 이전 버튼
    const slideContainer = elBrandCard.querySelector('ul'); //slide-container
    console.log(slideContainer);
    let PHOTO = 1;
    let PX = 280;

    nextBtn.addEventListener("click", function() {
        if( PHOTO < 3) {
            slideContainer.style.transform = "translateX(${PX}+${PHOTO}px)";
            PHOTO += 1;
        } else{
            slideContainer.style.transform = 'translateX(0)';
            PHOTO = 1;
        }
    });

