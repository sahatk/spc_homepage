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
        <a href="${obj.link}">
            <div class="outline">
                <div class="card_title">${obj.title}</div>
                <div class="card_image" style="background-image:url(${imagePath});"><span class="blind">이미지</span></div>
                <div class="card_text">
                    <p>${obj.content}</p>
                </div>
            </div>
        </a>
        `;
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
        const cardTitle = elItemsUl.querySelectorAll(".card_title");
        const cardText = elItemsUl.querySelectorAll(".card_text");
        const cardImage = elItemsUl.querySelectorAll(".card_image");


        Array.from(card).map(function (el, index) {
            let CardBg = `bg_0${index + 1}`;
            el.addEventListener("mouseenter", function () {
                cardTitle[index].classList.add('none');
                cardText[index].classList.add('none');
                cardImage[index].classList.add('none');
                card[index].classList.add(CardBg);
            });
        });

        Array.from(card).map(function (el, index) {
            let CardBg = `bg_0${index + 1}`;
            el.addEventListener("mouseleave", function () {
                cardTitle[index].classList.remove('none');
                cardText[index].classList.remove('none');
                cardImage[index].classList.remove('none');
                card[index].classList.remove(CardBg);
            });
        });

        // Array.from(card).forEach((el,idx)=>{ //인디케이터아이템 li들 각각 클릭했을때 실행
        //     el.addEventListener('mouseenter', function(){
        //         e.preventDefault();
        //         cardTitle.forEach((e)=>{
        //             e.classList.add('none');
        //         });
        //         cardText.forEach((e)=>{
        //             e.classList.add('none');
        //         });
        //         cardImage.forEach((e)=>{
        //             e.classList.add('none');
        //         });
        //         card[idx].classList.add('bg'); 
        //     });
        // });

        // Array.from(card).forEach((el,idx)=>{ //인디케이터아이템 li들 각각 클릭했을때 실행
        //     el.addEventListener('mouseleave', function(e){
        //         e.preventDefault();
        //         cardTitle.forEach((e)=>{
        //             e.classList.remove('none');
        //         });
        //         cardText.forEach((e)=>{
        //             e.classList.remove('none');
        //         });
        //         cardImage.forEach((e)=>{
        //             e.classList.remove('none');
        //         });
        //         card[idx].classList.remove('bg'); 
        //     });
        // });



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
