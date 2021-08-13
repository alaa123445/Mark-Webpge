AOS.init();

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    580: {
        items: 2
    },
    830: {
        items: 2
    },

    960: {
        items: 3
    }
}



$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        // autoplay: true,
        // autoplayTimeOut: 1000,
        dots: false,
        nav: true,
        navText: [$(".nav-left"), $(".nav-right")],
        responsive: responsive



    });
});