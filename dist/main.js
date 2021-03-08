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

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".global-header--nav-btn\");\n  var $menuContainer = $(\".global-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\"); // $(\".global-header--nav\").toggleClass(\"global-header--nav__mobile\");\n\n    $menuContainer.toggleClass(\"is-active\");\n  }); // window.addEventListener(\"scroll\", checkPosition);\n  // window.addEventListener(\"resize\", init);\n  // init();\n  // checkPosition();\n  // FAQ\n\n  $('.accordion .accordion__title').click(function () {\n    $('.accordion .accordion__title').removeClass('active');\n    $('.accordion .accordion__content').slideUp('normal');\n\n    if ($(this).next().is(':hidden') == true) {\n      $(this).addClass('active');\n      $(this).next().slideDown('normal');\n    }\n\n    return false;\n  });\n  $('.accordion .accordion__content').hide();\n}); // const items = document.querySelectorAll(\".accordion button\");\n// function toggleAccordion() {\n//   const itemToggle = this.getAttribute('aria-expanded');\n//   for (i = 0; i < items.length; i++) {\n//     items[i].setAttribute('aria-expanded', 'false');\n//   }\n//   if (itemToggle == 'false') {\n//     this.setAttribute('aria-expanded', 'true');\n//   }\n// }\n// items.forEach(item => item.addEventListener('click', toggleAccordion));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiJG1lbnVCdG4iLCIkbWVudUNvbnRhaW5lciIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJuZXh0IiwiaXMiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsImhpZGUiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2xDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUMseUJBQUQsQ0FBaEI7QUFDQSxNQUFJRSxjQUFjLEdBQUdGLENBQUMsQ0FBQyw2QkFBRCxDQUF0QjtBQUNBQyxVQUFRLENBQUNFLEtBQVQsQ0FBZSxZQUFXO0FBQ3pCSCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFdBQVIsQ0FBb0IsV0FBcEI7QUFDQUosS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSSxXQUFWLENBQXNCLGFBQXRCLEVBRnlCLENBR3pCOztBQUNBRixrQkFBYyxDQUFDRSxXQUFmLENBQTJCLFdBQTNCO0FBQ0EsR0FMRCxFQUprQyxDQVdsQztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBSixHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0csS0FBbEMsQ0FBd0MsWUFBVztBQUNsREgsS0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NLLFdBQWxDLENBQThDLFFBQTlDO0FBQ0FMLEtBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DTSxPQUFwQyxDQUE0QyxRQUE1Qzs7QUFDQSxRQUFHTixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsR0FBZUMsRUFBZixDQUFrQixTQUFsQixLQUFnQyxJQUFuQyxFQUF5QztBQUN4Q1IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxRQUFSLENBQWlCLFFBQWpCO0FBQ0FULE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixHQUFlRyxTQUFmLENBQXlCLFFBQXpCO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0FSRDtBQVNBVixHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ1csSUFBcEM7QUFFQSxDQTdCRCxFLENBK0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQvLyBQcmltYXJ5IG5hdlxuXHR2YXIgJG1lbnVCdG4gPSAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdi1idG5cIik7XG5cdHZhciAkbWVudUNvbnRhaW5lciA9ICQoXCIuZ2xvYmFsLWhlYWRlci0tbmF2X19tb2JpbGVcIik7XG5cdCRtZW51QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcblx0XHQvLyAkKFwiLmdsb2JhbC1oZWFkZXItLW5hdlwiKS50b2dnbGVDbGFzcyhcImdsb2JhbC1oZWFkZXItLW5hdl9fbW9iaWxlXCIpO1xuXHRcdCRtZW51Q29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuXHR9KTtcblxuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Bvc2l0aW9uKTtcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdCk7XG5cblx0Ly8gaW5pdCgpO1xuXHQvLyBjaGVja1Bvc2l0aW9uKCk7XG5cblx0Ly8gRkFRXG5cdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX3RpdGxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJy5hY2NvcmRpb24gLmFjY29yZGlvbl9fY29udGVudCcpLnNsaWRlVXAoJ25vcm1hbCcpO1xuXHRcdGlmKCQodGhpcykubmV4dCgpLmlzKCc6aGlkZGVuJykgPT0gdHJ1ZSkge1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oJ25vcm1hbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHQkKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2NvbnRlbnQnKS5oaWRlKCk7XG5cbn0pO1xuXG4vLyBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uIGJ1dHRvblwiKTtcblxuLy8gZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuLy8gICBjb25zdCBpdGVtVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgXG4vLyAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGl0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuLy8gICB9XG4gIFxuLy8gICBpZiAoaXRlbVRvZ2dsZSA9PSAnZmFsc2UnKSB7XG4vLyAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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