$(function (params) {

  var pageWidth = document.documentElement.scrollWidth;

  $(".menu__btn").click(function () {
    $('.menu__list').slideToggle(300);
    $('.menu__line').toggleClass('menu__line--active');
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 0) {
      $('.header__top').css('background-color', '#00b2a0');
      $('.header__top').css('padding', '5px 0px');
    }
    else
      if (!$('.menu__line').hasClass('menu__line--active')) {
        $('.header__top').css('padding-top', '35px');
        $('.header__top').css('background-color', 'transparent');
      }
  });

  $('.menu .menu__link, .logo').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: (top - 83) }, 1500);
  });

  $('.menu .menu__link').on('click', function (event) {
    if ($('.menu__line').hasClass('menu__line--active')) {
      $('.menu__line').removeClass('menu__line--active');
      $('.menu__list').slideToggle(300);
    }
  });

  $('.blog-slider').slick({
    dots: true,
    arrows: false
  });

  var Mixer = mixitup('.gallery__box');

});