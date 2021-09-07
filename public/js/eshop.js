; (function ($) {
    $(document).ready(function () {
        $("#slider").owlCarousel({
            autoplay: true,
            rewind: true,
            items: 1,
            /* margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn', */
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: false,
            dots: true,
        });

        $("#products-carousel").owlCarousel({
            autoplay: false,
            items: 1,
            margin: 20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 300,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 1
                },

                1024: {
                    items: 3
                },

                1280: {
                    items: 3
                }
            }
        });
    });
})(jQuery);
