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

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  });\n  $(\".carousel-slider\").slick({\n    // settings: \"unslick\",\n    speed: 300,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    arrows: true,\n    infinite: true,\n    dots: true,\n    adaptiveHeight: true,\n    // centerMode: true,\n    // centerPadding: \"260px\",\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"160px\",\n\n      }\n    }, {\n      breakpoint: 640,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"60px\",\n\n      }\n    }]\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide(); // IMAGE LOAD WAY\n  // init Isotope\n  // var $grid = $('.gallery').isotope({\n  // \titemSelector: '.gallery-item',\n  // \tlayoutMode: 'masonry',\n  // });\n  // layout Isotope after each image loads\n  // $grid.imagesLoaded().progress( function() {\n  // \t$grid.isotope('layout');\n  // });\n\n  $('.gallery').isotope({\n    itemSelector: '.gallery-item',\n    layoutMode: 'masonry'\n  }); // init Isotope\n\n  var $grid = $('.gallery').isotope({// options\n  }); // filter items on button click\n\n  $('.gallery__buttons').on('click', 'button', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // filter functions\n\n  var filterFns = {\n    // show if number is greater than 50\n    numberGreaterThan50: function numberGreaterThan50() {\n      var number = $(this).find('.number').text();\n      return parseInt(number, 10) > 50;\n    },\n    // show if name ends with -ium\n    ium: function ium() {\n      var name = $(this).find('.name').text();\n      return name.match(/ium$/);\n    }\n  }; // bind filter on select change\n\n  $('.filters-select').on('change', function () {\n    // get filter value from option value\n    var filterValue = this.value; // use filterFn if matches value\n\n    filterValue = filterFns[filterValue] || filterValue;\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // Lightbox\n\n  $('.modal').featherlightGallery({\n    previousIcon: '&#9664;',\n    nextIcon: '&#9654;',\n    galleryFadeIn: 300,\n    galleryFadeOut: 300\n  }); // The function actually applying the offset\n\n  function offsetAnchor() {\n    if (location.hash.length !== 0) {\n      window.scrollTo(window.scrollX, window.scrollY - 100);\n    }\n  } // Captures click events of all a elements with href starting with #\n\n\n  $(document).on('click', 'a[href^=\"#\"]', function (event) {\n    // Click events are captured before hashchanges. Timeout\n    // causes offsetAnchor to be called after the page jump.\n    window.setTimeout(function () {\n      offsetAnchor();\n    }, 0);\n  }); // Set the offset when entering page with hash present in the url\n\n  window.setTimeout(offsetAnchor, 0);\n});\n\n(function () {\n  var elements = document.querySelectorAll('[data-image]');\n  var images = document.getElementsByClassName('text-image__image');\n\n  if (elements.length === 0) {\n    return false;\n  }\n\n  elements.forEach(function (element) {\n    var target = document.querySelector(element.dataset.image);\n    var toggleClass = 'is-visible';\n    element.addEventListener('mouseover', function () {\n      Array.from(images).forEach(function (el) {\n        return el.classList.remove(toggleClass);\n      });\n      target.classList.add(toggleClass);\n    }, false);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJzbGljayIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJuZXh0IiwiaXMiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsImhpZGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIiRncmlkIiwib24iLCJmaWx0ZXJWYWx1ZSIsImF0dHIiLCJmaWx0ZXIiLCJmaWx0ZXJGbnMiLCJudW1iZXJHcmVhdGVyVGhhbjUwIiwibnVtYmVyIiwiZmluZCIsInRleHQiLCJwYXJzZUludCIsIml1bSIsIm5hbWUiLCJtYXRjaCIsInZhbHVlIiwiZmVhdGhlcmxpZ2h0R2FsbGVyeSIsInByZXZpb3VzSWNvbiIsIm5leHRJY29uIiwiZ2FsbGVyeUZhZGVJbiIsImdhbGxlcnlGYWRlT3V0Iiwib2Zmc2V0QW5jaG9yIiwibG9jYXRpb24iLCJoYXNoIiwibGVuZ3RoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwic2Nyb2xsWSIsImV2ZW50Iiwic2V0VGltZW91dCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwiaW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZWwi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R0FBakIsQ0FBcUJ0RSxXQUFyQjtBQUNBLEtBSEQsRUFHRyxLQUhIO0FBSUEsR0FSRDtBQVNBLENBakJBLEdBQUQiLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQvLyBQcmltYXJ5IG5hdlxuXHR2YXIgJG1lbnVCdG4gPSAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdi1idG5cIik7XG5cdHZhciAkbWVudUNvbnRhaW5lciA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdCRtZW51QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcblx0XHQvLyAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdlwiKS50b2dnbGVDbGFzcyhcImdsb2JhbC1oZWFkZXItLW5hdl9fbW9iaWxlXCIpO1xuXHRcdCRtZW51Q29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuXHR9KTtcblxuXHQkKFwiLmNhcm91c2VsLXNsaWRlclwiKS5zbGljayh7XG5cdFx0Ly8gc2V0dGluZ3M6IFwidW5zbGlja1wiLFxuXHRcdHNwZWVkOiAzMDAsXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG5cdFx0YXJyb3dzOiB0cnVlLFxuXHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cdFx0Ly8gY2VudGVyTW9kZTogdHJ1ZSxcblx0XHQvLyBjZW50ZXJQYWRkaW5nOiBcIjI2MHB4XCIsXG5cdFx0cmVzcG9uc2l2ZTogW1xuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiAxMDI0LFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdFx0XHQvLyBjZW50ZXJQYWRkaW5nOiBcIjE2MHB4XCIsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDY0MCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRcdFx0Ly8gY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrUG9zaXRpb24pO1xuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcblxuXHQvLyBpbml0KCk7XG5cdC8vIGNoZWNrUG9zaXRpb24oKTtcblxuXHQvLyBGQVFcblx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVVcCgnbm9ybWFsJyk7XG5cdFx0aWYoJCh0aGlzKS5uZXh0KCkuaXMoJzpoaWRkZW4nKSA9PSB0cnVlKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQodGhpcykubmV4dCgpLnNsaWRlRG93bignbm9ybWFsJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fY29udGVudCcpLmhpZGUoKTtcblxuXHQvLyBJTUFHRSBMT0FEIFdBWVxuXHQvLyBpbml0IElzb3RvcGVcblx0Ly8gdmFyICRncmlkID0gJCgnLmdhbGxlcnknKS5pc290b3BlKHtcblx0Ly8gXHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeS1pdGVtJyxcblx0Ly8gXHRsYXlvdXRNb2RlOiAnbWFzb25yeScsXG5cdC8vIH0pO1xuXHQvLyBsYXlvdXQgSXNvdG9wZSBhZnRlciBlYWNoIGltYWdlIGxvYWRzXG5cdC8vICRncmlkLmltYWdlc0xvYWRlZCgpLnByb2dyZXNzKCBmdW5jdGlvbigpIHtcblx0Ly8gXHQkZ3JpZC5pc290b3BlKCdsYXlvdXQnKTtcblx0XHRcblx0Ly8gfSk7XG5cblxuXHQkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5LWl0ZW0nLFxuXHRcdGxheW91dE1vZGU6ICdtYXNvbnJ5Jyxcblx0XHRcblx0IH0pO1xuXG5cdC8vIGluaXQgSXNvdG9wZVxuXHR2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdC8vIG9wdGlvbnNcblx0fSk7XG5cdC8vIGZpbHRlciBpdGVtcyBvbiBidXR0b24gY2xpY2tcblx0JCgnLmdhbGxlcnlfX2J1dHRvbnMnKS5vbiggJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWx0ZXJWYWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcblx0XHQkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcblx0fSk7XG5cdC8vIGZpbHRlciBmdW5jdGlvbnNcblx0dmFyIGZpbHRlckZucyA9IHtcblx0XHQvLyBzaG93IGlmIG51bWJlciBpcyBncmVhdGVyIHRoYW4gNTBcblx0XHRudW1iZXJHcmVhdGVyVGhhbjUwOiBmdW5jdGlvbigpIHtcblx0XHQgIHZhciBudW1iZXIgPSAkKHRoaXMpLmZpbmQoJy5udW1iZXInKS50ZXh0KCk7XG5cdFx0ICByZXR1cm4gcGFyc2VJbnQoIG51bWJlciwgMTAgKSA+IDUwO1xuXHRcdH0sXG5cdFx0Ly8gc2hvdyBpZiBuYW1lIGVuZHMgd2l0aCAtaXVtXG5cdFx0aXVtOiBmdW5jdGlvbigpIHtcblx0XHQgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCcubmFtZScpLnRleHQoKTtcblx0XHQgIHJldHVybiBuYW1lLm1hdGNoKCAvaXVtJC8gKTtcblx0XHR9XG5cdH07XG5cdC8vIGJpbmQgZmlsdGVyIG9uIHNlbGVjdCBjaGFuZ2Vcblx0JCgnLmZpbHRlcnMtc2VsZWN0Jykub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0Ly8gZ2V0IGZpbHRlciB2YWx1ZSBmcm9tIG9wdGlvbiB2YWx1ZVxuXHR2YXIgZmlsdGVyVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHQvLyB1c2UgZmlsdGVyRm4gaWYgbWF0Y2hlcyB2YWx1ZVxuXHRmaWx0ZXJWYWx1ZSA9IGZpbHRlckZuc1sgZmlsdGVyVmFsdWUgXSB8fCBmaWx0ZXJWYWx1ZTtcblx0JGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XG5cdH0pO1xuXHRcbiAgXG5cblxuXG5cdC8vIExpZ2h0Ym94XG5cdCQoJy5tb2RhbCcpLmZlYXRoZXJsaWdodEdhbGxlcnkoe1xuXHRcdHByZXZpb3VzSWNvbjogJyYjOTY2NDsnLFxuXHRcdG5leHRJY29uOiAnJiM5NjU0OycsXG5cdFx0Z2FsbGVyeUZhZGVJbjogMzAwLFxuXHRcdGdhbGxlcnlGYWRlT3V0OiAzMDBcblx0fSk7XG5cdFxuXG5cblx0Ly8gVGhlIGZ1bmN0aW9uIGFjdHVhbGx5IGFwcGx5aW5nIHRoZSBvZmZzZXRcbmZ1bmN0aW9uIG9mZnNldEFuY2hvcigpIHtcblx0aWYgKGxvY2F0aW9uLmhhc2gubGVuZ3RoICE9PSAwKSB7XG5cdCAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSAtIDEwMCk7XG5cdH1cbiAgfVxuICBcbiAgLy8gQ2FwdHVyZXMgY2xpY2sgZXZlbnRzIG9mIGFsbCBhIGVsZW1lbnRzIHdpdGggaHJlZiBzdGFydGluZyB3aXRoICNcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gQ2xpY2sgZXZlbnRzIGFyZSBjYXB0dXJlZCBiZWZvcmUgaGFzaGNoYW5nZXMuIFRpbWVvdXRcblx0Ly8gY2F1c2VzIG9mZnNldEFuY2hvciB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UganVtcC5cblx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdCAgb2Zmc2V0QW5jaG9yKCk7XG5cdH0sIDApO1xuICB9KTtcbiAgXG4gIC8vIFNldCB0aGUgb2Zmc2V0IHdoZW4gZW50ZXJpbmcgcGFnZSB3aXRoIGhhc2ggcHJlc2VudCBpbiB0aGUgdXJsXG4gIHdpbmRvdy5zZXRUaW1lb3V0KG9mZnNldEFuY2hvciwgMCk7XG4gIFxufSk7XG5cblxuKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbWFnZV0nKTtcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dC1pbWFnZV9faW1hZ2UnKTtcblx0ICBcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudC5kYXRhc2V0LmltYWdlKTsgICBcblx0Y29uc3QgdG9nZ2xlQ2xhc3MgPSAnaXMtdmlzaWJsZSc7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcblx0ICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpKTtcblx0ICB0YXJnZXQuY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9KTtcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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