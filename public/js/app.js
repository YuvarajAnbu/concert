const landingImg = document.querySelector(".landing img");
const landingH1 = document.querySelector(".landing h1");
const landingBtn = document.querySelector(".landing button");

const info1Img = document.querySelector(".info1 img");
const info1Content = document.querySelector(".info1 .info__content");

const info2Img = document.querySelector(".info2 img");
const info2Content = document.querySelector(".info2 .info__content");

const joinImg = document.querySelector(".join img");
const joinContent = document.querySelector(".join .join__content");

const subscribeH2 = document.querySelector(".subscribe h2");
const subscribeForm = document.querySelector(".subscribe form");

window.onload = (event) => {
  document.body.classList.remove("hidden");
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      defaults: { duration: 0.8, opacity: 0, y: 50 },
      scrollTrigger: {
        trigger: ".landing",
      },
    })
    .addLabel("start")
    .from(landingH1, {})
    .from(landingBtn, {}, 0.5);

  gsap
    .timeline({
      defaults: { duration: 0.8, opacity: 0 },
      scrollTrigger: {
        trigger: ".info1",
      },
    })
    .addLabel("start")
    .from(info1Img, { x: -100 })
    .from(info1Content, { x: 100 }, 0);

  gsap
    .timeline({
      defaults: { duration: 0.8, opacity: 0 },
      scrollTrigger: {
        trigger: ".info2",
      },
    })
    .addLabel("start")
    .from(info2Img, { x: 100 })
    .from(info2Content, { x: -100 }, 0);

  gsap
    .timeline({
      defaults: { duration: 0.8, opacity: 0 },
      scrollTrigger: {
        trigger: ".join",
      },
    })
    .addLabel("start")
    .from(joinImg, { x: -100 })
    .from(joinContent, { x: 100 }, 0);

  gsap
    .timeline({
      defaults: { duration: 0.8, opacity: 0, y: 50 },
      scrollTrigger: {
        trigger: ".subscribe",
      },
    })
    .addLabel("start")
    .from(subscribeH2, {})
    .from(subscribeForm, {}, 0.2);
};
