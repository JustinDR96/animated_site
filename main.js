import "./style.scss";

const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");

window.addEventListener("load", () => {
  let TL = gsap.timeline({ paused: true });

  TL.to(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3);

  TL.play();
});
