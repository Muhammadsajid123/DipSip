let tlText = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

window.addEventListener("load", function () {
  tlText.from(".header-wrapper", {
    delay: 1,
    y: "-100%",
    ease: "power1.out",
    duration: 1,
  });
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
