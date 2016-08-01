$(document).ready(function(){

    /* Sticky Navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    /* Scroll Effect (on clicking buttons) */
    /*
       1. .animate({param}, speed, callback)
            param(required): defined the CSS properties to be animated
            speed(optional): 'slow', 'fast', or in ms
            callback(optional): function to be executed after the animation completes
       2. scrollTop() returns/sets vertical scrollbar position for the selected element
       3. offset() returns/sets offset coordinates for the selected element, relative to the document (i.e. return top, left positions in px)
    */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /* Navigation Scroll (Smooth Scrolling) */
    /* Code snippets from CSS-Tricks */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Scroll Animation (Animation on scroll) */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated tada');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation (Responsive) */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* Maps */
    var map = new GMaps({
      div: '.map',
      lat: 37.7679929,
      lng: -122.3237909,
      zoom: 12 /* Default: 15 */
    });

    map.addMarker({
      lat: 37.7867083,
      lng: -122.402094,
      title: 'Lima',
      infoWindow: {
          content: '<p>Our San Franciso HQ</p>'
      }
    });


});
