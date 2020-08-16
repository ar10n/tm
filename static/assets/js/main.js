(function($) {
    "use strict";

    /* Menu Sticky  */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('.sticky-header').addClass("sticky animated fadeInDown");
        } else {
            $('.sticky-header').removeClass("sticky animated fadeInDown");
        }
    });

    $(document).ready(function() {

        //Scroll It active
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 1300, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70, // offste (in px) for fixed top navigation
        });

        // Active isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        $('.portfolio-menu ul li').click(function() {
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: selector
            });
            return true;
        });

        // Collapse
        $(".service-faq").collapse('toggle');

        //company logo carousel
        $('.company-logo ul').owlCarousel({
            items: 5,
            autoplay: true,
            loop: true,
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });

        // ToolTip
        $('[data-toggle="tooltip"]').tooltip({
            animation: true,
            delay: {
                "show": 500,
                "hide": 100
            }
        });
            //Hero Slider
            $('#slider-active').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: true,
            smartSpeed:4000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            dots: false,
            mouseDrag: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });

        // Testimonial
        $('.testimonial-active').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            URLhashListener: true,
            autoplayHoverPause: false,
            startPosition: 'URLHash',
            autoplay: false,

        });

        // Blog Carusel
        $('.blog-carousel-active').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }

        });

        //Mobile mneu
        $('.main-menu').slicknav({
            prependTo: '#mobile-menu',
        });

        // Counterup
        $('.counter').countTo();

        //Video Popup
        $(".video-play-button").magnificPopup({
            type: 'iframe'
        });
    });

    $(window).on('load', function() {
        // =================
        //  Preloader
        //==================
        //
        $('body').addClass('preloader-active');
        $('.preloader').addClass('complete');
        $('.preloader-bg').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');

    });




})(jQuery);