$(function () {

  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
    $('.subTitleBox .subVisualBox').addClass('active');
  });

  $('.companyIntroduceListBox .textView').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).prev('.textBox').hide();
      $(this).parents('.box').removeClass('active');
    } else {
      $('.companyIntroduceListBox .textView').removeClass('active');
      $('.companyIntroduceListBox .textBox').hide();
      $('.companyIntroduceListBox .box').removeClass('active');
      $(this).addClass('active');
      $(this).prev('.textBox').show();
      $(this).parents('.box').addClass('active');
    }

    return false;

  });

});
