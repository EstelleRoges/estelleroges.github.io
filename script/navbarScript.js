const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const links = document.getElementById("links");

const hideNavbar = () => {
  if(screen.width < 768) {
    links.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    links.style.display = "block";
    closeIcon.style.display = "none"
  }
};

window.addEventListener("resize", hideNavbar);

const displayNav = () => {
  if (links.style.display == "none") {
    links.style.display = "flex";
    links.classList.add("showLinks");
  } else {
    links.style.display = "none";
    links.classList.remove("showLinks");
  }
};

const autoClose = () => {
  setTimeout(() => {
    links.style.display = "none";
  }, 500);
};
const closeMenu = () => {
  links.style.display = "none";
};
