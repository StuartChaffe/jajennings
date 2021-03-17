/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  });\n  $(\".carousel-slider\").slick({\n    // settings: \"unslick\",\n    speed: 300,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    arrows: true,\n    infinite: true,\n    dots: true,\n    // centerMode: true,\n    // centerPadding: \"260px\",\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"160px\",\n\n      }\n    }, {\n      breakpoint: 640,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"60px\",\n\n      }\n    }]\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide(); // IMAGE LOAD WAY\n  // init Isotope\n  // var $grid = $('.gallery').isotope({\n  // \titemSelector: '.gallery-item',\n  // \tlayoutMode: 'masonry',\n  // });\n  // layout Isotope after each image loads\n  // $grid.imagesLoaded().progress( function() {\n  // \t$grid.isotope('layout');\n  // });\n\n  $('.gallery').isotope({\n    itemSelector: '.gallery-item',\n    layoutMode: 'masonry'\n  }); // init Isotope\n\n  var $grid = $('.gallery').isotope({// options\n  }); // filter items on button click\n\n  $('.gallery__buttons').on('click', 'button', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // Lightbox\n\n  $('.modal').featherlightGallery({\n    previousIcon: '&#9664;',\n    nextIcon: '&#9654;',\n    galleryFadeIn: 300,\n    galleryFadeOut: 300\n  }); // The function actually applying the offset\n\n  function offsetAnchor() {\n    if (location.hash.length !== 0) {\n      window.scrollTo(window.scrollX, window.scrollY - 100);\n    }\n  } // Captures click events of all a elements with href starting with #\n\n\n  $(document).on('click', 'a[href^=\"#\"]', function (event) {\n    // Click events are captured before hashchanges. Timeout\n    // causes offsetAnchor to be called after the page jump.\n    window.setTimeout(function () {\n      offsetAnchor();\n    }, 0);\n  }); // Set the offset when entering page with hash present in the url\n\n  window.setTimeout(offsetAnchor, 0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJzbGljayIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicmVtb3ZlQ2xhc3MiLCJzbGlkZVVwIiwibmV4dCIsImlzIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJoaWRlIiwiaXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCIkZ3JpZCIsIm9uIiwiZmlsdGVyVmFsdWUiLCJhdHRyIiwiZmlsdGVyIiwiZmVhdGhlcmxpZ2h0R2FsbGVyeSIsInByZXZpb3VzSWNvbiIsIm5leHRJY29uIiwiZ2FsbGVyeUZhZGVJbiIsImdhbGxlcnlGYWRlT3V0Iiwib2Zmc2V0QW5jaG9yIiwibG9jYXRpb24iLCJoYXNoIiwibGVuZ3RoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwic2Nyb2xsWSIsImV2ZW50Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFTQyxDQUFULEVBQVk7QUFDbEM7QUFDQSxNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQyx5QkFBRCxDQUFoQjtBQUNBLE1BQUlFLGNBQWMsR0FBR0YsQ0FBQyxDQUFDLDZCQUFELENBQXRCO0FBQ0FDLFVBQVEsQ0FBQ0UsS0FBVCxDQUFlLFlBQVc7QUFDekJILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksV0FBUixDQUFvQixXQUFwQjtBQUNBSixLQUFDLENBQUMsTUFBRCxDQUFELENB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QWlCLEdBQWpEO0FBQ0Q7QUFDQyxHQXRHZ0MsQ0F3R2pDOzs7QUFDQTVDLEdBQUMsQ0FBQ0YsUUFBRCxDQUFELENBQVk4QixFQUFaLENBQWUsT0FBZixFQUF3QixjQUF4QixFQUF3QyxVQUFTaUIsS0FBVCxFQUFnQjtBQUN6RDtBQUNBO0FBQ0FKLFVBQU0sQ0FBQ0ssVUFBUCxDQUFrQixZQUFXO0FBQzNCVCxrQkFBWTtBQUNiLEtBRkQsRUFFRyxDQUZIO0FBR0UsR0FORCxFQXpHaUMsQ0FpSGpDOztBQUNBSSxRQUFNLENBQUNLLFVBQVAsQ0FBa0JULFlBQWxCLEVBQWdDLENBQWhDO0FBRUQsQ0FwSEQiLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQvLyBQcmltYXJ5IG5hdlxuXHR2YXIgJG1lbnVCdG4gPSAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdi1idG5cIik7XG5cdHZhciAkbWVudUNvbnRhaW5lciA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdCRtZW51QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcblx0XHQvLyAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdlwiKS50b2dnbGVDbGFzcyhcImdsb2JhbC1oZWFkZXItLW5hdl9fbW9iaWxlXCIpO1xuXHRcdCRtZW51Q29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuXHR9KTtcblxuXHQkKFwiLmNhcm91c2VsLXNsaWRlclwiKS5zbGljayh7XG5cdFx0Ly8gc2V0dGluZ3M6IFwidW5zbGlja1wiLFxuXHRcdHNwZWVkOiAzMDAsXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG5cdFx0YXJyb3dzOiB0cnVlLFxuXHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0Ly8gY2VudGVyTW9kZTogdHJ1ZSxcblx0XHQvLyBjZW50ZXJQYWRkaW5nOiBcIjI2MHB4XCIsXG5cdFx0cmVzcG9uc2l2ZTogW1xuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiAxMDI0LFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdFx0XHQvLyBjZW50ZXJQYWRkaW5nOiBcIjE2MHB4XCIsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDY0MCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRcdFx0Ly8gY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrUG9zaXRpb24pO1xuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcblxuXHQvLyBpbml0KCk7XG5cdC8vIGNoZWNrUG9zaXRpb24oKTtcblxuXHQvLyBGQVFcblx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVVcCgnbm9ybWFsJyk7XG5cdFx0aWYoJCh0aGlzKS5uZXh0KCkuaXMoJzpoaWRkZW4nKSA9PSB0cnVlKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQodGhpcykubmV4dCgpLnNsaWRlRG93bignbm9ybWFsJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fY29udGVudCcpLmhpZGUoKTtcblxuXHQvLyBJTUFHRSBMT0FEIFdBWVxuXHQvLyBpbml0IElzb3RvcGVcblx0Ly8gdmFyICRncmlkID0gJCgnLmdhbGxlcnknKS5pc290b3BlKHtcblx0Ly8gXHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeS1pdGVtJyxcblx0Ly8gXHRsYXlvdXRNb2RlOiAnbWFzb25yeScsXG5cdC8vIH0pO1xuXHQvLyBsYXlvdXQgSXNvdG9wZSBhZnRlciBlYWNoIGltYWdlIGxvYWRzXG5cdC8vICRncmlkLmltYWdlc0xvYWRlZCgpLnByb2dyZXNzKCBmdW5jdGlvbigpIHtcblx0Ly8gXHQkZ3JpZC5pc290b3BlKCdsYXlvdXQnKTtcblx0XHRcblx0Ly8gfSk7XG5cblxuXHQkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5LWl0ZW0nLFxuXHRcdGxheW91dE1vZGU6ICdtYXNvbnJ5Jyxcblx0XHRcblx0IH0pO1xuXG5cdC8vIGluaXQgSXNvdG9wZVxuXHR2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdC8vIG9wdGlvbnNcblx0fSk7XG5cdC8vIGZpbHRlciBpdGVtcyBvbiBidXR0b24gY2xpY2tcblx0JCgnLmdhbGxlcnlfX2J1dHRvbnMnKS5vbiggJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWx0ZXJWYWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcblx0XHQkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcblx0fSk7XG5cblx0Ly8gTGlnaHRib3hcblx0JCgnLm1vZGFsJykuZmVhdGhlcmxpZ2h0R2FsbGVyeSh7XG5cdFx0cHJldmlvdXNJY29uOiAnJiM5NjY0OycsXG5cdFx0bmV4dEljb246ICcmIzk2NTQ7Jyxcblx0XHRnYWxsZXJ5RmFkZUluOiAzMDAsXG5cdFx0Z2FsbGVyeUZhZGVPdXQ6IDMwMFxuXHR9KTtcblxuXG5cdC8vIFRoZSBmdW5jdGlvbiBhY3R1YWxseSBhcHBseWluZyB0aGUgb2Zmc2V0XG5mdW5jdGlvbiBvZmZzZXRBbmNob3IoKSB7XG5cdGlmIChsb2NhdGlvbi5oYXNoLmxlbmd0aCAhPT0gMCkge1xuXHQgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkgLSAxMDApO1xuXHR9XG4gIH1cbiAgXG4gIC8vIENhcHR1cmVzIGNsaWNrIGV2ZW50cyBvZiBhbGwgYSBlbGVtZW50cyB3aXRoIGhyZWYgc3RhcnRpbmcgd2l0aCAjXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIENsaWNrIGV2ZW50cyBhcmUgY2FwdHVyZWQgYmVmb3JlIGhhc2hjaGFuZ2VzLiBUaW1lb3V0XG5cdC8vIGNhdXNlcyBvZmZzZXRBbmNob3IgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBwYWdlIGp1bXAuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQgIG9mZnNldEFuY2hvcigpO1xuXHR9LCAwKTtcbiAgfSk7XG4gIFxuICAvLyBTZXQgdGhlIG9mZnNldCB3aGVuIGVudGVyaW5nIHBhZ2Ugd2l0aCBoYXNoIHByZXNlbnQgaW4gdGhlIHVybFxuICB3aW5kb3cuc2V0VGltZW91dChvZmZzZXRBbmNob3IsIDApO1xuICBcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/sass/editor-style.scss":
/*!************************************!*\
  !*** ./src/sass/editor-style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9lZGl0b3Itc3R5bGUuc2Nzcz8xODU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL3Nhc3MvZWRpdG9yLXN0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/editor-style.scss\n");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMuc2Nzcz8zZjMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL3Nhc3Mvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/styles.scss\n");

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./src/js/main.js ./src/sass/styles.scss ./src/sass/editor-style.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/stuartchaffe/Sites/jajennings/wp-content/themes/ja-jennings/src/js/main.js */"./src/js/main.js");
__webpack_require__(/*! /Users/stuartchaffe/Sites/jajennings/wp-content/themes/ja-jennings/src/sass/styles.scss */"./src/sass/styles.scss");
module.exports = __webpack_require__(/*! /Users/stuartchaffe/Sites/jajennings/wp-content/themes/ja-jennings/src/sass/editor-style.scss */"./src/sass/editor-style.scss");


/***/ })

/******/ });