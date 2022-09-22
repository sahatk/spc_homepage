{
// 탭 메뉴
const tabMenuBtn = $(".employment_tab_menu > li");
// const tabMenuBtn = document.querySelectorAll('.movie_title > ul > li');

const employCont = $(".employment_box > ul");
// const employCont = document.querySelectorAll('.movie_chart > div');

const employTitle = $(".employment_text");

employTitle.hide().eq(0).show();
employCont.hide().eq(0).show();

tabMenuBtn.click(function (e) {
    e.preventDefault();
    const target = $(this);
    const index = target.index();
    tabMenuBtn.removeClass("active");
    target.addClass("active");
    employCont.hide();
    employCont.eq(index).show();
    employTitle.hide();
    employTitle.eq(index).show();
})
}