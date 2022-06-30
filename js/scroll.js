

var prevScrollpos = window.pageYOffset;
window.onscroll = headerbarToggle;
function headerbarToggle() {
  let style1 = `color:black;`;
  let style2 = 'color:white;';
  let global_white = `background-image:url('img/main_img/header_box/global_icon.png')`;
  let global_black = `background-image:url('img/main_img/header_box/global_icon_black.png')`;
  const headerBox = document.querySelector("#header_box");
  const headerNavigation = headerBox.querySelector(".header_nav");
  const headerUl = headerNavigation.querySelector(".main_menu");
  const headerLi = headerUl.querySelectorAll(".main_li");
  const currentScrollpos = window.pageYOffset;
  if (prevScrollpos < currentScrollpos) {
    headerBox.style.backgroundColor = 'white';
    headerLi.forEach(function(el){
      el.style = style1;
    });
    headerLi[6].style = global_black;
  } else {
    headerBox.style.backgroundColor = 'transparent';
    headerLi.forEach(el => {
      el.style = style2;
    });
    headerLi[6].style = global_white;
  }
}

