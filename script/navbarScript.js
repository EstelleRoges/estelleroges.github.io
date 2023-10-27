const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const links = document.getElementById("links");
const ariaToggle =
  menuIcon.getAttribute("aria-expanded") === true ? false : true;
menuIcon.setAttribute("aria-expanded", ariaToggle);

const navAnimation = () => {
  setTimeout(() => {
    header.classList.add("appeared");
  }, 300);
};

const toggleNav = () => {
  nav.classList.add("visible");
};

const autoClose = () => {
  setTimeout(() => {
    menuIcon.style.display = "flex";
    nav.classList.remove("visible");
  }, 300);
};

const closeMenu = () => {
  menuIcon.style.display = "flex";
  nav.classList.remove("visible");
};

menuIcon.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", closeMenu);
