const nav = document.getElementsByTagName("nav");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const links = document.getElementById("links");

const ariaToggle =
  menuIcon.getAttribute("aria-expanded") === true ? false : true;
menuIcon.setAttribute("aria-expanded", ariaToggle);

const navAnimation = () => {
  setTimeout(() => {
    nav.classList.add("appeared");
  }, 300);
};

const toggleNav = () => {
  menuIcon.style.display = "none";
  links.classList.add("showLinks");
};

const autoClose = () => {
  setTimeout(() => {
    menuIcon.style.display = "block";
    links.classList.remove("showLinks");
  }, 300);
};

const closeMenu = () => {
  menuIcon.style.display = "block";
  links.classList.remove("showLinks");
};

menuIcon.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", closeMenu);
