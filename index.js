// G-Drive CAR IMAGE LINKS
// var nsx = "http://drive.google.com/uc?export=view&id=1rgWolMWhuHaB0XVp3kPhBD6X0Bmk8NQj";
// var rx7 = "http://drive.google.com/uc?export=view&id=1EbtQYb4BTFXLvRbkTMQo2XuZCifxEYbK";
// var supra = "http://drive.google.com/uc?export=view&id=1-O5KPertTVujkFyQo7-KGX253cPDwc6U";
// var gtr = "http://drive.google.com/uc?export=view&id=1b7FKueTyVW6aUu6W3Dhgmf_68Xuc7Idj";
// var imperza = "http://drive.google.com/uc?export=view&id=1-TinyPwCIetI8qXXDWEYFMQl1IbWqIeF";
// var lancer = "http://drive.google.com/uc?export=view&id=1MsPTsHAdxxllo5IokM_572rGv3D474Dt";
var nsx = "Images/Honda NSX.png";
var rx7 = "Images/Mazda RX-7.png";
var supra = "Images/Toyota Supra.png";
var gtr = "Images/Nissan GT-R.png";
var imperza = "Images/Subaru Imperza.png";
var lancer = "Images/Mitsubishi Lancer.png";

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

// Selecting all containers having small car side view image
var navBarSmallCarModels = document.querySelectorAll(".nav-bar-car-models-container");
// Adding mouse enter event listener to all the car containers
for (let i = 0; i < navBarSmallCarModels.length; i++) {
    navBarSmallCarModels[i].addEventListener("mouseenter", function (e) {
        console.log(this.id);
        updateDropdown(this.id)
    })
}

// Function to update the dropdown menu
function updateDropdown(carName) {
    switch (carName) {
        case "nsx": document.querySelector(".dropdown-car-img").setAttribute("src", nsx);
            document.querySelector("#dropdown-car-name").innerHTML = "NSX 2000";
            break;
        case "rx7": document.querySelector(".dropdown-car-img").setAttribute("src", rx7);
            document.querySelector("#dropdown-car-name").innerHTML = "RX-7";
            break;
        case "supra": document.querySelector(".dropdown-car-img").setAttribute("src", supra);
            document.querySelector("#dropdown-car-name").innerHTML = "Supra Mk 4";
            break;
        case "gtr": document.querySelector(".dropdown-car-img").setAttribute("src", gtr);
            document.querySelector("#dropdown-car-name").innerHTML = "R34 GT-R";
            break;
        case "imperza": document.querySelector(".dropdown-car-img").setAttribute("src", imperza);
            document.querySelector("#dropdown-car-name").innerHTML = "Imperza STi";
            break;
        case "lancer": document.querySelector(".dropdown-car-img").setAttribute("src", lancer);
            document.querySelector("#dropdown-car-name").innerHTML = "Lancer Evo IX";
            break;
    }
}