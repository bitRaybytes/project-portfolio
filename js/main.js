const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

const overlay = document.getElementById("overlay");
const closemenu = document.getElementById("closemenu");


//navigation right
let menuOpen = false;

function openMenu() {
    menuOpen = true;
    navbar.style.marginRight = "0";
    overlay.style.display = "block";
    navbar.style.transition =".2s ease-in-out"
    
}

function closeMenu() {
    menuOpen = false;
    navbar.style.marginRight = "-200px";
    overlay.style.display = "none";

}

hamburger.addEventListener("click", function(){
    if (!menuOpen){
        openMenu();
    }
})

closemenu.addEventListener("click", function(){
    if (openMenu)
        closeMenu();
})

overlay.addEventListener("click", function(){
    if (openMenu)
        closeMenu();
})



// CV Section Tablinks
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// CV Section Tablinks
var cvlinks = document.getElementsByClassName("cv-links");
var cvcontents = document.getElementsByClassName("cv-contents");

function opentab(tabname){
    for(cvlink of cvlinks){
        cvlink.classList.remove("active-link-tab");
    }
    for(cvcontent of cvcontents){
        cvcontent.classList.remove("active-tab-cv");
    }
    event.currentTarget.classList.add("active-link-tab");
    document.getElementById(tabname).classList.add("active-tab-cv");
}