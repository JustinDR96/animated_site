import "./style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const containerSecond = document.querySelector(".container-second");
const containerRight = document.querySelector(".container-right");

window.addEventListener("load", () => {
  let tl = gsap.timeline({
    paused: true,
  });

  tl.add(
    gsap.from(
      titreSpans,
      1,
      { top: -50, opacity: 0, ease: "power2.out", stagger: 0.5 },
      0.3
    ),
    gsap.from(
      btns,
      1,
      { top: -50, opacity: 0, ease: "power2.out", stagger: 0.5 },
      "-=1"
    ),
    gsap.from(
      logo,
      1,
      { right: -50, opacity: 0, ease: "power2.out", stagger: 0.5 },
      0.3
    ),
    gsap.from(l1, 1, { width: 0, ease: "power2.out", stagger: 0.5 }, "-=1"),
    gsap.from(l2, 1, { width: 0, ease: "power2.out", stagger: 0.5 }, "-=1"),
    gsap.to(logo, { duration: 1, rotate: 15, ease: "power2.out" }),
    0.3
  );

  ScrollTrigger.create({
    trigger: ".first",
    start: "top center",
    end: "bottom center",
    onEnter: () => tl.restart(), // Utilisez 'onEnter' et 'onEnterBack'
    onEnterBack: () => tl.restart(),
    id: "first",
  });

  let tl2 = gsap.timeline({ yoyo: true, repeat: -1 });

  tl2.add(
    gsap.fromTo(logo, { y: 0 }, { y: 15, duration: 3, ease: "power2.inOut" }),
    0.3
  );

  //scrolltrigger second section
  ScrollTrigger.create({
    trigger: ".second",
    start: "top bottom",
    end: "center center",
    markers: true,
    id: "second",
    scrub: 1,
    onEnter: () => {
      gsap.from(containerSecond, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
      gsap.from(containerRight, {
        x: 100,
        opacity: 0,
        duration: 1,
      });
    },
  });

  tl.play();
  tl2.play();
});
