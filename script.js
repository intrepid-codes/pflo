function show() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
show();
function nav() {
  var x = document.querySelector("#icon");
  var y = 1;
  x.addEventListener("click", function(){
    if (y == 1) {
      document.querySelector("#nav-links").style.left = "0";
      x.style.transform = "rotate(180deg)";
      y = 0;
    }else{
      document.querySelector("#nav-links").style.left = "100%";
      x.style.transform = "rotate(0deg)";
      y = 1;
    }
  });
}
nav();
Shery.mouseFollower();
var tl = gsap.timeline();
document.querySelector("#portfolio").innerHTML = document.querySelector("#portfolio").textContent.split('').map(char => `<span>${char}</span>`).join('');
tl.from("#portfolio>span", {
  y: 10,
  opacity: 0,
  stagger: .1,
  duration: .6
});
tl.to("#loader",{
  opacity:0
});
tl.to("#loader",{
  display: "none"
});
document.querySelectorAll("#cAnimate").forEach(em => {
  em.addEventListener("mousemove", function() {
    gsap.to(".mousefollower", {
      scale: 3
    });
  });
  em.addEventListener("mouseleave", function() {
    gsap.to(".mousefollower", {
      scale: 1
    });
  });
});
document.querySelector("#portfolioContent>img").addEventListener("mousemove", function(){
  gsap.to(".mousefollower", {
    scale: 4
    });
});
document.querySelector("#portfolioContent>img").addEventListener("mouseleave", function(){
  gsap.to(".mousefollower", {
    scale: 1
    });
});
document.querySelectorAll(".pText>h1").forEach(elem => {
  elem.addEventListener("mousemove", function(dets) {
  gsap.to(".mousefollower", {
    scale: 4
  });
});
elem.addEventListener("mouseleave", function(dets) {
  gsap.to(".mousefollower", {
    scale: 1
  });
});
});
gsap.from(".pText>h1>div>span", {
  rotate: "20deg",
  y:100,
  duration: 1,
  stagger:.1,
  rotate: '30deg',
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "20% bottom",
    end: "bottom top"
  }
});
document.querySelectorAll(".pText2>h1").forEach(elem => {
  elem.addEventListener("mousemove", function(dets) {
  gsap.to(".mousefollower", {
    scale: 4
  });
});
elem.addEventListener("mouseleave", function(dets) {
  gsap.to(".mousefollower", {
    scale: 1
  });
});
});
gsap.from(".pText2>h1>div>span", {
  rotate: "20deg",
  y:100,
  duration: 1,
  stagger:.1,
  rotate: '30deg',
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "20% bottom",
    end: "bottom top"
  },
});
document.querySelectorAll(".pText3>h1").forEach(elem => {
  elem.addEventListener("mousemove", function(dets) {
  gsap.to(".mousefollower", {
    scale: 4
  });
});
elem.addEventListener("mouseleave", function(dets) {
  gsap.to(".mousefollower", {
    scale: 1
  });
});
});
gsap.from(".pText3>h1>div>span", {
  rotate: "20deg",
  y:100,
  duration: 1,
  stagger:.1,
  rotate: '30deg',
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "40% bottom",
    end: "bottom top"
  },
});
document.querySelectorAll(".pText4>h1").forEach(elem => {
  elem.addEventListener("mousemove", function(dets) {
  gsap.to(".mousefollower", {
    scale: 4
  });
});
elem.addEventListener("mouseleave", function(dets) {
  gsap.to(".mousefollower", {
    scale: 1
  });
});
});
gsap.from(".pText4>h1>div>span", {
  rotate: "20deg",
  y:100,
  duration: 1,
  stagger:.1,
  rotate: '30deg',
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "40% bottom",
    end: "bottom top"
  },
});
document.querySelectorAll("#imgContainer>img").forEach(est => {
  est.addEventListener("mousemove", function() {
    gsap.to(".mousefollower",{
      scale:4
    });
  });
  est.addEventListener("mouseleave", function() {
    gsap.to(".mousefollower",{
      scale:1
    });
  });
});
gsap.to("#textAnimation div span:nth-child(2)", {
  width: "200%",
  scrollTrigger : {
    trigger: "#page5",
    scroller: "#main",
    start: "top 70%",
    end: "bottom top",
    scrub: true
  }
});