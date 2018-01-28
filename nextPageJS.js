//tutorial used for navigation bar to move as you scroll
//https://www.youtube.com/watch?v=soNObkJJJOc&t=973s

var  nav = document.getElementById('nav');

    if (window.pageYOffset >-1) {

        nav.style.background = "#adebeb";
        nav.style.opacity = ".45"
        nav.style.boxShadow = "0px 4px 2px transparent";
    }