$(document).ready(function() {
      $('ul#planet-names li').hover(
        function() { 
          $(this).toggleClass('active-list-item');
          $('li#orbit-' + $(this).attr('id')).toggleClass('active-orbit');
          console.log($('li#orbit-' + $(this).attr('id')));
        }
        ) 
    });