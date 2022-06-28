const profile = document.querySelector("#profile");
const heading1 = document.querySelector("#h1");
const heading2 = document.querySelector("#h2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

gsap.fromTo(heading1, { x: 1500 }, { x: 0, duration: 1.5, ease: "power3.out" });
gsap.fromTo(
  heading2,
  { y: -1500 },
  { y: 0, duration: 2.2, ease: "power2.out" }
);

gsap.fromTo(profile, { x: -1500 }, { x: 0, duration: 2.2 });

gsap.fromTo(btn1, { x: -1500 }, { x: 0, duration: 2 });
gsap.fromTo(btn2, { x: 1500 }, { x: 0, duration: 2 });


AOS.init();


