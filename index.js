const hamburger = document.querySelector(".nav--hamburger");
const nav =document.querySelector("nav");

hamburger.addEventListener("click", ()=> {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        document.querySelector(".menubar-icon").src ="images/icon-close.svg";
    }else {
        document.querySelector(".menubar-icon").src ="images/icon-hamburger.svg";
    }
    
})

