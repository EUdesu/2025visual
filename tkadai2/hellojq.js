$(function(){
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: false
  
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
		
});

