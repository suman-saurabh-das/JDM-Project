var imagesNavBar = new Array();
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        imagesNavBar[i] = new Image();
        imagesNavBar[i].src = preload.arguments[i];
    }
}

// Image order - nsx, rx7, lancer, gtr, brz, supra, shop
preload(
    "http://drive.google.com/uc?export=view&id=1cdHTLXwznwLj2FrSTmmdcs9n8D8V-Bpj",
    "http://drive.google.com/uc?export=view&id=1W6BA2Ag9LQ8QhGnTLoUBjddjVZF8v4FW",
    "http://drive.google.com/uc?export=view&id=1qEblv69AVVImTQn5Itn1wnNC-h44V9DG",
    "http://drive.google.com/uc?export=view&id=1dpSBwEtsJOxGDCNivNP4a4ITfUcPzphv",
    "http://drive.google.com/uc?export=view&id=11OUCW7f7gTf5wir0rvbhUBqdilEThRPt",
    "http://drive.google.com/uc?export=view&id=1MJtA9CNRbTCImyhpI1eEsL0uQB19TItp",
    "http://drive.google.com/uc?export=view&id=17e0HrGlxVaGIaP9JOIXT1nt8910XqiWu"
);

// NAV BAR FUNCTION - SCROLL UP TO HIDE & SCROLL DOWN TO SHOW
var lastScrollTop = 0;
var navBar = document.getElementById("navigation-bar");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-8.7rem";
    }
    else {
        navBar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

// NAV BAR DROPDOWN (LARGE DISPLAY) - CHANGE CONTENT DYNAMICALLY

var dropdownImage = document.querySelector(".dropdown-image");
var dropdownCarName = document.querySelector(".dropdown-car-name");
var dropdownOptionsHeader = document.querySelector(".dropdown-options-header");

var dropdownCarDetailsContainer = document.querySelector(".dropdown-car-details-container");
var dropdownOptionsDetailsContainer = document.querySelector(".dropdown-options-details-container");
var dropdownOptionsShopDetails = document.querySelector(".dropdown-options-shop-details");
var dropdownOptionsDealerDetails = document.querySelector(".dropdown-options-dealer-details");

// This is used to hide (display=none) the map
var hideMap = document.querySelector(".hide-map");
var hideImage = document.querySelector(".hide-image");

// Selecting all containers having small car side view image
var navBarSmallCarModels = document.querySelectorAll(".nav-bar-car-models-container");
// Adding mouse enter event listener to all the car containers
for (let i = 0; i < navBarSmallCarModels.length; i++) {
    navBarSmallCarModels[i].addEventListener("mouseenter", function (e) {
        // console.log(this.id);
        dropdownCarDetailsContainer.style.display = "block"
        dropdownOptionsDetailsContainer.style.display = "none"
        updateDropdown(this.id)
    })
}
// Selecting dealer and shop links
var navBarLinks = document.querySelectorAll(".nav-bar-links");
for (let i=0; i < navBarLinks.length; i++){
// Adding mouse enter event listener to both links
    navBarLinks[i].addEventListener("mouseenter", function(e){
        // console.log(this.id);
        dropdownCarDetailsContainer.style.display = "none"
        dropdownOptionsDetailsContainer.style.display = "block"
        updateDropdown(this.id);
    })
}

// Function to update the dropdown menu
function updateDropdown(carName) {
    switch (carName) {
        case "nsx": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[0].src);
                    dropdownCarName.innerHTML = "<span class='icon-honda'></span>&ensp;NSX Gen 2";
                    break;
        case "rx7": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[1].src);
                    dropdownCarName.innerHTML = "<span class='icon-mazda'></span>&ensp;RX-7";
                    break;
        case "supra": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[5].src);
                    dropdownCarName.innerHTML = "<span class='icon-toyota'></span>&ensp;Supra Mk 5";
                    break;
        case "gtr": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[3].src);
                    dropdownCarName.innerHTML = "<span class='icon-nissan'></span>&ensp;R35 GT-R";
                    break;
        case "brz": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[4].src);
                    dropdownCarName.innerHTML = "<span class='icon-subaru'></span>&ensp;BRZ Limited";
                    break;
        case "lancer": hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    dropdownImage.setAttribute("src", imagesNavBar[2].src);
                    dropdownCarName.innerHTML = "<span class='icon-mitsubishi'></span>&ensp;Lancer Evo X";
                    break;
        case "dealer" : hideMap.style.display = "block";
                    hideImage.style.display = "none";
                    // TO TOGGLE THE CONTENT OF THE DEALER (FIND US) SECTION
                    dropdownOptionsShopDetails.style.display = "none"
                    dropdownOptionsDealerDetails.style.display = "block"
                    // dropdownImage.setAttribute("src", dealer);
                    dropdownOptionsHeader.innerHTML = "<a href='mailto:dsumansaurabh@gmail.com'><i class='fa-solid fa-envelope'></i>&ensp;Mail Us</a>";
                    break;
                    
        case "shop" : hideMap.style.display = "none";
                    hideImage.style.display = "block";
                    // TO TOGGLE THE CONTENT OF THE SHOP SECTION
                    dropdownOptionsShopDetails.style.display = "block"
                    dropdownOptionsDealerDetails.style.display = "none"
                    dropdownImage.setAttribute("src", imagesNavBar[6].src);
                    dropdownOptionsHeader.innerHTML = `<a href='#models-section'>Browse Models</a><br>
                                                       <a href='#shop-section'>Accessories & Services</a>`;
                    break;
    }
}

// SIDE BAR SHOW & HIDE

var sideBar = document.getElementById("side-bar");
var sideBarButtonOpen = document.getElementById("side-bar-button-open");
var sideBarButtonClose = document.getElementById("side-bar-button-close");

sideBarButtonOpen.addEventListener("click", function(){
    sideBar.style.transform = "translateX(0)";
})
sideBarButtonClose.addEventListener("click", function(){
    sideBar.style.transform = "translateX(100vw)";
})

// VIDEO SELECTION

var videoSelect = document.getElementById("video-select");
var centerSocialContainer = document.querySelector(".center-social-container");

var carMeet = document.getElementById("car-meet-social");
var drift = document.getElementById("drift-social");
var midnightRun = document.getElementById("midnight-run-social");
var rallySocial = document.getElementById("rally-social");

carMeet.addEventListener("click", function(){
    centerSocialContainer.innerHTML = `
    <video class="video" controls width="100%" height="100%">
        <source id="video-select" src="https://drive.google.com/uc?export=download&id=1a-tC2mYLTYNGnkZBDz1eBg1AK34nBvOb" type="video/mp4">
    </video>`
})
drift.addEventListener("click", function(){
    centerSocialContainer.innerHTML = `
    <video class="video" controls width="100%" height="100%">
        <source id="video-select" src="https://drive.google.com/uc?export=download&id=1hSrzqqNpBSNxVdcZnUPddCDtbXR3Jaga" type="video/mp4">
    </video>`
})
midnightRun.addEventListener("click", function(){
    centerSocialContainer.innerHTML = `
    <video class="video" controls width="100%" height="100%">
        <source id="video-select" src="https://drive.google.com/uc?export=download&id=1md9DAkmYlLxe8LgFhnwjxtjMsZBJ6eZZ" type="video/mp4">
    </video>`
})
rallySocial.addEventListener("click", function(){
    centerSocialContainer.innerHTML = `
    <video class="video" controls width="100%" height="100%">
        <source id="video-select" src="https://drive.google.com/uc?export=download&id=1tpx2_JmL7xgEfms3LYRm__1Lx72IJClX" type="video/mp4">
    </video>`
})