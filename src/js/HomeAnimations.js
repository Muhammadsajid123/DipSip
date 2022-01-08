let tlText = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

let tlHero = gsap.timeline({
  defaults: {
    duration: 3,
  },
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom 20%", //or "+=300" meaning 300px further down
    scrub: 1,
    pin: true,
  },
});

tlHero.fromTo(".hero-img2", { y: "0%" }, { y: "-99%" });
tlHero.fromTo(
  ".first-para",
  {
    opacity: 1,
  },
  { opacity: 0 },
  "-=2"
);
tlHero.to(".second-para", { y: "-20px", opacity: 1 }, "-=1");

window.addEventListener("load", function () {
  tlText
    .from(".header-wrapper", {
      delay: 1,
      y: "-100%",
      ease: "power1.out",
      duration: 1,
    })
    .from(".hero-title", {
      opacity: 0,
      y: "20px",
      ease: "power1.out",
    })
    .from(".first-para", {
      opacity: 0,
      y: "20px",
    });
});

const leftChevron = document.querySelector(".left-chevron");
const rightChevron = document.querySelector(".right-chevron");
const cards = document.querySelectorAll(".card");

const classArr = [];
for (let i = 0; i < cards.length; i++) {
  classArr.push(cards[i].classList[1]);
}

let tlTest = gsap.timeline({
  default: {
    duration: 1,
  },
});

let counterRight = 2;
rightChevron.addEventListener("click", () => {
  for (let j = 0; j < classArr.length; j++) {
    gsap.to(`.${classArr[j]}`, { scale: "0.8", zIndex: 1 });
  }

  if (counterRight > classArr.length - 1) counterRight = 0;

  if (counterRight == 2) {
    gsap.to(".cards", { x: "-150px" });
  }
  if (counterRight == 1) {
    gsap.to(".cards", { x: "0px" });
  }
  if (counterRight == 0) {
    gsap.to(".cards", { x: "150px" });
  }

  gsap.to(`.${classArr[counterRight]}`, {
    scale: "1",
    zIndex: 4,
    ease: "power2.out",
  });
  counterRight++;
});

let counterLeft = 0;
leftChevron.addEventListener("click", () => {
  for (let j = 0; j < classArr.length; j++) {
    gsap.to(`.${classArr[j]}`, { scale: "0.8", zIndex: 1 });
  }

  if (counterLeft > classArr.length - 1) counterLeft = 0;

  if (counterLeft == 2) {
    gsap.to(".cards", { x: "-250px" });
  }
  if (counterLeft == 1) {
    gsap.to(".cards", { x: "0px" });
  }
  if (counterLeft == 0) {
    gsap.to(".cards", { x: "150px" });
  }

  gsap.to(`.${classArr[counterLeft]}`, {
    scale: "1",
    zIndex: 4,
    ease: "power3.out",
  });
  counterLeft++;
});

let tlCup = gsap.timeline({
  defaults: {
    duration: 1,
  },
});
tlCup.fromTo(
  ".steam",
  {
    // rotateX: 20,
    // scaleX: 1,
    // translateX: -5,
    x: -10,
    fill: "black",
    repeat: -1,
    yoyo: true,
  },
  { x: 5, fill: "gray", repeat: -1, yoyo: true }
);
