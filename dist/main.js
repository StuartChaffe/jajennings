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

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  });\n  $(\".carousel-slider\").slick({\n    // settings: \"unslick\",\n    speed: 300,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    arrows: true,\n    infinite: true,\n    dots: true,\n    adaptiveHeight: true,\n    pauseOnHover: false,\n    // centerMode: true,\n    // centerPadding: \"260px\",\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"160px\",\n\n      }\n    }, {\n      breakpoint: 640,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"60px\",\n\n      }\n    }]\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide(); // IMAGE LOAD WAY\n  // init Isotope\n  // var $grid = $('.gallery').isotope({\n  // \titemSelector: '.gallery-item',\n  // \tlayoutMode: 'masonry',\n  // });\n  // layout Isotope after each image loads\n  // $grid.imagesLoaded().progress( function() {\n  // \t$grid.isotope('layout');\n  // });\n\n  $('.gallery').isotope({\n    itemSelector: '.gallery-item',\n    layoutMode: 'masonry'\n  }); // init Isotope\n\n  var $grid = $('.gallery').isotope({// options\n  }); // filter items on button click\n\n  $('.gallery__buttons').on('click', 'button', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // filter functions\n\n  var filterFns = {\n    // show if number is greater than 50\n    numberGreaterThan50: function numberGreaterThan50() {\n      var number = $(this).find('.number').text();\n      return parseInt(number, 10) > 50;\n    },\n    // show if name ends with -ium\n    ium: function ium() {\n      var name = $(this).find('.name').text();\n      return name.match(/ium$/);\n    }\n  }; // bind filter on select change\n\n  $('.filters-select').on('change', function () {\n    // get filter value from option value\n    var filterValue = this.value; // use filterFn if matches value\n\n    filterValue = filterFns[filterValue] || filterValue;\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // Lightbox\n\n  $('.modal').featherlightGallery({\n    previousIcon: '&#9664;',\n    nextIcon: '&#9654;',\n    galleryFadeIn: 300,\n    galleryFadeOut: 300\n  }); // The function actually applying the offset\n\n  function offsetAnchor() {\n    if (location.hash.length !== 0) {\n      window.scrollTo(window.scrollX, window.scrollY - 100);\n    }\n  } // Captures click events of all a elements with href starting with #\n\n\n  $(document).on('click', 'a[href^=\"#\"]', function (event) {\n    // Click events are captured before hashchanges. Timeout\n    // causes offsetAnchor to be called after the page jump.\n    window.setTimeout(function () {\n      offsetAnchor();\n    }, 0);\n  }); // Set the offset when entering page with hash present in the url\n\n  window.setTimeout(offsetAnchor, 0);\n});\n\n(function () {\n  var elements = document.querySelectorAll('[data-image]');\n  var images = document.getElementsByClassName('text-image__image');\n\n  if (elements.length === 0) {\n    return false;\n  }\n\n  elements.forEach(function (element) {\n    var target = document.querySelector(element.dataset.image);\n    var toggleClass = 'is-visible';\n    element.addEventListener('mouseover', function () {\n      Array.from(images).forEach(function (el) {\n        return el.classList.remove(toggleClass);\n      });\n      target.classList.add(toggleClass);\n    }, false);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJzbGljayIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsInBhdXNlT25Ib3ZlciIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJuZXh0IiwiaXMiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsImhpZGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIiRncmlkIiwib24iLCJmaWx0ZXJWYWx1ZSIsImF0dHIiLCJmaWx0ZXIiLCJmaWx0ZXJGbnMiLCJudW1iZXJHcmVhdGVyVGhhbjUwIiwibnVtYmVyIiwiZmluZCIsInRleHQiLCJwYXJzZUludCIsIml1bSIsIm5hbWUiLCJtYXRjaCIsInZhbHVlIiwiZmVhdGhlcmxpZ2h0R2FsbGVyeSIsInByZXZpb3VzSWNvbiIsIm5leHRJY29uIiwiZ2FsbGVyeUZhZGVJbiIsImdhbGxlcnlGYWRlT3V0Iiwib2Zmc2V0QW5jaG9yIiwibG9jYXRpb24iLCJoYXNoIiwibGVuZ3RoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwic2Nyb2xsWSIsImV2ZW50Iiwic2V0VGltZW91dCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwiaW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJy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QSxPQUEzQjtBQUNBNkQsWUFBTSxDQUFDUSxTQUFQLENBQWlCRSxHQUFqQixDQUFxQnZFLFdBQXJCO0FBQ0EsS0FIRCxFQUdHLEtBSEg7QUFJQSxHQVJEO0FBU0EsQ0FqQkEsR0FBRCIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdC8vIFByaW1hcnkgbmF2XG5cdHZhciAkbWVudUJ0biA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2LWJ0blwiKTtcblx0dmFyICRtZW51Q29udGFpbmVyID0gJChcIi5nbG9iYWwtaGVhZGVyLS1uYXZfX21vYmlsZVwiKTtcblx0JG1lbnVCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xuXHRcdC8vICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2XCIpLnRvZ2dsZUNsYXNzKFwiZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdFx0JG1lbnVDb250YWluZXIudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdH0pO1xuXG5cdCQoXCIuY2Fyb3VzZWwtc2xpZGVyXCIpLnNsaWNrKHtcblx0XHQvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXG5cdFx0c3BlZWQ6IDMwMCxcblx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0YXV0b3BsYXlTcGVlZDogMjAwMCxcblx0XHRhcnJvd3M6IHRydWUsXG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXHRcdC8vIGNlbnRlck1vZGU6IHRydWUsXG5cdFx0Ly8gY2VudGVyUGFkZGluZzogXCIyNjBweFwiLFxuXHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogMTAyNCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRcdFx0Ly8gY2VudGVyUGFkZGluZzogXCIxNjBweFwiLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiA2NDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0XHRcdC8vIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9KTtcblxuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Bvc2l0aW9uKTtcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdCk7XG5cblx0Ly8gaW5pdCgpO1xuXHQvLyBjaGVja1Bvc2l0aW9uKCk7XG5cblx0Ly8gRkFRXG5cdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX3RpdGxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fY29udGVudCcpLnNsaWRlVXAoJ25vcm1hbCcpO1xuXHRcdGlmKCQodGhpcykubmV4dCgpLmlzKCc6aGlkZGVuJykgPT0gdHJ1ZSkge1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oJ25vcm1hbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2NvbnRlbnQnKS5oaWRlKCk7XG5cblx0Ly8gSU1BR0UgTE9BRCBXQVlcblx0Ly8gaW5pdCBJc290b3BlXG5cdC8vIHZhciAkZ3JpZCA9ICQoJy5nYWxsZXJ5JykuaXNvdG9wZSh7XG5cdC8vIFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnktaXRlbScsXG5cdC8vIFx0bGF5b3V0TW9kZTogJ21hc29ucnknLFxuXHQvLyB9KTtcblx0Ly8gbGF5b3V0IElzb3RvcGUgYWZ0ZXIgZWFjaCBpbWFnZSBsb2Fkc1xuXHQvLyAkZ3JpZC5pbWFnZXNMb2FkZWQoKS5wcm9ncmVzcyggZnVuY3Rpb24oKSB7XG5cdC8vIFx0JGdyaWQuaXNvdG9wZSgnbGF5b3V0Jyk7XG5cdFx0XG5cdC8vIH0pO1xuXG5cblx0JCgnLmdhbGxlcnknKS5pc290b3BlKHtcblx0XHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeS1pdGVtJyxcblx0XHRsYXlvdXRNb2RlOiAnbWFzb25yeScsXG5cdFx0XG5cdCB9KTtcblxuXHQvLyBpbml0IElzb3RvcGVcblx0dmFyICRncmlkID0gJCgnLmdhbGxlcnknKS5pc290b3BlKHtcblx0XHQvLyBvcHRpb25zXG5cdH0pO1xuXHQvLyBmaWx0ZXIgaXRlbXMgb24gYnV0dG9uIGNsaWNrXG5cdCQoJy5nYWxsZXJ5X19idXR0b25zJykub24oICdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgZmlsdGVyVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG5cdFx0JGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XG5cdH0pO1xuXHQvLyBmaWx0ZXIgZnVuY3Rpb25zXG5cdHZhciBmaWx0ZXJGbnMgPSB7XG5cdFx0Ly8gc2hvdyBpZiBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDUwXG5cdFx0bnVtYmVyR3JlYXRlclRoYW41MDogZnVuY3Rpb24oKSB7XG5cdFx0ICB2YXIgbnVtYmVyID0gJCh0aGlzKS5maW5kKCcubnVtYmVyJykudGV4dCgpO1xuXHRcdCAgcmV0dXJuIHBhcnNlSW50KCBudW1iZXIsIDEwICkgPiA1MDtcblx0XHR9LFxuXHRcdC8vIHNob3cgaWYgbmFtZSBlbmRzIHdpdGggLWl1bVxuXHRcdGl1bTogZnVuY3Rpb24oKSB7XG5cdFx0ICB2YXIgbmFtZSA9ICQodGhpcykuZmluZCgnLm5hbWUnKS50ZXh0KCk7XG5cdFx0ICByZXR1cm4gbmFtZS5tYXRjaCggL2l1bSQvICk7XG5cdFx0fVxuXHR9O1xuXHQvLyBiaW5kIGZpbHRlciBvbiBzZWxlY3QgY2hhbmdlXG5cdCQoJy5maWx0ZXJzLXNlbGVjdCcpLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdC8vIGdldCBmaWx0ZXIgdmFsdWUgZnJvbSBvcHRpb24gdmFsdWVcblx0dmFyIGZpbHRlclZhbHVlID0gdGhpcy52YWx1ZTtcblx0Ly8gdXNlIGZpbHRlckZuIGlmIG1hdGNoZXMgdmFsdWVcblx0ZmlsdGVyVmFsdWUgPSBmaWx0ZXJGbnNbIGZpbHRlclZhbHVlIF0gfHwgZmlsdGVyVmFsdWU7XG5cdCRncmlkLmlzb3RvcGUoeyBmaWx0ZXI6IGZpbHRlclZhbHVlIH0pO1xuXHR9KTtcblx0XG4gIFxuXG5cblxuXHQvLyBMaWdodGJveFxuXHQkKCcubW9kYWwnKS5mZWF0aGVybGlnaHRHYWxsZXJ5KHtcblx0XHRwcmV2aW91c0ljb246ICcmIzk2NjQ7Jyxcblx0XHRuZXh0SWNvbjogJyYjOTY1NDsnLFxuXHRcdGdhbGxlcnlGYWRlSW46IDMwMCxcblx0XHRnYWxsZXJ5RmFkZU91dDogMzAwXG5cdH0pO1xuXHRcblxuXG5cdC8vIFRoZSBmdW5jdGlvbiBhY3R1YWxseSBhcHBseWluZyB0aGUgb2Zmc2V0XG5mdW5jdGlvbiBvZmZzZXRBbmNob3IoKSB7XG5cdGlmIChsb2NhdGlvbi5oYXNoLmxlbmd0aCAhPT0gMCkge1xuXHQgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkgLSAxMDApO1xuXHR9XG4gIH1cbiAgXG4gIC8vIENhcHR1cmVzIGNsaWNrIGV2ZW50cyBvZiBhbGwgYSBlbGVtZW50cyB3aXRoIGhyZWYgc3RhcnRpbmcgd2l0aCAjXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIENsaWNrIGV2ZW50cyBhcmUgY2FwdHVyZWQgYmVmb3JlIGhhc2hjaGFuZ2VzLiBUaW1lb3V0XG5cdC8vIGNhdXNlcyBvZmZzZXRBbmNob3IgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBwYWdlIGp1bXAuXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQgIG9mZnNldEFuY2hvcigpO1xuXHR9LCAwKTtcbiAgfSk7XG4gIFxuICAvLyBTZXQgdGhlIG9mZnNldCB3aGVuIGVudGVyaW5nIHBhZ2Ugd2l0aCBoYXNoIHByZXNlbnQgaW4gdGhlIHVybFxuICB3aW5kb3cuc2V0VGltZW91dChvZmZzZXRBbmNob3IsIDApO1xuICBcbn0pO1xuXG5cbihmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW1hZ2VdJyk7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtaW1hZ2VfX2ltYWdlJyk7XG5cdCAgXG5cdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQuZGF0YXNldC5pbWFnZSk7ICAgXG5cdGNvbnN0IHRvZ2dsZUNsYXNzID0gJ2lzLXZpc2libGUnO1xuXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG5cdCAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKSk7XG5cdCAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuXHRcdH0sIGZhbHNlKTtcblx0fSk7XG59KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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