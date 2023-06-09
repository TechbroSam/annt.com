$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: true
      }
    }
  })


    (function ($) {
      "use strict";

      // Spinner
      var spinner = function () {
        setTimeout(function () {
          if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
          }
        }, 1);
      };
      spinner();


      // Initiate the wowjs
      new WOW().init();


      // Sticky Navbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
          $('.navbar').addClass('sticky-top shadow-sm');
        } else {
          $('.navbar').removeClass('sticky-top shadow-sm');
        }
      });


      // Smooth scrolling on the navbar links
      $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 60
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.navbar-nav').length) {
            $('.navbar-nav .active').removeClass('active');
            $(this).closest('a').addClass('active');
          }
        }
      });


      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
      });


      // Facts counter
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });


      // Testimonials carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          992: {
            items: 2
          }
        }
      });

    })(jQuery);

  function copyToClipboard() {
    const str = document.getElementById('copy').innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }



  //--------------------------------------------------
  // COUNTDOWN
  //--------------------------------------------------

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    if (clock == null) {
      return;
    }
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date('2022-06-29T12:00:00-07:00');

  initializeClock('countdown', deadline);

});