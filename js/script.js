$(function () {

  //헤더 
  $('#headerWrap .mobileBtn').click(function () {
    $('#headerWrap .mobileMenuBox').animate({
      right: 0
    }, 500)
    $('#headerWrap .bg').fadeIn();
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#headerWrap .mobileMenuBox').animate({
      right: -3000
    }, 500)
    $('#headerWrap .bg').fadeOut();

  });

    $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });


  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

});
