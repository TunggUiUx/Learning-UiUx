$(".slider-carousel").slick({
	dots: true,
	slide: "div",
	rows: 0,
	appendDots: $(".slick-dots"),
	appendArrows: $(".slider-nav"),
	prevArrow: $(".slider-nav .btn-prev"),
	nextArrow: $(".slider-nav .btn-next"),
	centerMode: true,
  slidesToShow: 3,
});