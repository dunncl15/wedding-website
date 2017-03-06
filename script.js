
$('.menu-btn, .close-menu-btn').on('click', function() {
  $('.main-nav').slideToggle();
});

$( window ).on('scroll', function(e) {
  if ($(this).width() > 750 && $(this).scrollTop() > 400) {
    $('.main-nav').addClass('fixed');
    $('.menu a').css("color", "#e5dada");
  }

  if ($(this).scrollTop() < 200) {
    $('.main-nav').removeClass('fixed');
    $('.menu a').css("color", "#838383");
  }

});
