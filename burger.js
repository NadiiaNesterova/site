"use strict";

const btnMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__body");
const body = document.querySelector("body");

const toggleMenu = () => {
menu.classList.toggle("_active");
btnMenu.classList.toggle("_active");
body.classList.toggle('lock');
}

const handleDocumentClick = (event) => {
const target = event.target;
const itsMenu = target == menu || menu.contains(target);
const itsBtnMenu = target == btnMenu;
const menuIsActive = menu.classList.contains("_active");

if (!itsMenu && !itsBtnMenu && menuIsActive) {
toggleMenu();
}
};

const handleLinkClick = () => {
toggleMenu();
}

btnMenu.addEventListener("click", (event) => {
event.stopPropagation();
toggleMenu();
});

document.addEventListener("click", handleDocumentClick);

menu.querySelectorAll('.menu__link').forEach(link => {
link.addEventListener('click', handleLinkClick);
});
