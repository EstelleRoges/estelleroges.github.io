const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const links = document.getElementById("links");

const hideNavbar = () => {
  if (screen.width < 768) {
    links.classList.add("none");
    closeIcon.classList.remove("none");
  } else {
    links.classList.remove("none");
    closeIcon.classList.add("none");
  }
};

window.addEventListener("resize", hideNavbar);

const displayNav = () => {
  if (!links.classList.contains("none")) {
    links.classList.add("none");
    links.classList.remove("showLinks");
  }
  links.classList.remove("none");
  links.classList.add("showLinks");
};

const autoClose = () => {
  setTimeout(() => {
    links.classList.add("none");
  }, 500);
};
const closeMenu = () => {
  links.classList.add("none");
};
