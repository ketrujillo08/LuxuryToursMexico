function initGalleryAngular() {
    (function($) {

        /*  [ Init Function ]
	- - - - - - - - - - - - - - - - - - - */
        $(document).ready(function() {

            /* Filter
            ------------------------------------ */
            $('#cd-dropdown').dropdown({
                gutter: 5,
                stack: false,
                delay: 100,
                slidingIn: 100
            });

            /* Style hover 2
            ------------------------------------ */
            $(' .mask-hover-2 article ').each(function() {
                $(this).hoverdir({
                    hoverDelay: 75
                });
            });

            /* Popup
        ------------------------------------ */
            if ($().magnificPopup) {
                /* general */
                $('.k2t-popup-link').magnificPopup({
                    type: 'image',
                }); // magnificPopup

                $('.k2t-video-popup-link').magnificPopup({
                    type: 'iframe',
                }); // magnificPopup

                $('.k2t-audio-popup-link').magnificPopup({
                    type: 'inline',
                    midClick: true
                }); // magnificPopup

                /* gallery */
                $('.k2t-popup-gallery').magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });

            }; // if magnificPopup exists

            if ($().masonry && $().isotope && $().imagesLoaded) {

                $('.k2t-isotope-wrapper').each(function() {

                    var $this = $(this);
                    var $container = $this.find('.k2t-isotope-container');

                    // initialize Isotope + Masonry after all images have loaded  
                    $this.imagesLoaded(function() {

                        $container.addClass('loaded').find('.isotope-selector').find('.article-inner');
                        var isotope_args = {
                            itemSelector: '.isotope-selector',
                            transitionDuration: '.55s',
                            masonry: {
                                gutter: '.gutter-sizer',
                                //columnWidth: 
                            },
                        };
                        if ($this.hasClass('isotope-grid')) {
                            isotope_args['layoutMode'] = 'fitRows';
                        }
                        if ($this.hasClass('isotope-no-padding')) {
                            delete isotope_args.masonry.gutter; //true
                        }
                        if ($this.hasClass('isotope-free')) {
                            isotope_args.masonry['columnWidth'] = '.width-1';
                        }
                        var $grid = $container.isotope(isotope_args);

                        // animation
                        var animation = $grid.data('animation');
                        if (animation = true) {
                            $container.find('.isotope-selector').find('.article-inner').each(function() {
                                var $this = $(this);
                                $this.parent().one('inview', function(event, isInView, visiblePartX, visiblePartY) {
                                    if (isInView) {
                                        $this.addClass('run_animation');
                                    } // inview						  
                                }); // bind
                            }); // each

                        } // endif animation

                        // filter items when filter link is clicked
                        $this.find('.cd-dropdown').find('span').on('click', function() {
                            if ($(this).parent().parent().parent().hasClass('cd-active')) {
                                var selector = $(this).attr('class');
                                $container.isotope({
                                    filter: selector,
                                });
                            }
                        });


                        $this.find('.filter-list').find('li').eq(0).addClass('active');
                        $this.find('.filter-list').find('li').on('click', function() {
                            if (jQuery(this).hasClass('active')) {
                                return false;
                            }
                            var selector = $(this).attr('class');
                            $container.isotope({
                                filter: selector,
                            });
                            $(this).parent().find('li').removeClass('active');
                            $(this).addClass('active')
                        });

                    }); // imagesLoaded

                }); // each .k2t-isotope-wrapper
            } // if isotope

        }); // ready

    })(jQuery);

}

function initGalleryTour() {
    jQuery(function() {
        var sync1 = jQuery(".k2t-thumb-gallery");
        var sync2 = jQuery("#inavigation");
        sync1.owlCarousel({
            navigationText: [
                "<i class='k2t k2t-arrow-prev'></i>",
                "<i class='k2t k2t-arrow-next'></i>"
            ],
            items: 1,
            autoPlay: 3000,
            singleItem: true,
            slideSpeed: 1000,
            navigation: true,
            pagination: true,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        sync2.owlCarousel({
            loop: true,
            items: 6,
            autoPlay: 3000,
            margin: 10,
            itemsDesktop: [1000, 6],
            itemsDesktopSmall: [900, 6],
            itemsTablet: [600, 6],
            itemsMobile: [480, 6],
            center: true,
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            jQuery("#inavigation")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
            if (jQuery("#inavigation").data("owlCarousel") !== undefined) {
                center(current)
            }
        }

        jQuery("#inavigation").on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });

        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }

            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1)
            }
        }


    });

}