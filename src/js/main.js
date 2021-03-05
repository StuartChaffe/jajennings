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

});