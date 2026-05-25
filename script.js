// Script for navigation bar

var navBar = document.getElementById("navbar");
var menuBtn = document.getElementById("bar");
var closeBtn = document.getElementById("close");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navBar.classList.add("active");
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function () {
        navBar.classList.remove("active");
    });
}
