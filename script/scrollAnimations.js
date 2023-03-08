const screenPosition = window.innerHeight / 2;

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
      document.querySelector(`.${element.class}`).classList.add(`fadedIn`);
    }, element.timeout);
  })
);

//About Section

const tags = document.querySelector(".tags");
const storyContent = document.querySelector(".storyContent");
const moreStory = document.querySelector(".moreStory");

const aboutAnimations = () => {
  const tagsPosition = storyContent.getBoundingClientRect().top;
  const storyContentPosition = storyContent.getBoundingClientRect().top;
  const moreStoryPosition = moreStory.getBoundingClientRect().top;

  if (tagsPosition < screenPosition) {
    tags.classList.add("fadedIn", "tagShake");
  } else {
    tags.classList.remove("fadedIn", "tagShake");
  }
  if (storyContentPosition < screenPosition) {
    storyContent.classList.add("fadedIn");
  } else {
    storyContent.classList.remove("fadedIn");
  }
  if (moreStoryPosition < screenPosition) {
    moreStory.classList.add("fadedIn");
  } else {
    moreStory.classList.remove("fadedIn");
  }
};

//Portfolio
const cardsDeck = document.querySelector(".cardsDeck");
const projectCards = document.querySelectorAll(".projectCard");
const truncatedCards = document.querySelectorAll(".truncatedCard");
const extendedProjectCards = document.querySelectorAll(".extendedProjectCard");
const overlays = document.querySelectorAll(".dataOverlay");
const cardTop = document.getElementById("cardTop");

const portfolioScrollAnimation = () => {
  const cardDeckPosition = cardsDeck.getBoundingClientRect().top;

  if (cardDeckPosition < screenPosition) {
    cardsDeck.classList.add("deckVisible");
  } else {
    storyContent.classList.remove("deckVisible");
  }
};

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


//Contact Section

const contactForm = document.querySelector(".contactForm");
const someInfos = document.querySelector(".someInfos");

const contactAnimations = () => {
  const contactFormPosition = contactForm.getBoundingClientRect().top;
  const someInfosPosition = someInfos.getBoundingClientRect().top;

  if(contactFormPosition < screenPosition) {
    contactForm.classList.add("fadedInX-axis");
  } else {
    contactForm.classList.remove("fadedInX-axis");
  }

  if(someInfosPosition < screenPosition) {
    someInfos.classList.add("notesShake");
  } else {
    someInfos.classList.remove("notesShake");
  }
}

//functions call

window.addEventListener("scroll", aboutAnimations);
window.addEventListener("scroll", portfolioScrollAnimation);
window.addEventListener("scroll", contactAnimations);
