/*
/*	Copyright (c) 2019 Aeonsite
/*	Author: Rudrax
*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {


   	/*  Back To Top
     * ----------------------------------------------------------------------------------------
     */

       	var btn = $('.back_to_top');

        	$(window).scroll(function() {
        	  if ($(window).scrollTop() > 300) {
        	    btn.addClass('show');
        	  } else {
        	    btn.removeClass('show');
        	  }
        	});

        	btn.on('click', function(e) {
        	  e.preventDefault();
        	  $('html, body').animate({scrollTop:0}, '300');
        	});

    /*  SMOOTH SCROLLING
     * ----------------------------------------------------------------------------------------
     */

        $('a.smooth-scrolling').on("click", function (e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 50
                }, 1000);
                e.preventDefault();
            });


    /*  HEAD MENU
     * ----------------------------------------------------------------------------------------
     */

        $(window).on('scroll', function () {
                if ($(window).scrollTop() > 200) {
                    $('.nav_wrapper').addClass('nav_menu');
                } else {
                    $('.nav_wrapper').removeClass('nav_menu');
                }
            });


    /*  HAMBURGER MENU
     * ----------------------------------------------------------------------------------------
     */

        $( "#hamburger_button" ).click(function() {
        $( ".mobile_menu_list" ).slideToggle();

        
      });

    /*  PROGRESS BAR
     * ----------------------------------------------------------------------------------------
     */ 
        $(".progress_bar > .animate_bar").each(function() {
        $(this)
        .data("origWidth", $(this).width())
        .width(0)
        });

        $('#skills').waypoint(function(direction) {
                ProgressBar();
                this.destroy();      
        }, { offset: '20%' });

        function ProgressBar(){
            $(".progress_bar > .animate_bar").each(function() {
            $(this)
              .animate({
                width: $(this).data("origWidth")
              }, 1200);
          });
          }

    /*  WOW INIT
     * ----------------------------------------------------------------------------------------
     */ 
        new WOW().init();

    /*  TYPING EFFECT
     * ----------------------------------------------------------------------------------------
     */ 

        var typed = new Typed('.title_words', {
            strings: ["Web Developer.", "Designer.", "Photographer."],
            stringsElement: null,
            loop: true,
            loopCount: false,
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 900,
            smartBackspace: true
        });


    });
  
    $(window).resize(function() {
            if ($(window).width() > 1050) {
                $('.mobile_menu_list').hide();
            }
        });

})(jQuery);