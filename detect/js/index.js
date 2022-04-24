"use strict";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js"),then(() => {
        console.log("[Serviceworker**] - Registered");

    });
}
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    if (navbar.classname === "navbar") {
        navbar.classname += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

