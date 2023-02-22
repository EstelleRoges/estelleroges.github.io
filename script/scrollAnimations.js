const scrollAnimation = () => {
    const cardsDeck = document.querySelector(".cardsDeck");
    const projectCards = document.querySelectorAll(".projectCard");
    const cardDeckPosition = cardsDeck.getBoundingClientRect().top;
    const screenPosition = window.innerHeight /2;

    if(cardDeckPosition < screenPosition) {
        cardsDeck.classList.add("deckVisible");
    } else {
        cardsDeck.classList.remove("deckVisible");
    }
}

window.addEventListener("scroll", scrollAnimation);

const projectModals = document.querySelectorAll(".projectModal");

const openModal = (index) => {
    projectModals.forEach((modal, index) => modal.style.display ="block")
}

const closeModal = () => {
  projectModals.forEach((modal, index) => modal.style.display ="none")
}