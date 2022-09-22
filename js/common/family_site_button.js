{
/////////////////////// 변수 선언 ///////////////////////

const siteComp = document.querySelector(".main_family_site"); //검색 컴포넌트

// const searchP = siteComp.querySelector("p"); // 검색 현황 텍스트

const siteOptionComp = siteComp.querySelector(".scroll_option"); // 스크롤 옵션 전체 영역

const siteOptionLi = siteOptionComp.querySelectorAll('.scroll_option_li'); // 스크롤 옵션 아이템

const siteArrow = siteComp.querySelector('.arrow'); // 위, 아래 화살표 모양 

/////////////////////// 함수 ///////////////////////

// const optionHandler = (item) => {
//     const optionTarget = item.currentTarget;
    
//     const title = optionTarget.innerText;
    
//     searchP.innerText = "";
//     searchP.innerHTML = title;
// }; // 옵션 클릭 시 검색 현황 변경 함수

const arrowHandler = () => {
    siteOptionComp.classList.toggle('scroll_option_block');

    if(!(siteArrow.classList.contains("arrow_top"))){
        siteArrow.classList.remove('arrow_bottom');
        siteArrow.classList.add('arrow_top');
        siteComp.style.borderRadius = '30px';
    } else{
        siteArrow.classList.remove('arrow_top');
        siteArrow.classList.add('arrow_bottom');
        siteComp.style.borderRadius = '0px 0px 30px 30px';

    }
}; // 검색 li 클릭시 화살표 방향 변경 함수


/////////////////////// 기능 수행 ///////////////////////

// siteOptionLi.forEach((item) => {
//     item.addEventListener("click", optionHandler);
// });


siteComp.addEventListener("click", arrowHandler);
}

