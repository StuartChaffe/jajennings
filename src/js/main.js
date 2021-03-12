jQuery(document).ready(function($) {
	// Primary nav
	var $menuBtn = $(".global-header--nav-btn");
	var $menuContainer = $(".global-header--nav__mobile");
	$menuBtn.click(function() {
		$(this).toggleClass("is-active");
		$("body").toggleClass("menu-active");
		// $(".global-header--nav").toggleClass("global-header--nav__mobile");
		$menuContainer.toggleClass("is-active");
	});

	// window.addEventListener("scroll", checkPosition);
	// window.addEventListener("resize", init);

	// init();
	// checkPosition();

	// FAQ
	$('.accordion .accordion__title').click(function() {
		$('.accordion .accordion__title').removeClass('active');
		$('.accordion .accordion__content').slideUp('normal');
		if($(this).next().is(':hidden') == true) {
			$(this).addClass('active');
			$(this).next().slideDown('normal');
		}
		return false;
	});
	$('.accordion .accordion__content').hide();

	// IMAGE LOAD WAY
	// init Isotope
	// var $grid = $('.gallery').isotope({
	// 	itemSelector: '.gallery-item',
	// 	layoutMode: 'masonry',
	// });
	// layout Isotope after each image loads
	// $grid.imagesLoaded().progress( function() {
	// 	$grid.isotope('layout');
		
	// });


	$('.gallery').isotope({
		itemSelector: '.gallery-item',
		layoutMode: 'masonry',
		
	 });

	// init Isotope
	var $grid = $('.gallery').isotope({
		// options
	});
	// filter items on button click
	$('.gallery__buttons').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	// Lightbox
	$('.modal').featherlightGallery({
		previousIcon: '&#9664;',
		nextIcon: '&#9654;',
		galleryFadeIn: 300,
		galleryFadeOut: 300
	});
});
