const slidesContent = [
  {
    projectName: "The Succi Place",
    projectImg: "assets/theSucciPlaceThumbnail.jpg",
    projectDesc:
      "Mon premier projet avec React. C'est un projet front-end, mais j'y ai tout de même ajouté quelques éléments dynamiques comme le panier.",
    projectUrl: "https://thesucciplace.netlify.app/",
  },
  {
    projectName: "Cake Addict",
    projectImg: "assets/cakeWebsiteTh.jpg",
    projectDesc: "Un site fictif que j'ai fait avec Bootstrap.",
    projectUrl:
      "https://rawcdn.githack.com/EstelleRoges/CakeAddiction_Website/2e54fb58335078a777c3b14692ff5a71e878a8ce/index.html",
  },
  {
    projectName: "Rating component",
    projectImg: "assets/ratingComponentTh.jpg",
    projectDesc: "*Frontend Mentor. Un petit projet où il fallait récupérer la note choisie pour la réafficher ensuite.",
    projectUrl:
      "https://www.frontendmentor.io/solutions/esteller-interactive-rating-component-Yihhhudkeq",
  },
  {
    projectName: "Intro and SignUp component",
    projectImg: "assets/introSignUpComponentTh.jpg",
    projectDesc: "*Frontend Mentor. La difficulté ici était de ne valider le formulaire que si tous les champs étaient correctement remplis.",
    projectUrl:
      "https://www.frontendmentor.io/solutions/intro-component-with-signup-form-htmlsassvanilla-js-Lsl2Dvh5SG",
  },
  {
    projectName: "FAQ component",
    projectImg: "assets/faq_component.jpg",
    projectDesc: "*Frontend Mentor. Dans ce projet, il a fallu placer les images correctement. Je l'ai réalisé sans javascript. Ce projet m'a surtout appris qu'il ne fallait pas sous-estimer la puissance du duo HTML/CSS.",
    projectUrl: "https://qny9gn.csb.app/",
  },
  {
    projectName: "Advice generator",
    projectImg: "assets/advice_generator.jpg",
    projectDesc: "*Frontend Mentor. Pour ce projet, il a fallu établir un lien entre l'appli et une API",
    projectUrl: "https://qny9gn.csb.app/",
  },
  {
    projectName: "Room homepage",
    projectImg: "assets/room_homepage.jpg",
    projectDesc: "*Frontend Mentor. J'ai réalisé ce projet sous React. Le rendu global de la page était un peu délicat à mettre en place. Le carousel a été créé par mes soins, et je n'en suis pas peu fière. Bien que vouloir réinventer la roue n'est pas la meilleure idée, je trouve utile de partir de zéro, ne serait-ce que pour étudier et améliorer son raisonnement.",
    projectUrl: "https://fm-roomhomepage.netlify.app/",
  },
  {
    projectName: "Huddle Homepage",
    projectImg: "assets/huddle_homepage.jpg",
    projectDesc: "*Frontend Mentor. Cette landing page fictive était très intéressante à développer, notamment par la présence des dividers, élément avec lequel je souhaitais travailler. les breakpoints et la mise en place étaient un peu challengeants, mais plaisants à travailler.",
    projectUrl: "https://fmchallenge-huddlelandingpage.netlify.app/",
  },
];

const slide = (direction) => {
  if (direction === "previous") {
    index === 0 ? (index = slidesContent.length) : (index = index - 1);
  }
  if (direction === "next") {
    index === slidesContent.length ? (index = 0) : (index = index + 1);
  }
};
