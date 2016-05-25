jQuery(function($) {
    'use strict';

    //Responsive Nav
    $('li.dropdown').find('.fa-angle-down').each(function() {
        $(this).on('click', function() {
            if ($(window).width() < 768) {
                $(this).parent().next().slideToggle();
            }
            return false;
        });
    });

    //Initiat WOW JS
    new WOW().init();

    // Home filter
    $(window).load(function() {

        $('.main-slider').addClass('animate-in');
        $('.preloader').remove();
        //End Preloader

        if ($('.masonery_area').length) {
            $('.masonery_area').masonry(); //Masonry
        }

    });

    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function() {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        });
    });

    // Progress Bar
    $.each($('div.progress-bar'), function() {
        $(this).css('width', $(this).attr('data-transition') + '%');
    });

    $(document).ready(function() {

        // People Section
        if ($('#people').length > 0) {

            var $image = $('.content img');
            var $menu = $('.menu .rounded');

            var showImage = function(e) {
                e.preventDefault();

                var imageName = $(e.currentTarget).data("show-image");
                $image.hide();

                setTimeout(function() {
                    $(imageName).show();
                    $(imageName).trigger("unveil");
                }, 200);
            };

            $image.unveil();
            $image.hide();

            $menu.click(showImage);

            setTimeout(function() {
                $($image[0]).show();
                $($image[0]).trigger("unveil");
            }, 200);

        }

    });

});
