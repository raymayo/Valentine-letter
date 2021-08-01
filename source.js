//Lottie Files
let twitter = document.querySelector("#twitter");
let cloud = document.querySelector("#cloud");
let poem = document.querySelector("#poem");

//Animation Init
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

//Animations
var clickState1 = 0;
let con1 = document.getElementById("con1");
twitter.addEventListener("click", function () {

    gsap.to("#con1", { duration: 1.5, height: "110vh", ease: "expo.inOut" });
    gsap.to("#cloud", { duration: 1.5, y: "70vh", ease: "expo.inOut", delay:-0.03});
    gsap.to("#poem", {duration: 1.5, y: "40vh", ease: "expo.inOut", delay: -0.15,});
    gsap.to("#blueLetter", {duration:1, opacity:  "1" ,ease:"power4.out", delay:1});
    gsap.to("#twitter", {duration:1.3,opacity:0,cursor:"default", ease:"expo.out"});
    document.getElementById("yellowBtn").style.cursor = "pointer";
    document.getElementById("blueLetter").style.display = "flex"
    document.getElementById("yellowBtn").style.display = "flex";
    document.getElementById("twitter").style.pointerEvents = "none";
});

let yellowBtn = document.getElementById("yellowBtn");
yellowBtn.addEventListener("click", function(){

  con1.style.height = "110vh";
    clickState1 = 0;
    gsap.to("#con1", { duration: 2, height: "34vh", ease: "expo.inOut" });
    gsap.to("#cloud", { duration: 3, y: 0, ease: "expo.inOut", delay: -0.43 });
    gsap.to("#poem", { duration: 3, y: 0, ease: "expo.inOut", delay:-0.2});
    gsap.to("#blueLetter", {duration:1,  opacity:0, ease:"power4.out",});
    gsap.to("#blueLetter", {duration:1,  display:"none", ease:"power4.out",});
    gsap.to("#twitter", {duration:1.3,opacity:1,cursor: "pointer", ease:"expo.out", delay:1.3});
    document.getElementById("yellowBtn").style.cursor = "default";
    document.getElementById("yellowBtn").style.display = "none";
    document.getElementById("twitter").style.pointerEvents = "auto";
    
})


var clickState2 = 0;
let con2 = document.getElementById("con2");
cloud.addEventListener("click", function () {
  con2.style.height = "34vh";
    clickState2 = 1;
    gsap.to("#con1", { duration: 1.5, height: 0, ease: "expo.inOut" });
    gsap.to("#con2", { duration: 1.5, height: "110vh", ease: "expo.inOut" });
    gsap.to("#twitter", { duration: 2, y: "-30vh", ease: "expo.inOut",delay:-.5 });
    gsap.to("#poem", { duration: 2, y: "30vh", ease: "expo.inOut",delay:-.5 });
    gsap.to("#cloud", { duration: 2, opacity:0, ease: "expo.inOut", delay: -0.3 });
    gsap.to("#pinkLetter", {duration:1, opacity:"1" ,ease:"power4.out", delay:1})
    document.getElementById("greenBtn").style.cursor = "pointer";
    document.getElementById("pinkLetter").style.display = "flex"
    document.getElementById("greenBtn").style.display = "flex";
    document.getElementById("cloud").style.pointerEvents = "none";
});

let greenBtn = document.getElementById("greenBtn");
greenBtn.addEventListener("click", function(){
  con2.style.height = "110vh";
  clickState2 = 0;
  gsap.to("#con1", { duration: 1.5, height: "34vh", ease: "expo.inOut",});
  gsap.to("#con2", { duration: 1.5, height: "34vh", ease: "expo.inOut" });
  gsap.to("#twitter", {duration: 3, y: 0, ease: "expo.inOut",delay:-.28});
  gsap.to("#poem", { duration: 3, y: 0, ease: "expo.inOut", delay:-.28});
  gsap.to("#cloud", { duration: 2, opacity:1, ease: "expo.inOut", delay: .5 });
  gsap.to("#pinkLetter", {duration:1,  opacity:0, ease:"power4.out"});
  gsap.to("#pinkLetter", {duration:1,  display:"none", ease:"power4.out"});
  document.getElementById("greenBtn").style.cursor = "default";
  document.getElementById("greenBtn").style.display = "none";
  document.getElementById("cloud").style.pointerEvents = "auto";
});

var clickState3 = 0;
let con3 = document.getElementById("con3");
poem.addEventListener("click", function () {
    con2.style.height = "34vh";
    clickState3 = 1;
    gsap.to("#con1", { duration: 1.7, height: 0, ease: "expo.inOut",});
    gsap.to("#con2", { duration: 1.7, height: 0, ease: "expo.inOut",});
    gsap.to("#con3", { duration: 1.7, height: "100vh", ease: "expo.inOut",});
    gsap.to("#cloud", { duration: 1.7, y: "-60vh", ease: "expo.inOut", });
    gsap.to("#twitter", {duration: 1.7, y: "-35vh", ease: "expo.inOut",});
    gsap.to("#poem", {duration: 1.7, opacity:0, ease: "expo.inOut",});
    gsap.to("#yellowLetter", {duration:1, opacity:"1" ,ease:"power4.out", delay:1.3})
    document.getElementById("blueBtn").style.cursor = "pointer";
    document.getElementById("yellowLetter").style.display = "flex"
    document.getElementById("blueBtn").style.display = "flex";
    document.getElementById("poem").style.pointerEvents = "none";
    document.getElementById("cloud").style.pointerEvents = "none"

});

let blueBtn = document.getElementById("blueBtn");
blueBtn.addEventListener("click", function(){
con3.style.height = "110vh";
    clickState3 = 0;
    gsap.to("#con1", { duration: 1.7, height: "34vh", ease: "expo.inOut",});
    gsap.to("#con2", { duration: 1.7, height: "34vh", ease: "expo.inOut",});
    gsap.to("#cloud", { duration: 1.7, y: 0, ease: "expo.inOut",});
    gsap.to("#twitter", {duration: 1.7, y: 0, ease: "expo.inOut",});
    gsap.to("#poem", {duration: 1.7, opacity:1, ease: "expo.inOut",delay:.5});
    gsap.to("#con3", { duration: 1.7, height: "34vh", ease: "expo.inOut",});
    gsap.to("#yellowLetter", {duration:1,  opacity:0, ease:"power4.out"})
    gsap.to("#yellowLetter", {duration:1,  display:"none", ease:"power4.out"})
    document.getElementById("blueBtn").style.cursor = "default";
    document.getElementById("blueBtn").style.display = "none";
    document.getElementById("poem").style.pointerEvents = "auto";
    document.getElementById("cloud").style.pointerEvents = "auto"
})
