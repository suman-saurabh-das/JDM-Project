var nsx = "images/Honda NSX.png";
var rx7 = "images/Mazda RX-7.png";
var supra = "images/Toyota Supra.png";
var gtr = "images/Nissan GT-R.png";
var imperza = "images/Subaru Imperza.png";
var lancer = "images/Mitsubishi Lancer.png";
var dealer = "images/map.png";
var shop = "images/shop.jpeg";

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
        case "nsx": dropdownImage.setAttribute("src", nsx);
                    dropdownCarName.innerHTML = "<span class='icon-honda'></span>&ensp;NSX 2000";
                    break;
        case "rx7": dropdownImage.setAttribute("src", rx7);
                    dropdownCarName.innerHTML = "<span class='icon-mazda'></span>&ensp;RX-7";
                    break;
        case "supra": dropdownImage.setAttribute("src", supra);
                    dropdownCarName.innerHTML = "<span class='icon-toyota'></span>&ensp;Supra Mk 4";
                    break;
        case "gtr": dropdownImage.setAttribute("src", gtr);
                    dropdownCarName.innerHTML = "<span class='icon-nissan'></span>&ensp;R34 GT-R";
                    break;
        case "imperza": dropdownImage.setAttribute("src", imperza);
                    dropdownCarName.innerHTML = "<span class='icon-subaru'></span>&ensp;Imperza STi";
                    break;
        case "lancer":  dropdownImage.setAttribute("src", lancer);
                    dropdownCarName.innerHTML = "<span class='icon-mitsubishi'></span>&ensp;Lancer Evo IX";
                    break;
        case "dealer" : dropdownOptionsShopDetails.style.display = "none"
                    dropdownOptionsDealerDetails.style.display = "block"
                    dropdownImage.setAttribute("src", dealer);
                    dropdownOptionsHeader.innerHTML = "<a href=''>Contact Us</a>";
                    break;
        case "shop" : dropdownOptionsShopDetails.style.display = "block"
                    dropdownOptionsDealerDetails.style.display = "none"
                    dropdownImage.setAttribute("src", shop);
                    dropdownOptionsHeader.innerHTML = "<a href=''>Accessories & Services</a>";
                    break;
    }
}