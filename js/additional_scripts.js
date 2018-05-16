$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

	if( bodyWidth <= 768 ) {

		$(".main-nav_wrapp").mCustomScrollbar();

	} else {

		$(".main-nav_wrapp").mCustomScrollbar("destroy");

	}

});

$(window).resize(function() {

	if( bodyWidth <= 768 ) {

		$(".main-nav").mCustomScrollbar();

	} else {

		$(".main-nav").mCustomScrollbar("destroy");

	}

});

$(document).ready(function() {

	$(".slider1").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 680,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1
	          }
	        },
	        {
	          breakpoint: 400,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    });

		$(".testimonilas_sl").not(".slick-initialized").slick({
	        dots: true,
	        arrows: true,
	        autoplay: true,
	        autoplaySpeed: 5000,
	        speed: 1200,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true
	    });

});

