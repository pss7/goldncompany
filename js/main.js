
$(function () {

  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
    $('#visualWrap .box .imgBox').addClass('active');
    $('#visualWrap .box').addClass('active');
  });

  $('#visualWrap .slick').on('afterChange', function (slick, currentSlide, nextSlide) {
    $('#visualWrap .tit_text h2').fadeIn();
    $('#visualWrap .box .imgBox').addClass('active');
    $('#visualWrap .box').addClass('active');
  });
  $('#visualWrap .slick').on('beforeChange', function (slick, currentSlide, nextSlide) {
    $('#visualWrap .tit_text h2').fadeOut();
    $('#visualWrap .box .imgBox').removeClass('active');
    $('#visualWrap .box').removeClass('active');
  });

  $("#visualWrap .slick").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
  });

  function initMobileSlick() {
    if (window.innerWidth <= 767) {
      if (!$('#newsWrap .slick').hasClass('slick-initialized')) {
        $("#newsWrap .slick").slick({
          autoplay: true,
          arrows: false,
          dots: true,
          accessibility: false,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          zIndex: 1000,
          pauseOnHover: false,
          autoplaySpeed: 5000,
          speed: 1500,
        });
      }

      if (!$('#reviewWrap .slick').hasClass('slick-initialized')) {
        $("#reviewWrap .slick").slick({
          autoplay: true,
          arrows: false,
          dots: true,
          accessibility: false,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          zIndex: 1000,
          pauseOnHover: false,
          autoplaySpeed: 7000,
          speed: 1500,
        });
      }

      if (!$('#advantageWrap .slick').hasClass('slick-initialized')) {
        $("#advantageWrap .slick").slick({
          autoplay: true,
          arrows: false,
          dots: true,
          accessibility: false,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          zIndex: 1000,
          pauseOnHover: false,
          autoplaySpeed: 7000,
          speed: 1500,
        });
      }
    } else {
      $('#newsWrap .slick').filter('.slick-initialized').slick('unslick');
      $('#reviewWrap .slick').filter('.slick-initialized').slick('unslick');
      $('#advantageWrap .slick').filter('.slick-initialized').slick('unslick');
    }
  }

  $(document).ready(function () {
    initMobileSlick();
  });

  $(window).on('resize', function () {
    initMobileSlick();
  });

});
