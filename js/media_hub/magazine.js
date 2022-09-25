{
/////////////////////// 변수 선언 ///////////////////////

const sectionbox = document.querySelector("section_box3");

const searchComp = document.querySelector(".select_box_title"); //검색 컴포넌트

const searchP = searchComp.querySelector("p"); // 검색 현황 텍스트

const optionComp = document.querySelector(".scroll_option"); // 스크롤 옵션 전체 영역

const optionLi = optionComp.querySelectorAll('.scroll_option_li'); // 스크롤 옵션 아이템

const arrow = document.querySelector('.arrow'); // 위, 아래 화살표 모양 

const table_01 = document.querySelectorAll('.magazine_table_01');
const table_02 = document.querySelectorAll('.magazine_table_02');
const table_03 = document.querySelectorAll('.magazine_table_03');

/////////////////////// 함수 ///////////////////////

const optionHandler = (item, index) => {
    const optionTarget = item.currentTarget;
    
    const title = optionTarget.innerText;
    
    searchP.innerText = "";
    searchP.innerHTML = title;
    

    if(title === "SPC MAGAZINE 2022년 06월호"){
        optionLi[0].classList.remove("active");
        optionLi[1].classList.remove("active");

        optionLi[2].classList.add("active");

        table_02.forEach( (item, index) => {
            table_02[index].style.display='none';
        });

        table_03.forEach( (item, index) => {
            table_03[index].style.display='none';
        });

        table_01.forEach( (item, index) => {
            table_01[index].style.display='block';
        });

    }else if(title === "SPC MAGAZINE 2022년 07월호"){
        optionLi[0].classList.remove("active");
        optionLi[2].classList.remove("active");

        optionLi[1].classList.add("active");

        table_01.forEach( (item, index) => {
            table_01[index].style.display='none';
        });

        table_03.forEach( (item, index) => {
            table_03[index].style.display='none';
        });

        table_02.forEach( (item, index) => {
            table_02[index].style.display='block';
        });
        
    }else if(title === "SPC MAGAZINE 2022년 08월호"){
        optionLi[1].classList.remove("active");
        optionLi[2].classList.remove("active");

        optionLi[0].classList.add("active");

        table_01.forEach( (item, index) => {
            table_01[index].style.display='none';
        });

        table_02.forEach( (item, index) => {
            table_02[index].style.display='none';
        });

        table_03.forEach( (item, index) => {
            table_03[index].style.display='block';
        });
    }else {
        alert("페이지가 없습니다.");
    }
}; // 옵션 클릭 시 검색 현황 변경 함수

const arrowHandler = () => {
    optionComp.classList.toggle('scroll_option_block');

    if(!(arrow.classList.contains("arrow_bottom"))){
        arrow.classList.remove('arrow_top');
        arrow.classList.add('arrow_bottom');
        searchComp.style.borderRadius = '30px';
    } else{
        arrow.classList.remove('arrow_bottom');
        arrow.classList.add('arrow_top');
        searchComp.style.borderRadius = '30px 30px 0 0';

    }
}; // 검색 li 클릭시 화살표 방향 변경 함수


/////////////////////// 기능 수행 ///////////////////////

optionLi.forEach((item) => {
    item.addEventListener("click", optionHandler);
});


searchComp.addEventListener("click", arrowHandler);
}