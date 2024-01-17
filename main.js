//header
let scrollHeader = () => {
    let header = document.querySelector("#header");
    //pageYOffset >=50?A:B;//조건문이 참이면 A가 실행되고 거짓이면 B가 실행됨.
    pageYOffset >= 50 ?
        header.classList.add("bg-header") :
        header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// scrollHeader 함수는 window 객체의 스크롤 이벤트를 감지하고, 페이지의 스크롤 위치(pageYOffset)가 50 이상이면 #header 요소에 bg-header 클래스를 추가하고, 그렇지 않으면 해당 클래스를 제거함.

//배경테마 변경
let themeButton = document.getElementById("theme-button"); //.nav_buttons에서 가져옴
let iconTheme = "ri-sun-line"; //remixicon 들어가서 .명만 가져옴
let darkTheme = "dark-theme"; //어두울 때는 이 .명을 넣을거임

let getCurrentTheme = () => {
    //document.body.classList.contains(darkTheme)==>body가 class명 dark-theme를 가지고 있는가? true/false
    let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
    return result;
};

let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme) ?
        "ri-moon-line" :
        "ri-sun-line";

    return result;
};

//웹의 스토어에 값 셋팅
// localStorage.setItem() --> 웹 스토어에 값을 입력
// localStorage.getItem() --> 웹 스토어의 값을 가져올 때

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

//개발자-->Application-->Storage-->Local Storage에서 달 아이콘을 클릭할때마다 key의 value값이 dark였다가 light로 변하는 것을 확인할 수 있음

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
//console.log(selectedTheme);

if (selectedTheme) {
    //이 값을 주고나면 새로고침한 뒤로도 계속 다크모드가 유지됨
    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme);
    } else {
        document.body.classList.remove(darkTheme);
    } //

    if (selectedIcon == "ri-moon-line") {
        themeButton.classList.add(iconTheme);
    } else {
        themeButton.classList.remove(iconTheme);
    }
}

//모바일 메뉴 보이기
let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

//전체화면 애니메이션

//ScrollReveal 사이트 --API--reveal--Caveats
ScrollReveal().reveal(
    ".home_img,.home_data,.about_data,.about_img,.popular_card,recently_data,.recently_img,.recently_data_img,.footer_description,.footer_content,.footer_info", {
        delay: 400,
        duration: 2500,
        origin: "top",
        distance: "60px",
        //reset: true //false 기본값 --> 1번만 애니메이션이 실행됨
    }
);

ScrollReveal().reveal(".home_data,.popular_card", {
    origin: "bottom"
});
ScrollReveal().reveal(".about_data", ".recently_data", {
    origin: "left"
});
ScrollReveal().reveal(".about_img", ".recently_img", {
    origin: "right"
});
ScrollReveal().reveal(".popular_card", {
    origin: "bottom",
    interval: 600
});

//🎃scroll up
let scrollup = () => {
    let scrollup = document.getElementById("scroll-up")
    pageYOffset >= 350 ?
        scrollup.classList.add("show-scroll") :
        scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollup)

//🎃menu
let scrollActive = () => {
    let scrollY = pageYOffset;


    let sections = document.querySelectorAll('section[id]'); //section 태그들을 가져오는데 속성 중 id가 있는 section들을 가져와라
    //console.log(sections)

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight; //현재 불러온 item인 section의 높이값
        let sectionTop = current.offsetTop - 60; //현재 불러온 item의 머리인 top인 화면의 top인 위치

        let sectionId = current.getAttribute('id');
        //console.log(sectionId)

        let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}
        "]`)
        //a[href*="home"] --> home 포함되어 있는가
        //https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors#%EA%B5%AC%EB%AC%B8
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }

    })
}


window.addEventListener("scroll", scrollActive)






























// 위의 코드에서 scrollHeader 함수는 window 객체의 scroll 이벤트에 대한 콜백 함수로 등록되어 있습니다. 이 코드는 웹 페이지에서 스크롤이 발생할 때마다 scrollHeader 함수가 실행되도록 하는 것을 목적으로 합니다.

// 여기서 scroll 이벤트는 사용자가 웹 페이지를 스크롤할 때 발생하는 이벤트입니다. window.addEventListener('scroll', scrollHeader)는 이벤트 리스너를 등록하는 부분으로, 스크롤이 발생하면 scrollHeader 함수가 호출됩니다.

// 이제 scrollHeader 함수에 대한 예시를 작성해보겠습니다:

// javascript
// Copy code
// let scrollHeader = () => {
//   // 스크롤이 발생했을 때 실행되는 코드
//   console.log('스크롤이 발생했습니다.');

//   // 추가적인 작업을 수행할 수 있습니다.
//   // 예를 들어, 헤더의 스타일을 변경하거나 다른 동작을 수행할 수 있습니다.
// };
// 이 함수 내에서는 스크롤이 발생했을 때 실행되는 코드를 작성할 수 있습니다. 예를 들어, 콘솔에 메시지를 출력하거나 헤더의 스타일을 동적으로 변경하는 등의 작업을 수행할 수 있습니다. scrollHeader 함수는 스크롤이 발생할 때마다 호출되며, 등록된 이벤트 리스너를 통해 스크롤에 대한 여러 동작을 수행할 수 있습니다.