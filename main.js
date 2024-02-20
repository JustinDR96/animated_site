import "./style.scss";

const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");

window.addEventListener("load", () => {
  let tl = gsap.timeline({ paused: true });
  let tl2 = gsap.timeline({ yoyo: true, repeat: -1 });

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
    gsap.to(logo, { duration: 1, scale: 1.1, rotate: 15, ease: "power2.out" }),
    0.3
  );

  tl2.add(
    gsap.fromTo(logo, { y: 0 }, { y: 15, duration: 3, ease: "power2.inOut" }),
    0.3
  );

  tl.play();
  tl2.play();
});
