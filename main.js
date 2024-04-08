//header
let scrollHeader = () => {
    let header = document.querySelector("#header");
    pageYOffset >= 50 ?
        header.classList.add("bg-header") :
        header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

//배경테마 변경
let themeButton = document.getElementById("theme-button"); //.nav_buttons에서 가져옴
let iconTheme = "ri-sun-line"; //remixicon에서 클래스명 가져옴
let darkTheme = "dark-theme"; //다크모드에 이 클래스명 넣음

let getCurrentTheme = () => {
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

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
    //새로고침한 뒤로도 계속 다크모드가 유지됨
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

//모바일 메뉴
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

//ScrollReveal--API--reveal--Caveats
ScrollReveal().reveal(
    ".home_img,.home_data,.about_data,.about_img,.popular_card,recently_data,.recently_img,.recently_data_img,.newsletter_spinach,.footer_onion,.footer_spinach", {
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
ScrollReveal().reveal(".newsletter_spinach,.footer_onion,.footer_spinach", {
    origin: "top",
    interval: 600
});

//scroll up
let scrollup = () => {
    let scrollup = document.getElementById("scroll-up")
    pageYOffset >= 350 ?
        scrollup.classList.add("show-scroll") :
        scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollup)

//menu
let scrollActive = () => {
    let scrollY = pageYOffset;

    let sections = document.querySelectorAll('section[id]');

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight; //현재 불러온 item인 section의 높이값
        let sectionTop = current.offsetTop - 60; //현재 불러온 item의 머리인 top인 화면의 top인 위치

        let sectionId = current.getAttribute('id');

        let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}
        "]`)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }

    })
}

window.addEventListener("scroll", scrollActive)
