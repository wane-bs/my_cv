(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing, adjusting for sticky header height (72px)
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 800, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav', // Fallback for Bootstrap native structure
    offset: 80
  });

  /* ==========================================================================
     Custom Portfolio Interactions (Tag Filtering & Accordions)
     ========================================================================== */

  $(document).ready(function() {
    // 1. Tag Filtering System
    $('.filter-badge').click(function() {
      var selectedTag = $(this).attr('data-target');
      
      // If clicked badge is already active, reset filters
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.filterable').removeClass('dimmed highlighted');
      } else {
        // Toggle active status among filters
        $('.filter-badge').removeClass('active');
        $(this).addClass('active');
        
        // Apply highlight and fade transitions
        $('.filterable').each(function() {
          var tagsString = $(this).attr('data-tags') || '';
          var tagsList = tagsString.split(',').map(function(item) {
            return item.trim();
          });
          
          if (tagsList.includes(selectedTag)) {
            $(this).addClass('highlighted').removeClass('dimmed');
          } else {
            $(this).addClass('dimmed').removeClass('highlighted');
          }
        });
      }
    });

    // 2. Progressive Disclosure Accordion Logic
    $('.accordion-toggle-btn').click(function() {
      var $btn = $(this);
      var $content = $btn.next('.accordion-details-content');
      
      $content.slideToggle(300, function() {
        if ($content.is(':visible')) {
          $btn.addClass('active');
          // Update text based on language of the document
          if ($('html').attr('lang') === 'vi') {
            $btn.html('[Thu gọn chi tiết kỹ thuật]');
          } else {
            $btn.html('[Hide technical details]');
          }
        } else {
          $btn.removeClass('active');
          if ($('html').attr('lang') === 'vi') {
            $btn.html('[Xem chi tiết kiến trúc & quy trình kỹ thuật]');
          } else {
            $btn.html('[View technical details & solutions]');
          }
        }
      });
    });
  });

})(jQuery); // End of use strict
