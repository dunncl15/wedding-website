
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

  if ($(this).width() < 821 && $(this).scrollTop() > 500) {
    $('.back-to-top').removeClass('hide');
  }

  if ($(this).width() < 821 && $(this).scrollTop() < 500) {
    $('.back-to-top').addClass('hide');
  }

  if ($(this).width() > 821) {
    $('.back-to-top').addClass('hide');
  }
});


const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  $(this).toggleClass('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
