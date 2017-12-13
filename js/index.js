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

function goToGithub() {
    window.location = "https://github.com/eforkin";
}

function goToLinkedin() {
    window.location = "https://www.linkedin.com/in/erik-forkin-33464ba3";
}

function goToEmail() {
    window.location = "mailto:eforkin@umich.edu";
}
