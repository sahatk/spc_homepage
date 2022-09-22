{
    const searchComp = document.querySelector(".search_wrap_li"); //검색 컴포넌트

    const searchP = searchComp.querySelector("p"); // 검색 현황 텍스트
    
    const optionComp = document.querySelector(".scroll_option"); // 스크롤 옵션 전체 영역
    
    const optionLi = optionComp.querySelectorAll('.scroll_option_li'); // 스크롤 옵션 아이템
    
    const arrow = document.querySelector('.arrow'); // 위, 아래 화살표 모양 
    
    // 함수 //
    const optionHandler = (item) => {
        const optionTarget = item.currentTarget;
        
        const title = optionTarget.innerText;
        
        searchP.innerText = "";
        searchP.innerHTML = title;
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
    
    // 기능 수행
    optionLi.forEach((item) => {
        item.addEventListener("click", optionHandler);
    });
    
    
    searchComp.addEventListener("click", arrowHandler);
    
    
    
}
