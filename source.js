let twitter = document.querySelector("#twitter");
let cloud = document.querySelector("#cloud");
let poem = document.querySelector("#poem");

var twitterAnim = bodymovin.loadAnimation({
  container: twitter,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icons/twitter.json",
});

var cloudAnim = bodymovin.loadAnimation({
  container: cloud,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icons/cloud.json",
});

var poemAnim = bodymovin.loadAnimation({
  container: poem,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icons/poem.json",
});

// document.getElementById('twitter').addEventListener('click', function(){
// if (con1.style.height !== "100%"){
//     console.log(3);
// con1.style.height = "100vh";
// } else if (con1.stye.height >= "100%"){
//     console.log(1)
// }

// //     con1.style.height = "100vh";
// // con1.stlye.background = "#FFB646"

// })

var clickState1 = 0;
let con1 = document.getElementById("con1");
twitter.addEventListener("click", function () {
  if (clickState1 == 0) {
    con1.style.height = "34vh";
    clickState1 = 1;
    gsap.to("#con1", { duration: 1.5, height: "110vh", ease: "expo.inOut" });
    gsap.to("#cloud", { duration: 1.5, y: "70vh", ease: "expo.inOut", delay:-0.03});
    gsap.to("#poem", {duration: 1.5, y: "40vh", ease: "expo.inOut", delay: -0.15,});
    gsap.to("#blueLetter", {duration:1, opacity:"1" ,ease:"power4.out", delay:1})
  } else {
    con1.style.height = "110vh";
    clickState1 = 0;
    gsap.to("#con1", { duration: 2, height: "34vh", ease: "expo.inOut" });
    gsap.to("#cloud", { duration: 3, y: 0, ease: "expo.inOut", delay: -0.43 });
    gsap.to("#poem", { duration: 3, y: 0, ease: "expo.inOut", delay:-0.2});
    gsap.to("#blueLetter", {duration:1,  opacity:0, ease:"power4.out"})
  }
});

var clickState2 = 0;
let con2 = document.getElementById("con2");
cloud.addEventListener("click", function () {
  if (clickState2 == 0) {
    con2.style.height = "34vh";
    clickState2 = 1;
    gsap.to("#con1", { duration: 1.5, height: 0, ease: "expo.inOut" });
    gsap.to("#con2", { duration: 1.5, height: "110vh", ease: "expo.inOut" });
    gsap.to("#twitter", { duration: 1.2, y: "-30vh", ease: "expo.inOut", delay:-0.2});
    gsap.to("#poem", { duration: 1.2, y: "30vh", ease: "expo.inOut", delay:-0.2});
    gsap.to("#cloud", { duration: 2, y: "-35vh", ease: "expo.inOut", delay: -0.2 });
    gsap.to("#pinkLetter", {duration:1, opacity:"1" ,ease:"power4.out", delay:1})
  } else {
    con2.style.height = "110vh";
    clickState2 = 0;
    gsap.to("#con1", { duration: 1.5, height: "34vh", ease: "expo.inOut",});
    gsap.to("#con2", { duration: 1.5, height: "34vh", ease: "expo.inOut" });
    gsap.to("#twitter", {duration: 3, y: 0, ease: "expo.inOut",delay:-.28});
    gsap.to("#poem", { duration: 3, y: 0, ease: "expo.inOut", delay:-.28});
    gsap.to("#cloud", { duration: 2, y: 0, ease: "expo.inOut", delay: -0.26 });
    gsap.to("#pinkLetter", {duration:1,  opacity:0, ease:"power4.out"})
  }
});

var clickState3 = 0;
let con3 = document.getElementById("con3");
poem.addEventListener("click", function () {
  if (clickState3 == 0) {
    con2.style.height = "34vh";
    clickState3 = 1;
    gsap.to("#con1", { duration: 1.7, height: 0, ease: "expo.inOut",});
    gsap.to("#con2", { duration: 1.7, height: 0, ease: "expo.inOut",});
    gsap.to("#con3", { duration: 0.05, height: "100vh", ease: "none",});
    gsap.to("#cloud", { duration: 1.7, y: "-60vh", ease: "expo.inOut", });
    gsap.to("#twitter", {duration: 1.7, y: "-35vh", ease: "expo.inOut",});
    gsap.to("#poem", {duration: 1.7, y: "-71vh", ease: "expo.inOut",});
    gsap.to("#pinkLetter", {duration:1, opacity:"1" ,ease:"power4.out", delay:1.3})

    
  } else {
    con3.style.height = "110vh";
    clickState3 = 0;
    gsap.to("#con1", { duration: 1.7, height: "34vh", ease: "expo.inOut",});
    gsap.to("#con2", { duration: 1.7, height: "34vh", ease: "expo.inOut",});
    gsap.to("#cloud", { duration: 1.7, y: 0, ease: "expo.inOut",});
    gsap.to("#twitter", {duration: 1.7, y: 0, ease: "expo.inOut",});
    gsap.to("#poem", {duration: 1.7, y: 0, ease: "expo.inOut",});
    gsap.to("#pinkLetter", {duration:1,  opacity:0, ease:"power4.out"})
    
  }
});


