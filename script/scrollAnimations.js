//Hero Section

const homeElements = [
  {
    class: "iAm",
    timeout: 600,
  },
  {
    class: "myJob",
    timeout: 1000,
  },
  {
    class: "connectAndCV",
    timeout: 1400,
  },
];

window.addEventListener("load", () =>
  homeElements.forEach((element, index) => {
    setTimeout(() => {
      document
        .querySelector(`.${element.class}`)
        .classList.add(`homeSectionElementAppeared`);
    }, element.timeout);
  })
);

//Portfolio
const cardsDeck = document.querySelector(".cardsDeck");
const projectCards = document.querySelectorAll(".projectCard");
const truncatedCards = document.querySelectorAll(".truncatedCard");
const extendedProjectCards = document.querySelectorAll(".extendedProjectCard");
const overlays = document.querySelectorAll(".dataOverlay");
const cardTop = document.getElementById("cardTop");

const scrollAnimation = () => {
  const cardDeckPosition = cardsDeck.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;

  if (cardDeckPosition < screenPosition) {
    cardsDeck.classList.add("deckVisible");
  } else {
    cardsDeck.classList.remove("deckVisible");
  }
};

window.addEventListener("scroll", scrollAnimation);

const projectModals = document.querySelectorAll(".projectModal");

const extendCard = (index) => {
  if (screen.width < 900) {
    cardTop.scrollIntoView();
  }

  for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].classList.add("none");
  }
  projectCards[index].classList.remove("none");
  projectCards[index].classList.add("extended");

  truncatedCards[index].classList.add("none");
  extendedProjectCards[index].classList.remove("none");
  overlays[index].classList.add("none");
  cardsDeck.style.display = "flex";
};

const truncateCard = (index) => {
  for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].classList.remove("none");
  }
  projectCards[index].classList.remove("extended");

  truncatedCards[index].classList.remove("none");
  extendedProjectCards[index].classList.add("none");
  overlays[index].classList.remove("none");
  cardsDeck.style.display = "flex";
};
