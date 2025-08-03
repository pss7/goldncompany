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

  $('.visionBox .coreValuesList_0602 > li a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $('.visionBox .coreValuesTextBox_0604').slideUp();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
    } else {
      $('.visionBox .coreValuesTextBox_0604').hide();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().find('.coreValuesTextBox_0604').slideDown();
    }

    return false;


  });


});
