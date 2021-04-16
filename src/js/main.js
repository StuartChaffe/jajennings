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

	$(".carousel-slider").slick({
		// settings: "unslick",
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		infinite: true,
		dots: true,
		adaptiveHeight: true,
		pauseOnHover: false,
		// centerMode: true,
		// centerPadding: "260px",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					// centerPadding: "160px",
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					// centerPadding: "60px",
				}
			}
		]
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
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
		  var number = $(this).find('.number').text();
		  return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
		  var name = $(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
	// bind filter on select change
	$('.filters-select').on( 'change', function() {
	// get filter value from option value
	var filterValue = this.value;
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
	});
	
  



	// Lightbox
	$('.modal').featherlightGallery({
		previousIcon: '&#9664;',
		nextIcon: '&#9654;',
		galleryFadeIn: 300,
		galleryFadeOut: 300
	});
	


	// The function actually applying the offset
function offsetAnchor() {
	if (location.hash.length !== 0) {
	  window.scrollTo(window.scrollX, window.scrollY - 200);
	}
  }
  
  // Captures click events of all a elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function() {
	  offsetAnchor();
	}, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
  
});


(function () {
	const elements = document.querySelectorAll('[data-image]');
  const images = document.getElementsByClassName('text-image__image');
	  
	if (elements.length === 0) {
		return false;
	}

	elements.forEach(element => {
	const target = document.querySelector(element.dataset.image);   
	const toggleClass = 'is-visible';

		element.addEventListener('mouseover', () => {
	  Array.from(images).forEach((el) => el.classList.remove(toggleClass));
	  target.classList.add(toggleClass);
		}, false);
	});
}());