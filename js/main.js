// (function($, undefined) {
    
// })(jQwery);

$(document).ready(function() {

	//Плавная прокрутка к определённой секции по клику на меню навигации
	$('.menu__list').on('click', '.menu__link', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);
		
		$('.menu__link.active').removeClass('active');
	  $(this).addClass('active');
	});
	// Конец Плавная прокрутка



	$('.slide-about-us img').hide();
});

// Функция для подсветки активного пункта меню при прорутке
function onScroll(){
	var scroll_top = $(window).scrollTop();
	
	$(".menu__link").each(function(){
		var link = $(this).attr("href");
		var target = $(link);

		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(".menu__link").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}


$(window).scroll(function() {
	onScroll ();


	var distAbout = $('#about_us').offset().top;
	if ($(window).scrollTop() >= distAbout) {
		$('.header').css('background', 'rgba(255,255,255,0.7)');
		$('.slide-about-us img').slideDown(1000);
	} else {
		$('.header').css('background', 'transparent');
		$('.slide-about-us img').hide();	
		}
});




