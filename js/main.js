
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

// WOW ANIMATION
new WOW().init();

// remove wow class for projects section on mobile
$(window).resize(function(){
  if($(window).width()<500){
   $('.project').removeClass('.wow');
  }
 });




