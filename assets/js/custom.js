
$(document).ready(function(){
	$(".nav-menu-icn img").click(function(){
	  $(".nav-menu-wrap").addClass("show");
	});
	$(".nav-menu-wrap .close").click(function(){
	  $(".nav-menu-wrap").removeClass("show");
	});
});
$(document).on('ready', function() {
	$(".lazy").slick({
	   	dots: false,
	   	arrow: true,
	    lazyLoad: 'ondemand', // ondemand progressive anticipated
	    infinite: true
	});
});
$(document).on('ready', function() {
	$(".pro-slider").slick({
	   	  dots: false,
	   	  	arrow: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
	});
});