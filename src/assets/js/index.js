import '../styles/reset.scss';
import '../styles/style.scss';
import 'jquery/dist/jquery.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const mobileMenuBtn = document.querySelector('.mobile__menu-btn');
const mobileMenu = document.querySelector('.mobile');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: true,
                margin: 20,
            },
            1001: {
                items: 2,
                margin: 20,
                center: false
            },
            1200: {
                items: 3,
                margin: 40,
                center: false,
            },
            1400: {
                items: 3,
                margin: 40,
                center: false
            },
            1600: {
                items: 4,
                margin: 40,
                center: false
            }
        }
    });
});