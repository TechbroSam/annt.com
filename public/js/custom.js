$(document).ready(function(){
  $(".faq-row").on("click", ".faq-question", function() {

  $(this).toggleClass("active").next().slideToggle();

  $(".faq-answer").not($(this).next()).slideUp(300);
               
  $(this).siblings().removeClass("active");
  });
  $('.copy-btn').click(function(){
    $(this).addClass('active');

    setTimeout(function () { 
        $('.copy-btn').removeClass('active');
    }, 2000);
  });
  jQuery(".menu-btn").click(function(){
    jQuery(this).siblings(".menu").fadeToggle(); 
});

 });
 function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
 }