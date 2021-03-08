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

});

// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
  
//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }
  
//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));