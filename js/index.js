$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).on('click', 'a', function(event){

    var href = $.attr(this, 'href');

    if (href.charAt(0) == "#") {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    }
});
