function listenOnHamburger() {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", showOrHideHamburger);
}

function showOrHideHamburger() {
    console.log("Pasó por aquí");
    const responsiveMenu = document.getElementById("responsive-menu");
    responsiveMenu.classList.toggle("open");
}

listenOnHamburger();
