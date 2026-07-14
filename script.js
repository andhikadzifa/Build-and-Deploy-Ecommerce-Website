// Script for navigation bar

var navBar = document.getElementById("navbar");
var menuBtn = document.getElementById("bar");
var closeBtn = document.getElementById("close");

// Make entire product card clickable
document.querySelectorAll(".pro").forEach(function (card) {
    card.addEventListener("click", function (e) {
        // If the user clicked the cart link itself, let it handle normally
        if (e.target.closest("a")) return;
        var link = card.querySelector("a");
        if (link) window.location.href = link.getAttribute("href");
    });
});

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
