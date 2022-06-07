// NAV BAR FUNCTION - SCROLL UP TO HIDE & SCROLL DOWN TO SHOW
var lastScrollTop = 0;
var navBar = document.getElementById("navigation-bar");

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navBar.style.top="-8.7rem";
    }
    else{
        navBar.style.top="0";
    }
    lastScrollTop = scrollTop;
})

// 