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

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide(); // IMAGE LOAD WAY\n  // init Isotope\n  // var $grid = $('.gallery').isotope({\n  // \titemSelector: '.gallery-item',\n  // \tlayoutMode: 'masonry',\n  // });\n  // layout Isotope after each image loads\n  // $grid.imagesLoaded().progress( function() {\n  // \t$grid.isotope('layout');\n  // });\n\n  $('.gallery').isotope({\n    itemSelector: '.gallery-item',\n    layoutMode: 'masonry'\n  }); // init Isotope\n\n  var $grid = $('.gallery').isotope({// options\n  }); // filter items on button click\n\n  $('.gallery__buttons').on('click', 'button', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    });\n  }); // Lightbox\n\n  $('.modal').featherlightGallery({\n    previousIcon: '&#9664;',\n    nextIcon: '&#9654;',\n    galleryFadeIn: 300,\n    galleryFadeOut: 300\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJuZXh0IiwiaXMiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsImhpZGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIiRncmlkIiwib24iLCJmaWx0ZXJWYWx1ZSIsImF0dHIiLCJmaWx0ZXIiLCJmZWF0aGVybGlnaHRHYWxsZXJ5IiwicHJldmlvdXNJY29uIiwibmV4dEljb24iLCJnYWxsZXJ5RmFkZUluIiwiZ2FsbGVyeUZhZGVPdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2xDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUMseUJBQUQsQ0FBaEI7QUFDQSxNQUFJRSxjQUFjLEdBQUdGLENBQUMsQ0FBQyw2QkFBRCxDQUF0QjtBQUNBQyxVQUFRLENBQUNFLEtBQVQsQ0FBZSxZQUFXO0FBQ3pCSCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFdBQVIsQ0FBb0IsV0FBcEI7QUFDQUosS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSSxXQUFWLENBQXNCLGFBQXRCLEVBRnlCLENBR3pCOztBQUNBRixrQkFBYyxDQUFDRSxXQUFmLENBQTJCLFdBQTNCO0FBQ0EsR0FMRCxFQUprQyxDQVdsQztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBSixHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0csS0FBbEMsQ0FBd0MsWUFBVztBQUNsREgsS0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NLLFdBQWxDLENBQThDLFFBQTlDO0FBQ0FMLEtBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DTSxPQUFwQyxDQUE0QyxRQUE1Qzs7QUFDQSxRQUFHTixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsR0FBZUMsRUFBZixDQUFrQixTQUFsQixLQUFnQyxJQUFuQyxFQUF5QztBQUN4Q1IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxRQUFSLENBQWlCLFFBQWpCO0FBQ0FULE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixHQUFlRyxTQUFmLENBQXlCLFFBQXpCO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0FSRDtBQVNBVixHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ1csSUFBcEMsR0EzQmtDLENBNkJsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQVgsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjWSxPQUFkLENBQXNCO0FBQ3JCQyxnQkFBWSxFQUFFLGVBRE87QUFFckJDLGNBQVUsRUFBRTtBQUZTLEdBQXRCLEVBMUNrQyxDQWdEbEM7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNZLE9BQWQsQ0FBc0IsQ0FDakM7QUFEaUMsR0FBdEIsQ0FBWixDQWpEa0MsQ0FvRGxDOztBQUNBWixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmdCLEVBQXZCLENBQTJCLE9BQTNCLEVBQW9DLFFBQXBDLEVBQThDLFlBQVc7QUFDeEQsUUFBSUMsV0FBVyxHQUFHakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixDQUFhLGFBQWIsQ0FBbEI7QUFDQUgsU0FBSyxDQUFDSCxPQUFOLENBQWM7QUFBRU8sWUFBTSxFQUFFRjtBQUFWLEtBQWQ7QUFDQSxHQUhELEVBckRrQyxDQTBEbEM7O0FBQ0FqQixHQUFDLENBQUMsUUFBRCxDQUFELENBQVlvQixtQkFBWixDQUFnQztBQUMvQkMsZ0JBQVksRUFBRSxTQURpQjtBQUUvQkMsWUFBUSxFQUFFLFNBRnFCO0FBRy9CQyxpQkFBYSxFQUFFLEdBSGdCO0FBSS9CQyxrQkFBYyxFQUFFO0FBSmUsR0FBaEM7QUFNQSxDQWpFRCIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdC8vIFByaW1hcnkgbmF2XG5cdHZhciAkbWVudUJ0biA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2LWJ0blwiKTtcblx0dmFyICRtZW51Q29udGFpbmVyID0gJChcIi5nbG9iYWwtaGVhZGVyLS1uYXZfX21vYmlsZVwiKTtcblx0JG1lbnVCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xuXHRcdC8vICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2XCIpLnRvZ2dsZUNsYXNzKFwiZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdFx0JG1lbnVDb250YWluZXIudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdH0pO1xuXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrUG9zaXRpb24pO1xuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcblxuXHQvLyBpbml0KCk7XG5cdC8vIGNoZWNrUG9zaXRpb24oKTtcblxuXHQvLyBGQVFcblx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLmFjY29yZGlvbiAuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVVcCgnbm9ybWFsJyk7XG5cdFx0aWYoJCh0aGlzKS5uZXh0KCkuaXMoJzpoaWRkZW4nKSA9PSB0cnVlKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQodGhpcykubmV4dCgpLnNsaWRlRG93bignbm9ybWFsJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fY29udGVudCcpLmhpZGUoKTtcblxuXHQvLyBJTUFHRSBMT0FEIFdBWVxuXHQvLyBpbml0IElzb3RvcGVcblx0Ly8gdmFyICRncmlkID0gJCgnLmdhbGxlcnknKS5pc290b3BlKHtcblx0Ly8gXHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeS1pdGVtJyxcblx0Ly8gXHRsYXlvdXRNb2RlOiAnbWFzb25yeScsXG5cdC8vIH0pO1xuXHQvLyBsYXlvdXQgSXNvdG9wZSBhZnRlciBlYWNoIGltYWdlIGxvYWRzXG5cdC8vICRncmlkLmltYWdlc0xvYWRlZCgpLnByb2dyZXNzKCBmdW5jdGlvbigpIHtcblx0Ly8gXHQkZ3JpZC5pc290b3BlKCdsYXlvdXQnKTtcblx0XHRcblx0Ly8gfSk7XG5cblxuXHQkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5LWl0ZW0nLFxuXHRcdGxheW91dE1vZGU6ICdtYXNvbnJ5Jyxcblx0XHRcblx0IH0pO1xuXG5cdC8vIGluaXQgSXNvdG9wZVxuXHR2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xuXHRcdC8vIG9wdGlvbnNcblx0fSk7XG5cdC8vIGZpbHRlciBpdGVtcyBvbiBidXR0b24gY2xpY2tcblx0JCgnLmdhbGxlcnlfX2J1dHRvbnMnKS5vbiggJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWx0ZXJWYWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcblx0XHQkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcblx0fSk7XG5cblx0Ly8gTGlnaHRib3hcblx0JCgnLm1vZGFsJykuZmVhdGhlcmxpZ2h0R2FsbGVyeSh7XG5cdFx0cHJldmlvdXNJY29uOiAnJiM5NjY0OycsXG5cdFx0bmV4dEljb246ICcmIzk2NTQ7Jyxcblx0XHRnYWxsZXJ5RmFkZUluOiAzMDAsXG5cdFx0Z2FsbGVyeUZhZGVPdXQ6IDMwMFxuXHR9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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