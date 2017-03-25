function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "icon-bar") {
        x.className += " responsive";
    } else {
        x.className = "icon-bar";
    }
}

function animateBars(x) {
    x.classList.toggle("change");
}
