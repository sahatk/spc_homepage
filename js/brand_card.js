{
    const sourcePath = {img:'../img/main_img/section_box3/brand_wrap/', font: '../fonts/'};
    // const tabSourcePath = '../img/main_img/section_box3/main_tab_wrap/'
    const dataFile = '../data/brand_menuList.json';
    const elMenuItems = document.querySelector(".main_brand_tab");
    let elMenuUl =  elMenuItems.querySelector('ul');
    let elMenuList; // =elMenuUl.querySelectorAll('li');

    const elItems = document.querySelector(".main_brand_card");
    let elItemsUl;
    let TABCOUNT = 0;

    const brandWrap = document.querySelector(".main_brand_wrap_02");
    const nextBtn = brandWrap.querySelector(".next_button"); // 다음 버튼
    const prevBtn = brandWrap.querySelector(".prev_button"); // 이전 버튼
    

    
    


    // 함수 --------------------------------------------------------------------------
    // 탭메뉴 리스트 기능

    // 탭메뉴 항목 내용처리 기능
    const fnMakeUl = function(){
        elItems.innerHTML = '<ul></ul>';
        elItemsUl = elItems.querySelector('ul');
    };

    const fnCategoryFilter = function(category, cardList){
        return cardList.filter((data,index)=>{
            return data.category == category;
        });
    };

    const itemsCode = function(obj){
        const imagePath = `${sourcePath.img}${obj.path}/${obj.filename}`;

        return `<div class="image" style=background-image:url(${imagePath});>
                <span class="blind">image</span>
                </div>`;
    };

    // li 하나의 함수를 생성 후 삽입
    const fnMakeLi = function(obj){
        const makeLi = document.createElement('li');
        makeLi.innerHTML = itemsCode(obj);
        elItemsUl.append(makeLi);
        
        // image slide
        let imageIndex = 0;
        let position = 0;
        const IMAGE_WIDTH = 280;
        // const brandWrap = document.querySelector(".main_brand_wrap_02");
        // const nextBtn = brandWrap.querySelector(".next_button"); // 다음 버튼
        // const prevBtn = brandWrap.querySelector(".prev_button"); // 이전 버튼
        

        function prev(){
            if(imageIndex > -2){
                nextBtn.removeAttribute('disabled');
                position += IMAGE_WIDTH;
                makeLi.style.transform = `translateX(${position}px)`;
                imageIndex = imageIndex - 1;
            }
            if(imageIndex === 2) {
                prevBtn.setAttribute('disabled', 'true');
            }
        }

        function next(){
            if(imageIndex < 2){
                prevBtn.removeAttribute('disabled');
                position -= IMAGE_WIDTH;
                makeLi.style.transform = `translateX(${position}px)`;
                imageIndex = imageIndex + 1;
            }
            if(imageIndex === 2) {
                nextBtn.setAttribute('disabled', 'true');
            }
        }

        function init(){
            prevBtn.setAttribute('disabled', 'true');
            prevBtn.addEventListener('click', prev);
            nextBtn.addEventListener('click', next);
        }

        init();
       
        
    };

    // 선택된 li요소의 위치에 class이름(action) 활성화, 나머지 비활성화
    const fnAddActive = function(n){
        elMenuList.forEach((el,index)=>{
            const elMenuP = el.querySelector('p');
            (index === n) ? elMenuP.classList.add('action'): elMenuP.classList.remove('action');
        });
    };

    

    // 함수기능 우선 수행 -----------------------------------------------------------------------

    // 기능 수행 --------------------------------------------------------------------------------
    fetch(dataFile)
    .then((response)=>response.json())
    .then(function(data){
        // 탭 리스트
        let arrTabList = [];
        data.filter(d => {
            let check = arrTabList.indexOf(d.category) === -1;
            if(check){arrTabList.push(d.category); }
        });

        elMenuItems.innerHTML = '<ul></ul>';
        elMenuUl =  elMenuItems.querySelector('ul');
        let tabLi;
        arrTabList.forEach((el,index)=>{
            // const tabImagePath = `${tabSourcePath.img}${obj.path}_icon.png`;
            tabLi = document.createElement('li');
            tabLi.innerHTML = `<button type="button">
                                 <div class="tab_card">
                                     <div class="tab_icon_0${index}">
                                        <span class="blind">${arrTabList[index]} 아이콘</span>
                                    </div>
                                    <p>${arrTabList[index]}</p>
                                 </div>
                                </button>`;
            elMenuUl.append(tabLi);
        });


        // 탭 내용 처리
        const fnFilterContent = (menu) => {
            let m = menu || 0;
            const dataFilter = fnCategoryFilter(arrTabList[m], data);
            fnMakeUl();
            dataFilter.forEach(fnMakeLi);
        };

        elMenuList = elMenuUl.querySelectorAll('li');
        fnFilterContent();
        fnAddActive(TABCOUNT);

        elMenuList.forEach((el,index) =>{
            el.addEventListener('click', function(e){
                e.preventDefault();
                fnFilterContent(index);
                TABCOUNT = index;
                fnAddActive(TABCOUNT);
            });
        });
    })
    .catch(console.log);
    
}