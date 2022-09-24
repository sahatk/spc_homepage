{
    /////////////////////// 변수 선언 ///////////////////////
    
    const languageComp = document.querySelector(".language"); //언어 이미지 컴포넌트
    
    const languageOptionComp = languageComp.querySelector(".scroll_language"); // 스크롤 언어 선택 전체 영역

    const logo = languageComp.querySelector(".global_logo");
    /////////////////////// 함수 ///////////////////////
    
    // const mouseoverHandler = () => {
    //     languageOptionComp.classList.add('scroll_language_block');
    // }; // global로고 mouseover시 스크롤 영역 보이기 함수
    
    const mouseoutHandler = () => {
        languageOptionComp.classList.remove('scroll_language_block');     
    }; // global로고 mouseover시 스크롤 영역 숨기기 함수

    const mouseoverHandler = () => {
        languageOptionComp.classList.add('scroll_language_block');        
    }; // global로고 mouseover시 스크롤 영역 숨기기 함수
    

    ////////////////////// 기능 수행 ///////////////////////
    languageComp.addEventListener("mouseover", mouseoverHandler);
    languageComp.addEventListener("mouseleave", mouseoutHandler);
    // logo.addEventListener("mouseleave", mouseoutHandler);
    
    
}
    