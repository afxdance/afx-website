(function($){
  $(function(){
    var window_width = $(window).width();
    
    // Plugin initialization
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      onCycleTo: function(item, dragged) {

      }
    });
    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
      accordion: false
    });

    $('.dropdown-trigger').dropdown();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('input.autocomplete').autocomplete({
      data: {'Apple': null, 'Microsoft': null, 'Google': 'http://placehold.it/250x250'},
    });
    $('input[data-length], textarea[data-length]').characterCounter();

    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
      $('#tabs-swipe-demo').tabs({ 'swipeable': true });
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
