const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120)
});

let menu = document.querySelector("#menu-icon");
let navheader = document.querySelector(".nav-header");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navheader.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navheader.classList.remove('open');
};


