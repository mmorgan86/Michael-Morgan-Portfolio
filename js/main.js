// HEADER TEXT FADE IN ON PAGE LOAD
$(document).ready(function() {
    $('#home-heading').fadeIn(2000);

  // SMOOTH SCROLL
  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});


