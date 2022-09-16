{
    const sourcePath = '../img/main_img/section_box6/';
    const dataFile = '../data/news_cardList.json';

    const elItems = document.querySelector('.main_news_card');
    let elItemsUl;

    const section_box6 = document.querySelector('#section_box6');

    const newswrap = document.querySelector(".main_news_wrap_02");
    const prevBtn = section_box6.querySelector(".main_view_left"); // 이전 버튼 부모 요소
    const nextBtn = section_box6.querySelector(".main_view_right"); // 다음 버튼 부모 요소

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
                <a target="_blank" href=${obj.link}>view more</a>
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



        // image slide
        const card = newswrap.querySelectorAll(".card");
        let imageIndex = 0;
        let position = 0;
        const IMAGE_WIDTH = 510;
    
        const prevHandler = () => {
            if ((0 < imageIndex) && (imageIndex <= 6)) {
                nextBtn.removeAttribute('disabled');
                nextBtn.style.opacity='1';
                nextBtn.style.pointerEvents='auto';
                position += IMAGE_WIDTH;
                makeLi.style.transform = `translateX(${position}px)`;
                makeLi.style.transition = `0.5s ease-out`;
                imageIndex = imageIndex - 1;
                if (imageIndex === 0) {
                    prevBtn.setAttribute('disabled', 'true');
                    prevBtn.style.opacity='0.2';
                    prevBtn.style.pointerEvents='none';
                }
            }
        };

        const nextHandler = () => {
            if ((imageIndex < 6) && (imageIndex >= 0)) {
                prevBtn.removeAttribute('disabled');
                prevBtn.style.opacity='1';
                prevBtn.style.pointerEvents='auto';
                position -= IMAGE_WIDTH;
                makeLi.style.transform = `translateX(${position}px)`;
                makeLi.style.transition = `0.5s ease-out`;
                imageIndex = imageIndex + 1;
                if (imageIndex === 6) {
                    nextBtn.setAttribute('disabled', 'true');
                    nextBtn.style.opacity='0.2';
                    nextBtn.style.pointerEvents='none';
                }
            }
        };

        // const stopHandler = () => {
        //     imageIndex = 0;
        //     position = 0;
        // }

        function prev() {
            prevHandler();
        }

        function next() {
           nextHandler();
        }

        function init() {
            prevBtn.setAttribute('disabled', 'true');
            prevBtn.addEventListener('click', prev);
            nextBtn.addEventListener('click', next);
        }

        init();

        
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