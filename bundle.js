/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.remove_task = remove_task;\nexports.add_task = add_task;\n\nvar _view = __webpack_require__(1);\n\nfunction remove_task() {\n    var _this = this;\n\n    var list = JSON.parse(localStorage.getItem('todo'));\n    localStorage.setItem('todo', list.filter(function (item) {\n        return item !== _this.parentNode.id;\n    }));\n\n    (0, _view.update_view)();\n}\n\nfunction add_task() {\n    var list_text = localStorage.getItem('todo');\n    var max_id = 0;\n    var list = new Array();\n    if (list_text !== null) {\n        list = JSON.parse(list_text);\n        max_id = list.reduce(function (maxid, el) {\n            return el.id > maxid ? el.id : maxid;\n        }, 0);\n    }\n    list.push({\n        id: max_id + 1,\n        text: document.getElementById('input_text').innerText\n    });\n    localStorage.setItem('todo', JSON.stringify(list));\n\n    (0, _view.update_view)();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWwuanM/YzUyZSJdLCJuYW1lcyI6WyJyZW1vdmVfdGFzayIsImFkZF90YXNrIiwibGlzdCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsInBhcmVudE5vZGUiLCJpZCIsImxpc3RfdGV4dCIsIm1heF9pZCIsIkFycmF5IiwicmVkdWNlIiwibWF4aWQiLCJlbCIsInB1c2giLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFcsR0FBQUEsVztRQU9BQyxRLEdBQUFBLFE7O0FBVGhCOztBQUVPLFNBQVNELFdBQVQsR0FBdUI7QUFBQTs7QUFDMUIsUUFBSUUsT0FBT0MsS0FBS0MsS0FBTCxDQUFXQyxhQUFhQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWDtBQUNBRCxpQkFBYUUsT0FBYixDQUFxQixNQUFyQixFQUE2QkwsS0FBS00sTUFBTCxDQUFZLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxTQUFTLE1BQUtDLFVBQUwsQ0FBZ0JDLEVBQW5DO0FBQUEsS0FBWixDQUE3Qjs7QUFFQTtBQUNIOztBQUVNLFNBQVNWLFFBQVQsR0FBb0I7QUFDdkIsUUFBSVcsWUFBWVAsYUFBYUMsT0FBYixDQUFxQixNQUFyQixDQUFoQjtBQUNBLFFBQUtPLFNBQVMsQ0FBZDtBQUNBLFFBQUlYLE9BQU8sSUFBSVksS0FBSixFQUFYO0FBQ0EsUUFBSUYsY0FBYyxJQUFsQixFQUF3QjtBQUNwQlYsZUFBT0MsS0FBS0MsS0FBTCxDQUFXUSxTQUFYLENBQVA7QUFDQUMsaUJBQVNYLEtBQUthLE1BQUwsQ0FBWSxVQUFDQyxLQUFELEVBQVFDLEVBQVI7QUFBQSxtQkFBZUEsR0FBR04sRUFBSCxHQUFRSyxLQUFSLEdBQWdCQyxHQUFHTixFQUFuQixHQUF3QkssS0FBdkM7QUFBQSxTQUFaLEVBQTBELENBQTFELENBQVQ7QUFDSDtBQUNEZCxTQUFLZ0IsSUFBTCxDQUFVO0FBQ05QLFlBQUlFLFNBQVMsQ0FEUDtBQUVOTSxjQUFNQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQztBQUZ0QyxLQUFWO0FBSUFqQixpQkFBYUUsT0FBYixDQUFxQixNQUFyQixFQUE2QkosS0FBS29CLFNBQUwsQ0FBZXJCLElBQWYsQ0FBN0I7O0FBRUE7QUFDSCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBkYXRlX3ZpZXcgfSBmcm9tICcuL3ZpZXcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlX3Rhc2soKSB7XHJcbiAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRoaXMucGFyZW50Tm9kZS5pZCkpXHJcblxyXG4gICAgdXBkYXRlX3ZpZXcoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkX3Rhc2soKSB7XHJcbiAgICBsZXQgbGlzdF90ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKVxyXG4gICAgbGV0ICBtYXhfaWQgPSAwXHJcbiAgICBsZXQgbGlzdCA9IG5ldyBBcnJheSAgXHJcbiAgICBpZiAobGlzdF90ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbGlzdCA9IEpTT04ucGFyc2UobGlzdF90ZXh0KVxyXG4gICAgICAgIG1heF9pZCA9IGxpc3QucmVkdWNlKChtYXhpZCwgZWwpID0+IGVsLmlkID4gbWF4aWQgPyBlbC5pZCA6IG1heGlkLCAwKSAgXHJcbiAgICB9XHJcbiAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgIGlkOiBtYXhfaWQgKyAxLFxyXG4gICAgICAgIHRleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF90ZXh0JykuaW5uZXJUZXh0IFxyXG4gICAgfSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpXHJcblxyXG4gICAgdXBkYXRlX3ZpZXcoKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21vZGVsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.update_view = update_view;\n\nvar _model = __webpack_require__(0);\n\nfunction update_view() {\n    if (localStorage.getItem('todo') !== null) {\n        var _list = JSON.parse(localStorage.todo);\n        var html_list = _list.reduce(function (previous, current) {\n            return previous + '<li class=\"task\" \\n                        id=\"' + current.id + '\">' + current.text + '\\n                        <button id=\"' + ('b' + current.id) + '\">x</button></li>';\n        }, '');\n\n        document.getElementById(\"list\").innerHTML += html_list;\n\n        // add handlers for buttons\n        _list.forEach(function (element) {\n            document.getElementById('b' + element.id).addEventListener('onclick', _model.remove_task);\n        }, this);\n    }\n}\n\nfunction update_view_1() {\n    if (localStorage.getItem('todo') !== null) {\n        var elParent = document.getElementById(\"list\");\n        var elList = list.map(function (item, index, array) {\n            var el = document.createElement('li');\n            el.className = 'task';\n            el.id = item.id;\n            el.innerText = item.text;\n            var button = document.createElement('button').addEventListener;\n            button.innerText = 'x';\n            elParent.insertBefore(el, null);\n            var nel = document.getElementById(JSON.stringify(item.id));\n            alert(toString(nel));\n            nel.insertBefore(button, null);\n            button.addEventListener('onclick', _model.remove_task);\n            return nel;\n        });\n    }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlldy5qcz8yYjFiIl0sIm5hbWVzIjpbInVwZGF0ZV92aWV3IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpc3QiLCJKU09OIiwicGFyc2UiLCJ0b2RvIiwiaHRtbF9saXN0IiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiaWQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZV92aWV3XzEiLCJlbFBhcmVudCIsImVsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFycmF5IiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiYnV0dG9uIiwiaW5zZXJ0QmVmb3JlIiwibmVsIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFcsR0FBQUEsVzs7QUFGaEI7O0FBRU8sU0FBU0EsV0FBVCxHQUF1QjtBQUMxQixRQUFJQyxhQUFhQyxPQUFiLENBQXFCLE1BQXJCLE1BQWlDLElBQXJDLEVBQTJDO0FBQ3ZDLFlBQUlDLFFBQU9DLEtBQUtDLEtBQUwsQ0FBV0osYUFBYUssSUFBeEIsQ0FBWDtBQUNBLFlBQUlDLFlBQVlKLE1BQUtLLE1BQUwsQ0FBWSxVQUFDQyxRQUFELEVBQVdDLE9BQVg7QUFBQSxtQkFBMEJELFFBQTFCLHVEQUNOQyxRQUFRQyxFQURGLFVBQ1NELFFBQVFFLElBRGpCLCtDQUVFLE1BQU1GLFFBQVFDLEVBRmhCO0FBQUEsU0FBWixFQUVtRCxFQUZuRCxDQUFoQjs7QUFJQUUsaUJBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFNBQWhDLElBQTZDUixTQUE3Qzs7QUFFQTtBQUNBSixjQUFLYSxPQUFMLENBQWEsVUFBU0MsT0FBVCxFQUFrQjtBQUMzQkoscUJBQVNDLGNBQVQsQ0FBd0IsTUFBTUcsUUFBUU4sRUFBdEMsRUFBMENPLGdCQUExQyxDQUEyRCxTQUEzRDtBQUNILFNBRkQsRUFFRyxJQUZIO0FBSUg7QUFDSjs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3BCLFFBQUlsQixhQUFhQyxPQUFiLENBQXFCLE1BQXJCLE1BQWlDLElBQXJDLEVBQTJDO0FBQ3hDLFlBQUlrQixXQUFXUCxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxZQUFJTyxTQUFTbEIsS0FBS21CLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsS0FBZCxFQUF3QjtBQUMxQyxnQkFBSUMsS0FBS2IsU0FBU2MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FELGVBQUdFLFNBQUgsR0FBZSxNQUFmO0FBQ0FGLGVBQUdmLEVBQUgsR0FBUVksS0FBS1osRUFBYjtBQUNBZSxlQUFHRyxTQUFILEdBQWVOLEtBQUtYLElBQXBCO0FBQ0EsZ0JBQUlrQixTQUFTakIsU0FBU2MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ1QsZ0JBQTlDO0FBQ0FZLG1CQUFPRCxTQUFQLEdBQW1CLEdBQW5CO0FBQ0FULHFCQUFTVyxZQUFULENBQXNCTCxFQUF0QixFQUEwQixJQUExQjtBQUNBLGdCQUFJTSxNQUFNbkIsU0FBU0MsY0FBVCxDQUF3QlYsS0FBSzZCLFNBQUwsQ0FBZVYsS0FBS1osRUFBcEIsQ0FBeEIsQ0FBVjtBQUNBdUIsa0JBQU1DLFNBQVNILEdBQVQsQ0FBTjtBQUNBQSxnQkFBSUQsWUFBSixDQUFpQkQsTUFBakIsRUFBeUIsSUFBekI7QUFDQUEsbUJBQU9aLGdCQUFQLENBQXdCLFNBQXhCO0FBQ0EsbUJBQU9jLEdBQVA7QUFDSCxTQWJZLENBQWI7QUFjRjtBQUNMIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVfdGFzayB9IGZyb20gJy4vbW9kZWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3ZpZXcoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kbylcclxuICAgICAgICBsZXQgaHRtbF9saXN0ID0gbGlzdC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBgJHtwcmV2aW91c308bGkgY2xhc3M9XCJ0YXNrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiJHtjdXJyZW50LmlkfVwiPiR7Y3VycmVudC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHsnYicgKyBjdXJyZW50LmlkfVwiPng8L2J1dHRvbj48L2xpPmAsICcnKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikuaW5uZXJIVE1MICs9IGh0bWxfbGlzdFxyXG5cclxuICAgICAgICAvLyBhZGQgaGFuZGxlcnMgZm9yIGJ1dHRvbnNcclxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYicgKyBlbGVtZW50LmlkKS5hZGRFdmVudExpc3RlbmVyKCdvbmNsaWNrJywgcmVtb3ZlX3Rhc2spXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVfdmlld18xKCkge1xyXG4gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpICE9PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGVsUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpXHJcbiAgICAgICAgbGV0IGVsTGlzdCA9IGxpc3QubWFwKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAndGFzaydcclxuICAgICAgICAgICAgZWwuaWQgPSBpdGVtLmlkXHJcbiAgICAgICAgICAgIGVsLmlubmVyVGV4dCA9IGl0ZW0udGV4dFxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ3gnXHJcbiAgICAgICAgICAgIGVsUGFyZW50Lmluc2VydEJlZm9yZShlbCwgbnVsbClcclxuICAgICAgICAgICAgbGV0IG5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEpTT04uc3RyaW5naWZ5KGl0ZW0uaWQpKVxyXG4gICAgICAgICAgICBhbGVydCh0b1N0cmluZyhuZWwpKVxyXG4gICAgICAgICAgICBuZWwuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgbnVsbClcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCByZW1vdmVfdGFzaylcclxuICAgICAgICAgICAgcmV0dXJuIG5lbFxyXG4gICAgICAgIH0pIFxyXG4gICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92aWV3LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _model = __webpack_require__(0);\n\nvar _view = __webpack_require__(1);\n\nvar inputField = document.getElementById('input_text');\nif (!inputField) {\n    document.getElementById('input').innerHTML = '<input type=\"text\" id=\"input_text\">';\n    var inputFieldAdded = document.getElementById('input_text');\n    inputFieldAdded.addEventListener('change', _model.add_task);\n}\n\n(0, _view.update_view)();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udHJvbGxlci5qcz8yYWY3Il0sIm5hbWVzIjpbImlucHV0RmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaW5wdXRGaWVsZEFkZGVkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxhQUFhQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBSSxDQUFDRixVQUFMLEVBQWlCO0FBQ2JDLGFBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLFNBQWpDLEdBQTZDLHFDQUE3QztBQUNBLFFBQUlDLGtCQUFrQkgsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUF0QjtBQUNBRSxvQkFBZ0JDLGdCQUFoQixDQUFpQyxRQUFqQztBQUNIOztBQUVEIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRfdGFzaywgcmVtb3ZlX3Rhc2sgfSBmcm9tICcuL21vZGVsJ1xyXG5pbXBvcnQgeyB1cGRhdGVfdmlldyB9IGZyb20gJy4vdmlldydcclxuXHJcbmxldCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3RleHQnKVxyXG5pZiAoIWlucHV0RmllbGQpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0X3RleHRcIj4nXHJcbiAgICBsZXQgaW5wdXRGaWVsZEFkZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3RleHQnKVxyXG4gICAgaW5wdXRGaWVsZEFkZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFkZF90YXNrKVxyXG59XHJcblxyXG51cGRhdGVfdmlldygpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);