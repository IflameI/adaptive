  let iconMenu = document.querySelector(".icon-menu");
  let body = document.querySelector("body");
  let menuBody = document.querySelector(".header-list");
  if (iconMenu) {
    iconMenu.addEventListener("click", function () {
      iconMenu.classList.toggle("active");
      body.classList.toggle("lock");
      menuBody.classList.toggle("active");
    });
  }


$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },500);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});
AOS.init({
  duration: 600,
})

$( ".stone-bg-item-sililar-list-item" ).on( "click", function() {
  $(".modal").css("display","block").css("opacity", "1").css("z-index","1").css("top","50%");
});

$(document).ready(function(){
  $('.modal').slick();
});

$('.goto').click(function () {
  var el = $(this).attr('href').replace('#', '');
  var offset = 0;
  $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

  if ($('.header-list').hasClass('active')) {
    $('.header-list,.icon-menu').removeClass('active');
    $('body').removeClass('lock');
  }
  return false;
});