{
    const sourcePath = '../img/main_img/section_box6/';
    const dataFile = '../data/news_cardList.json';

    const elItems = document.querySelector('.main_news_card');
    let elItemsUl;

    // 함수 -------------------------------------------------------------------
    // 리스트 기능

    // 항목 내용처리 기능
    const fnMakeUl = function () {
        elItems.innerHTML = '<ul></ul>';
        elItemsUl = elItems.querySelector('ul');
    };

    const itemsCode = function (obj) {
        const imagePath = `${sourcePath}${obj.filename}`;

        return `
    <div class="outline">
        <a target="_blank" href="${obj.link}">
        <div class="card_image" style="background-image:url(${imagePath});"><span class="blind">이미지</span></div>
        <div class="card_text_01">
            <div class="card_text_wrap_01">
                <p>${obj.title}</p>
            </div>
            <div class="card_text_wrap_02">
                <b>${obj.date}</b>
                <div class="view_more">
                <a target="_blank" href="https://www.happyconstore.com/">view more</a>
                </div>
            </div>  
        </div>
        </a>
    </div>`;
    };

    // li 하나의 함수를 생성 후 삽입
    const fnMakeLi = function (obj) {
        const makeLi = document.createElement('li');
        makeLi.classList.add('card');
        makeLi.innerHTML = itemsCode(obj);
        elItemsUl.append(makeLi);
    };

    // 기능 수행

    fetch(dataFile)
        .then((response) => response.json())
        .then(function (data) {
            // 탭 리스트

            fnMakeUl();
            data.forEach(fnMakeLi);

        })
        .catch(console.log);
}