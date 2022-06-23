

var prevScrollpos = window.pageYOffset;
console.log("first Y offset :" + prevScrollpos);
window.onscroll = headerbarToggle;
function headerbarToggle() {
  let style1 = `color:black;`;
  let style2 = 'color:white;';
  const headerBox = document.querySelector("#header_box");
  const headerNavigation = headerBox.querySelector(".header_nav");
  const headerUl = headerNavigation.querySelector("ul");
  const headerLi = headerUl.querySelectorAll("li");
  const currentScrollpos = window.pageYOffset;
  console.log(headerLi);
  if (prevScrollpos < currentScrollpos) {
    headerBox.style.backgroundColor = 'white';
    headerLi.forEach(function(el){
      el.style = style1;
    });
  } else {
    headerBox.style.backgroundColor = 'transparent';
    headerLi.forEach(el => {
      el.style = style2;
    });
  }
}

