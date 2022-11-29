import '../styles/reset.scss';
import '../styles/style.scss';
import 'jquery/dist/jquery.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        autoplayHoverPause: true,

    });
});