var menuBtn = document.querySelector(".click")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var pullNav = document.querySelector("#main nav ul")
menuBtn.addEventListener("click", function(){
    if (menuBtn.className == "click") {
        line1.style.transform = "rotate(45deg)"
        line2.style.transform = "rotate(-45deg)"
        menuBtn.style.gap = "0rem"
        pullNav.style.left = "0"
        menuBtn.className = "click clicked"
    } else {
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "rotate(0deg)"
        pullNav.style.left = "100%"
        menuBtn.style.gap = "1rem"
        menuBtn.className = "click"
    }
})