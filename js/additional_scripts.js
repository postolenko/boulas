$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});

	$(".slider1").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
       //  responsive: [
	      //   {
	      //     breakpoint: 1124,
	      //     settings: {
	      //       slidesToShow: 2,
	      //       slidesToScroll: 1,
	      //     }
	      //   },
	      //   {
	      //     breakpoint: 680,
	      //     settings: {
	      //       slidesToShow: 1,
	      //       slidesToScroll: 1
	      //     }
	      //   }
	      // ]
	    });

});

