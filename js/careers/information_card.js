// 영화차트 탭 메뉴
const movBtn = $(".employment_tab_menu > li");
// const movBtn = document.querySelectorAll('.movie_title > ul > li');

const movCont = $(".employment_box > ul");
// const movCont = document.querySelectorAll('.movie_chart > div');

const movTitle = $(".employment_text");

movTitle.hide().eq(0).show();
movCont.hide().eq(0).show();

movBtn.click(function (e) {
    e.preventDefault();
    const target = $(this);
    const index = target.index();
    movBtn.removeClass("active");
    target.addClass("active");
    movCont.hide();
    movCont.eq(index).show();
    movTitle.hide();
    movTitle.eq(index).show();
})