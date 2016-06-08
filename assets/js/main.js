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

    if ($('#label').length > 0) {

      $('button').on('click', function() {
        var $btn = $(this).button('loading');

        var drug_name = "";

        // business logic...
        if ($btn.attr('id') == "btnFind") {
          // find drug by keyword
          drug_name = $.trim($("#keyword").val());
        } else {
          // find drug by name
          drug_name = $btn.text();
        }

        if (drug_name == "") {
          $("#keyword").val("");
          $btn.button('reset');
          return;
        }

        var convertCR = function(text) {
          return text.replace(/\r\n/g, "<br>").replace(/\n/g, "<br>");
        };

        var callback = function(data) {

          $('#drug_name').text(data.drug_name);
          $('#term_of_use').text(data.term_of_use);
          $('#warning_label').text(data.warning_label);
          $('#remark').text(data.remark);
          $('#text_label').html(convertCR(data.text_label));

          $btn.button('reset');
        };

        $.post('/knowledges/label', { drug_name: drug_name })
          .done(callback)
          .fail(callback);

      });
    }

    // Result Section
    if ($('#results').length > 0) {

      $("#btnLogin").on('click', function(e) {
        e.preventDefault();

        var data = {
          username: $("#username").val(),
          password: $("#password").val()
        };

        var callback = function(result) {

          if (result.user) {
            window.location.href = "/results";
          } else {
            console.log('login failed !');
          }

        };

        $.post('/login', data)
          .done(callback);

      });

      $("#password").on('keydown', function(e) {
        if (e.keyCode == 13) {
          $("#btnLogin").click();
        }
      });

    }

  });

});
