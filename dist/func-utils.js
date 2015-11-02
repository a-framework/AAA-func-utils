var F =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _service = __webpack_require__(1);
	
	exports['default'] = {
	    Service: _service.Service
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Proxy = (function () {
	    function Proxy(tuple) {
	        _classCallCheck(this, Proxy);
	
	        this.tuple = tuple;
	    }
	
	    _createClass(Proxy, [{
	        key: "apply",
	        value: function apply() {
	            console.log(arguments);
	        }
	    }]);
	
	    return Proxy;
	})();
	
	;
	
	var Service = (function () {
	    function Service() {
	        _classCallCheck(this, Service);
	    }
	
	    _createClass(Service, [{
	        key: "seq",
	        value: function seq(val) {
	            return new Proxy({
	                seq: this,
	                promise: Promise.resolve(val)
	            });
	        }
	    }, {
	        key: "handleNumber",
	        value: function handleNumber(val) {
	            this.seq(val).multiply(3);
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(value) {
	            return value;
	        }
	    }]);
	
	    return Service;
	})();
	
	exports.Service = Service;
	;
	
	// f.load().then((...args) => {
	//     console.log(3);
	//     console.log(args);
	//     console.log(4);
	// });
	// f.loadAsync().then((...args) => {
	//     console.log(5);
	//     console.log(args);
	//     console.log(6);
	//     return this;
	// }).catch((...args) => {
	//     console.log(7);
	//     console.log(args);
	//     console.log(8);              
	// });

	// class F {
	//     load() {
	//         return new Promise((fullfill, reject) => {
	//             console.log(1);
	//             fullfill({a: 10});
	//             console.log(2);
	//         });
	//     }

	//     loadAsync() {
	//         return new Promise((fullfill, reject) => {
	//             console.log(1);
	//             setTimeout(() => {
	//                 console.log(3);
	//                 fullfill({a: 10});               
	//                 console.log(4);
	//             })
	//             reject({b: 20});
	//             console.log(2);
	//         });
	//     }
	// };

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjgyZTJmZDZiMTA0YTAxOTU0YjMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL2Z1bmMtdXRpbHMvc3JjL2Z1bmMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL2Z1bmMtdXRpbHMvc3JjL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O29DQ3RDc0IsQ0FBVzs7c0JBRWxCO0FBQ1gsWUFBTztFQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztLQ0pLLEtBQUs7QUFDSSxjQURULEtBQUssQ0FDSyxLQUFLLEVBQUU7K0JBRGpCLEtBQUs7O0FBRUgsYUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7TUFDdEI7O2tCQUhDLEtBQUs7O2dCQUtGLGlCQUFHO0FBQ0osb0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDMUI7OztZQVBDLEtBQUs7OztBQVFWLEVBQUM7O0tBRVcsT0FBTztjQUFQLE9BQU87K0JBQVAsT0FBTzs7O2tCQUFQLE9BQU87O2dCQUNiLGFBQUMsR0FBRyxFQUFFO0FBQ0wsb0JBQU8sSUFBSSxLQUFLLENBQUM7QUFDYixvQkFBRyxFQUFFLElBQUk7QUFDVCx3QkFBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2NBQ2hDLENBQUMsQ0FBQztVQUNOOzs7Z0JBRVcsc0JBQUMsR0FBRyxFQUFFO0FBQ2QsaUJBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzdCOzs7Z0JBRU8sa0JBQUMsS0FBSyxFQUFFO0FBQ1osb0JBQU8sS0FBSztVQUNmOzs7WUFkUSxPQUFPOzs7O0FBZW5CLEVBQUMiLCJmaWxlIjoiZnVuYy11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjgyZTJmZDZiMTA0YTAxOTU0YjNcbiAqKi8iLCJpbXBvcnQge1NlcnZpY2V9IGZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBTZXJ2aWNlXHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvZnVuYy11dGlscy9zcmMvZnVuYy11dGlscy5qc1xuICoqLyIsImNsYXNzIFByb3h5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR1cGxlKSB7XHJcbiAgICAgICAgdGhpcy50dXBsZSA9IHR1cGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBzZXEodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh7XHJcbiAgICAgICAgICAgIHNlcTogdGhpcywgXHJcbiAgICAgICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZSh2YWwpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTnVtYmVyKHZhbCkge1xyXG4gICAgICAgIHRoaXMuc2VxKHZhbCkubXVsdGlwbHkoMyk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gZi5sb2FkKCkudGhlbigoLi4uYXJncykgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coMyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKDQpO1xyXG4vLyB9KTtcclxuLy8gZi5sb2FkQXN5bmMoKS50aGVuKCguLi5hcmdzKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyg1KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG4vLyAgICAgY29uc29sZS5sb2coNik7XHJcbi8vICAgICByZXR1cm4gdGhpcztcclxuLy8gfSkuY2F0Y2goKC4uLmFyZ3MpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKDcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyg4KTsgICAgICAgICAgICAgICBcclxuLy8gfSk7XHJcblxyXG4vLyBjbGFzcyBGIHtcclxuLy8gICAgIGxvYWQoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxsZmlsbCwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4vLyAgICAgICAgICAgICBmdWxsZmlsbCh7YTogMTB9KTtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMik7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgbG9hZEFzeW5jKCkge1xyXG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZnVsbGZpbGwsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygxKTtcclxuLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygzKTtcclxuLy8gICAgICAgICAgICAgICAgIGZ1bGxmaWxsKHthOiAxMH0pOyAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDQpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICByZWplY3Qoe2I6IDIwfSk7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL2Z1bmMtdXRpbHMvc3JjL3NlcnZpY2UuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9