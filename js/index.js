
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => { //NAV
        nav.classList.toggle('nav-active');

        //ANimate links--------THE DELAY BETWEN 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s  ease forwards ${index / 7 + 1}s`; //el delay en como se muestran las opciones li
            }
        });
        //burger aniation
        burger.classList.toggle('toggle');

    });

}
navSlide();