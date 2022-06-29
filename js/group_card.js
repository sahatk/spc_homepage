{
    const sourcePath = '../img/main_img/section_box2/';
    const dataFile = '../data/group_cardList.json';

    const elItems = document.querySelector('.main_group_card');
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
            <div class="card_title">${obj.title}</div>
            <div class="card_image" style="background-image:url(${imagePath});"><span class="blind">이미지</span></div>
            <div class="card_text">
                <p>${obj.content}</p>
            </div>
        </div>`;
    };

    // const hoverItemsCode = function (obj) {
    //     const hoverImagePath = `${sourcePath}${obj.hoverfilename}`;

    //     return `
    //     <div class="outline">
    //         <div class="card_image" style="background-image:url(${hoverImagePath});"><span class="blind">이미지</span></div>
    //     </div>`;
    // };

    // li 하나의 함수를 생성 후 삽입
    const fnMakeLi = function (obj) {
        const makeLi = document.createElement('li');
        makeLi.classList.add('card');
        makeLi.innerHTML = itemsCode(obj);
        elItemsUl.append(makeLi);

    };

    // const fnHoverMakeLi = function (obj) {
    //     const makeLi = document.createElement('li');
    //     makeLi.classList.add('card');
    //     makeLi.innerHTML = hoverItemsCode(obj);
    //     elItemsUl.append(makeLi);

    // };

    // // li 마우스 오버시 효과
    const fnHover = function () {
        const card = elItems.querySelectorAll(".card");
        const cardTitle = elItemsUl.querySelector(".card_title");
        const cardText = elItemsUl.querySelector(".card_text");
        const cardImage = elItemsUl.querySelector(".card_image");
    
        Array.from(card).map(function(el,index){
            el.addEventListener("mouseenter", function() {
                cardTitle.classList.add('none');
                cardText.classList.add('none');
                cardImage.classList.add('none');
                card[index].classList.add('bg');
            });
        });

        Array.from(card).map(function(el,index){
            el.addEventListener("mouseleave", function() {
                cardTitle.classList.remove('none');
                cardText.classList.remove('none');
                cardImage.classList.remove('none');
                card[index].classList.remove('bg');
            });
        });

        
    };



    // 기능 수행

    fetch(dataFile)
        .then((response) => response.json())
        .then(function (data) {
            // 탭 리스트
            fnMakeUl();
            data.forEach(fnMakeLi);
            fnHover();


        })
        .catch(console.log);


}
