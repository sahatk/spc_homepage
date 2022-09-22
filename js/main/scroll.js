
{
  const prevScrollpos = window.pageYOffset;
  window.onscroll = headerbarToggle;
  function headerbarToggle() {
    let style1 = `color:black;`;
    let style2 = 'color:white;';
    let global_white = `background-image:url('img/main_img/header_box/global_icon_white.png')`;
    let global_black = `background-image:url('img/main_img/header_box/global_icon_black.png')`;
    let logo_white = `background-image:url('img/main_img/header_box/gnb_logo_white.png')`;
    let logo_gray = `background-image:url('img/main_img/header_box/gnb_logo_gray.png')`;
    const headerBox = document.querySelector("#header_box");
    const logo = document.querySelector(".logo_img");
    const headerNavigation = headerBox.querySelector(".header_nav");
    const headerUl = headerNavigation.querySelector(".main_menu");
    const headerLi = headerUl.querySelectorAll(".main_li");
    const currentScrollpos = window.pageYOffset;
    if (prevScrollpos < currentScrollpos) {
      headerBox.style.backgroundColor = 'white';
      headerLi.forEach(function (el) {
        el.style = style1;
      });
      headerLi[5].style = global_black;
      logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
  
      headerBox.addEventListener('mouseover', function () {
        headerLi[5].style = global_black;
      });
  
    } else {
      headerBox.style.backgroundColor = 'transparent';
      headerLi.forEach(el => {
        el.style = style2;
      });
      headerLi[5].style = global_white;
      logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_white.png')`;
    }
  
      /*스크롤 0 일떄 headerbox 오버시 로고 이미지 변경 */
    if (currentScrollpos == 0) {
      headerBox.addEventListener('mouseover', function () {
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
        headerLi[5].style = global_black;
      });
  
      headerBox.addEventListener('mouseleave', function(){
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_white.png')`;
        headerLi[5].style = global_white;
      });
    } else {
      headerBox.addEventListener('mouseover', function () {
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
        headerLi[5].style = global_black;
      });
  
      headerBox.addEventListener('mouseleave', function(){
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
        headerLi[5].style = global_black;
      });
  
    }
  
  
  
  
  }
}





