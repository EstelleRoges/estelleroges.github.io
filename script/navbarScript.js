const closeBtn = document.querySelector(".navbar-toggler");
const upperSection = document.getElementById("upperSection");
const offcanvas = document.getElementById("offcanvasNavbar");
const navLinks = document.getElementsByClassName("nav-item");

offcanvas.addEventListener("click", () => {
  const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
  offcanvas.classList.toggle("show");
  offcanvasBackdrop.remove();
  setTimeout(() => {
    closeBtn.click();
  }, 1000);
});
