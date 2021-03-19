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

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  });\n  $(\".carousel-slider\").slick({\n    // settings: \"unslick\",\n    speed: 300,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    arrows: true,\n    infinite: true,\n    dots: true,\n    adaptiveHeight: true,\n    // centerMode: true,\n    // centerPadding: \"260px\",\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"160px\",\n\n      }\n    }, {\n      breakpoint: 640,\n      settings: {\n        slidesToShow: 1 // centerPadding: \"60px\",\n\n      }\n    }]\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide(); // IMAGE LOAD WAY\n  // init Isotope\n  // var $grid = $('.gallery').isotope({\n  // \titemSelector: '.gallery-item',\n  // \tlayoutMode: 'masonry',\n  // });\n  // layout Isotope after each image loads\n  // $grid.imagesLoaded().progress( function() {\n  // \t$grid.isotope('layout');\n  // });\n\n  $('.gallery').isotope({\n    itemSelector: '.gallery-item',\n    layoutMode: 'masonry'\n  }); // init Isotope\n\n  var $grid = $('.gallery').isotope({// options\n  }); // filter items on button click\n\n  $('.gallery__buttons').on('click', 'button', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // filter functions\n\n  var filterFns = {\n    // show if number is greater than 50\n    numberGreaterThan50: function numberGreaterThan50() {\n      var number = $(this).find('.number').text();\n      return parseInt(number, 10) > 50;\n    },\n    // show if name ends with -ium\n    ium: function ium() {\n      var name = $(this).find('.name').text();\n      return name.match(/ium$/);\n    }\n  }; // bind filter on select change\n\n  $('.filters-select').on('change', function () {\n    // get filter value from option value\n    var filterValue = this.value; // use filterFn if matches value\n\n    filterValue = filterFns[filterValue] || filterValue;\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // Lightbox\n\n  $('.modal').featherlightGallery({\n    previousIcon: '&#9664;',\n    nextIcon: '&#9654;',\n    galleryFadeIn: 300,\n    galleryFadeOut: 300\n  }); // The function actually applying the offset\n\n  function offsetAnchor() {\n    if (location.hash.length !== 0) {\n      window.scrollTo(window.scrollX, window.scrollY - 100);\n    }\n  } // Captures click events of all a elements with href starting with #\n\n\n  $(document).on('click', 'a[href^=\"#\"]', function (event) {\n    // Click events are captured before hashchanges. Timeout\n    // causes offsetAnchor to be called after the page jump.\n    window.setTimeout(function () {\n      offsetAnchor();\n    }, 0);\n  }); // Set the offset when entering page with hash present in the url\n\n  window.setTimeout(offsetAnchor, 0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJzbGljayIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJuZXh0IiwiaXMiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsImhpZGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIiRncmlkIiwib24iLCJmaWx0ZXJWYWx1ZSIsImF0dHIiLCJmaWx0ZXIiLCJmaWx0ZXJGbnMiLCJudW1iZXJHcmVhdGVyVGhhbjUwIiwibnVtYmVyIiwiZmluZCIsInRleHQiLCJwYXJzZUludCIsIml1bSIsIm5hbWUiLCJtYXRjaCIsInZhbHVlIiwiZmVhdGhlcmxpZ2h0R2FsbGVyeSIsInByZXZpb3VzSWNvbiIsIm5leHRJY29uIiwiZ2FsbGVyeUZhZGVJbiIsImdhbGxlcnlGYWRlT3V0Iiwib2Zmc2V0QW5jaG9yIiwibG9jYXRpb24iLCJoYXNoIiwibGVuZ3RoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwic2Nyb2xsWSIsImV2ZW50Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFTQyxDQUFULEVBQVk7QUFDbEM7QUFDQSxNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQyx5QkFBRCxDQUFoQjtBQUNBLE1BQUlFLGNBQWMsR0FBR0YsQ0FBQyxDQUFDLDZCQUFELENBQXRCO0FBQ0FDLFVBQVEsQ0FBQ0UsS0FBVCxDQUFlLFlBQVc7QUFDekJILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksV0FBUixDQUFvQixXQUFwQjtBQUNBSixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLFdBQVYsQ0FBc0IsYUFBdEIsRUFGeUIsQ0FHekI7O0FBQ0FGLGtCQUFjLENBQUNFLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxHQUxEO0FBT0FKLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSyxLQUF0QixDQUE0QjtBQUMzQjtBQUNBQyxTQUFLLEVBQUUsR0FGb0I7QUFHM0JDLGdCQUFZLEVBQUUsQ0FIYTtBQUkzQkMsa0JBQWMsRUFBRSxDQUpXO0FBSzNCQyxZQUFRLEVBQUUsSUFMaUI7QUFNM0JDLGlCQUFhLEVBQUUsSUFOWTtBQU8zQkMsVUFBTSxFQUFFLElBUG1CO0FBUTNCQyxZQUFRLEVBQUUsSUFSaUI7QUFTM0JDLFFBQUksRUFBRSxJQVRxQjtBQVUzQkMsa0JBQWMsRUFBRSxJQVZXO0FBVzNCO0FBQ0E7QUFDQUMsY0FBVSxFQUFFLENBQ1g7QUFDQ0MsZ0JBQVUsRUFBRSxJQURiO0FBRUNDLGNBQVEsRUFBRTtBQUNUVixvQkFBWSxFQUFFLENBREwsQ0FFVDs7QUFGUztBQUZYLEtBRFcsRUFRWDtBQUNDUyxnQkFBVSxFQUFFLEdBRGI7QUFFQ0MsY0FBUSxFQUFFO0FBQ1RWLG9CQUFZLEVBQUUsQ0FETCxDQUVUOztBQUZTO0FBRlgsS0FSVztBQWJlLEdBQTVCLEVBWGtDLENBMENsQztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBUCxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0csS0FBbEMsQ0FBd0MsWUFBVztBQUNsREgsS0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NrQixXQUFsQyxDQUE4QyxRQUE5QztBQUNBbEIsS0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtQixPQUFwQyxDQUE0QyxRQUE1Qzs7QUFDQSxRQUFHbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixHQUFlQyxFQUFmLENBQWtCLFNBQWxCLEtBQWdDLElBQW5DLEVBQXlDO0FBQ3hDckIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsUUFBUixDQUFpQixRQUFqQjtBQUNBdEIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixHQUFlRyxTQUFmLENBQXlCLFFBQXpCO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0FSRDtBQVNBdkIsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0N3QixJQUFwQyxHQTFEa0MsQ0E0RGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBeEIsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjeUIsT0FBZCxDQUFzQjtBQUNyQkMsZ0JBQVksRUFBRSxlQURPO0FBRXJCQyxjQUFVLEVBQUU7QUFGUyxHQUF0QixFQXpFa0MsQ0ErRWxDOztBQUNBLE1BQUlDLEtBQUssR0FBRzVCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3lCLE9BQWQsQ0FBc0IsQ0FDakM7QUFEaUMsR0FBdEIsQ0FBWixDQWhGa0MsQ0FtRmxDOztBQUNBekIsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI2QixFQUF2QixDQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4QyxZQUFXO0FBQ3hELFFBQUlDLFdBQVcsR0FBRzlCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxhQUFiLENBQWxCO0FBQ0FILFNBQUssQ0FBQ0gsT0FBTixDQUFjO0FBQUVPLFlBQU0sRUFBRUY7QUFBVixLQUFkO0FBQ0EsR0FIRCxFQXBGa0MsQ0F3RmxDOztBQUNBLE1BQUlHLFNBQVMsR0FBRztBQUNmO0FBQ0FDLHVCQUFtQixFQUFFLCtCQUFXO0FBQzlCLFVBQUlDLE1BQU0sR0FBR25DLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9DLElBQVIsQ0FBYSxTQUFiLEVBQXdCQyxJQUF4QixFQUFiO0FBQ0EsYUFBT0MsUUFBUSxDQUFFSCxNQUFGLEVBQVUsRUFBVixDQUFSLEdBQXlCLEVBQWhDO0FBQ0QsS0FMYztBQU1mO0FBQ0FJLE9BQUcsRUFBRSxlQUFXO0FBQ2QsVUFBSUMsSUFBSSxHQUFHeEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0MsSUFBUixDQUFhLE9BQWIsRUFBc0JDLElBQXRCLEVBQVg7QUFDQSxhQUFPRyxJQUFJLENBQUNDLEtBQUwsQ0FBWSxNQUFaLENBQVA7QUFDRDtBQVZjLEdBQWhCLENBekZrQyxDQXFHbEM7O0FBQ0F6QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjZCLEVBQXJCLENBQXlCLFFBQXpCLEVBQW1DLFlBQVc7QUFDOUM7QUFDQSxRQUFJQyxXQUFXLEdBQUcsS0FBS1ksS0FBdkIsQ0FGOEMsQ0FHOUM7O0FBQ0FaLGVBQVcsR0FBR0csU0FBUyxDQUFFSCxXQUFGLENBQVQsSUFBNEJBLFdBQTFDO0FBQ0FGLFNBQUssQ0FBQ0gsT0FBTixDQUFjO0FBQUVPLFlBQU0sRUFBRUY7QUFBVixLQUFkO0FBQ0MsR0FORCxFQXRHa0MsQ0FrSGxDOztBQUNBOUIsR0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMkMsbUJBQVosQ0FBZ0M7QUFDL0JDLGdCQUFZLEVBQUUsU0FEaUI7QUFFL0JDLFlBQVEsRUFBRSxTQUZxQjtBQUcvQkMsaUJBQWEsRUFBRSxHQUhnQjtBQUkvQkMsa0JBQWMsRUFBRTtBQUplLEdBQWhDLEVBbkhrQyxDQTRIbEM7O0FBQ0QsV0FBU0MsWUFBVCxHQUF3QjtBQUN2QixRQUFJQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QkMsWUFBTSxDQUFDQyxRQUFQLENBQWdCRCxNQUFNLENBQUNFLE9BQXZCLEVBQWdDRixNQUFNLENBQUNHLE9BQVAsR0FBaUIsR0FBakQ7QUFDRDtBQUNDLEdBaklnQyxDQW1JakM7OztBQUNBdkQsR0FBQyxDQUFDRixRQUFELENBQUQsQ0FBWStCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGNBQXhCLEVBQXdDLFVBQVMyQixLQUFULEVBQWdCO0FBQ3pEO0FBQ0E7QUFDQUosVUFBTSxDQUFDSyxVQUFQLENBQWtCLFlBQVc7QUFDM0JULGtCQUFZO0FBQ2IsS0FGRCxFQUVHLENBRkg7QUFHRSxHQU5ELEVBcElpQyxDQTRJakM7O0FBQ0FJLFFBQU0sQ0FBQ0ssVUFBUCxDQUFrQlQsWUFBbEIsRUFBZ0MsQ0FBaEM7QUFFRCxDQS9JRCIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdC8vIFByaW1hcnkgbmF2XG5cdHZhciAkbWVudUJ0biA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2LWJ0blwiKTtcblx0dmFyICRtZW51Q29udGFpbmVyID0gJChcIi5nbG9iYWwtaGVhZGVyLS1uYXZfX21vYmlsZVwiKTtcblx0JG1lbnVCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xuXHRcdC8vICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2XCIpLnRvZ2dsZUNsYXNzKFwiZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdFx0JG1lbnVDb250YWluZXIudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdH0pO1xuXG5cdCQoXCIuY2Fyb3VzZWwtc2xpZGVyXCIpLnNsaWNrKHtcblx0XHQvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXG5cdFx0c3BlZWQ6IDMwMCxcblx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0YXV0b3BsYXlTcGVlZDogMjAwMCxcblx0XHRhcnJvd3M6IHRydWUsXG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblx0XHQvLyBjZW50ZXJNb2RlOiB0cnVlLFxuXHRcdC8vIGNlbnRlclBhZGRpbmc6IFwiMjYwcHhcIixcblx0XHRyZXNwb25zaXZlOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDEwMjQsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0XHRcdC8vIGNlbnRlclBhZGRpbmc6IFwiMTYwcHhcIixcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogNjQwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdFx0XHQvLyBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSk7XG5cblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tQb3NpdGlvbik7XG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXQpO1xuXG5cdC8vIGluaXQoKTtcblx0Ly8gY2hlY2tQb3NpdGlvbigpO1xuXG5cdC8vIEZBUVxuXHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX190aXRsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2NvbnRlbnQnKS5zbGlkZVVwKCdub3JtYWwnKTtcblx0XHRpZigkKHRoaXMpLm5leHQoKS5pcygnOmhpZGRlbicpID09IHRydWUpIHtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCdub3JtYWwnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX19jb250ZW50JykuaGlkZSgpO1xuXG5cdC8vIElNQUdFIExPQUQgV0FZXG5cdC8vIGluaXQgSXNvdG9wZVxuXHQvLyB2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHQvLyBcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5LWl0ZW0nLFxuXHQvLyBcdGxheW91dE1vZGU6ICdtYXNvbnJ5Jyxcblx0Ly8gfSk7XG5cdC8vIGxheW91dCBJc290b3BlIGFmdGVyIGVhY2ggaW1hZ2UgbG9hZHNcblx0Ly8gJGdyaWQuaW1hZ2VzTG9hZGVkKCkucHJvZ3Jlc3MoIGZ1bmN0aW9uKCkge1xuXHQvLyBcdCRncmlkLmlzb3RvcGUoJ2xheW91dCcpO1xuXHRcdFxuXHQvLyB9KTtcblxuXG5cdCQoJy5nYWxsZXJ5JykuaXNvdG9wZSh7XG5cdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnktaXRlbScsXG5cdFx0bGF5b3V0TW9kZTogJ21hc29ucnknLFxuXHRcdFxuXHQgfSk7XG5cblx0Ly8gaW5pdCBJc290b3BlXG5cdHZhciAkZ3JpZCA9ICQoJy5nYWxsZXJ5JykuaXNvdG9wZSh7XG5cdFx0Ly8gb3B0aW9uc1xuXHR9KTtcblx0Ly8gZmlsdGVyIGl0ZW1zIG9uIGJ1dHRvbiBjbGlja1xuXHQkKCcuZ2FsbGVyeV9fYnV0dG9ucycpLm9uKCAnY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuXHRcdCRncmlkLmlzb3RvcGUoeyBmaWx0ZXI6IGZpbHRlclZhbHVlIH0pO1xuXHR9KTtcblx0Ly8gZmlsdGVyIGZ1bmN0aW9uc1xuXHR2YXIgZmlsdGVyRm5zID0ge1xuXHRcdC8vIHNob3cgaWYgbnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiA1MFxuXHRcdG51bWJlckdyZWF0ZXJUaGFuNTA6IGZ1bmN0aW9uKCkge1xuXHRcdCAgdmFyIG51bWJlciA9ICQodGhpcykuZmluZCgnLm51bWJlcicpLnRleHQoKTtcblx0XHQgIHJldHVybiBwYXJzZUludCggbnVtYmVyLCAxMCApID4gNTA7XG5cdFx0fSxcblx0XHQvLyBzaG93IGlmIG5hbWUgZW5kcyB3aXRoIC1pdW1cblx0XHRpdW06IGZ1bmN0aW9uKCkge1xuXHRcdCAgdmFyIG5hbWUgPSAkKHRoaXMpLmZpbmQoJy5uYW1lJykudGV4dCgpO1xuXHRcdCAgcmV0dXJuIG5hbWUubWF0Y2goIC9pdW0kLyApO1xuXHRcdH1cblx0fTtcblx0Ly8gYmluZCBmaWx0ZXIgb24gc2VsZWN0IGNoYW5nZVxuXHQkKCcuZmlsdGVycy1zZWxlY3QnKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHQvLyBnZXQgZmlsdGVyIHZhbHVlIGZyb20gb3B0aW9uIHZhbHVlXG5cdHZhciBmaWx0ZXJWYWx1ZSA9IHRoaXMudmFsdWU7XG5cdC8vIHVzZSBmaWx0ZXJGbiBpZiBtYXRjaGVzIHZhbHVlXG5cdGZpbHRlclZhbHVlID0gZmlsdGVyRm5zWyBmaWx0ZXJWYWx1ZSBdIHx8IGZpbHRlclZhbHVlO1xuXHQkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcblx0fSk7XG5cdFxuICBcblxuXG5cblx0Ly8gTGlnaHRib3hcblx0JCgnLm1vZGFsJykuZmVhdGhlcmxpZ2h0R2FsbGVyeSh7XG5cdFx0cHJldmlvdXNJY29uOiAnJiM5NjY0OycsXG5cdFx0bmV4dEljb246ICcmIzk2NTQ7Jyxcblx0XHRnYWxsZXJ5RmFkZUluOiAzMDAsXG5cdFx0Z2FsbGVyeUZhZGVPdXQ6IDMwMFxuXHR9KTtcblx0XG5cblxuXHQvLyBUaGUgZnVuY3Rpb24gYWN0dWFsbHkgYXBwbHlpbmcgdGhlIG9mZnNldFxuZnVuY3Rpb24gb2Zmc2V0QW5jaG9yKCkge1xuXHRpZiAobG9jYXRpb24uaGFzaC5sZW5ndGggIT09IDApIHtcblx0ICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZIC0gMTAwKTtcblx0fVxuICB9XG4gIFxuICAvLyBDYXB0dXJlcyBjbGljayBldmVudHMgb2YgYWxsIGEgZWxlbWVudHMgd2l0aCBocmVmIHN0YXJ0aW5nIHdpdGggI1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbihldmVudCkge1xuXHQvLyBDbGljayBldmVudHMgYXJlIGNhcHR1cmVkIGJlZm9yZSBoYXNoY2hhbmdlcy4gVGltZW91dFxuXHQvLyBjYXVzZXMgb2Zmc2V0QW5jaG9yIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgcGFnZSBqdW1wLlxuXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0ICBvZmZzZXRBbmNob3IoKTtcblx0fSwgMCk7XG4gIH0pO1xuICBcbiAgLy8gU2V0IHRoZSBvZmZzZXQgd2hlbiBlbnRlcmluZyBwYWdlIHdpdGggaGFzaCBwcmVzZW50IGluIHRoZSB1cmxcbiAgd2luZG93LnNldFRpbWVvdXQob2Zmc2V0QW5jaG9yLCAwKTtcbiAgXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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