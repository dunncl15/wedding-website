
$('.menu-btn, .close-menu-btn').on('click', function() {
  $('.main-nav').slideToggle();
});

$( window ).on('scroll', function(e) {
  if ($(this).width() > 821 && $(this).scrollTop() > 300) {
    $('.main-nav').css("display", "block");
    $('.main-nav').addClass('fixed');
    $('.menu a').css("color", "#e5dada");
    $('.home-icon').css("display", "flex");
  }

  if ($(this).width() > 821 && $(this).scrollTop() < 200) {
    $('.main-nav').css("display", "none");
    $('.menu a').css("color", "#838383");
    $('.home-icon').css("display", "flex");
  }
});
