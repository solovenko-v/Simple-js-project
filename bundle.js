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


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove_task = remove_task;
function remove_task(id) {
    var list = JSON.parse(localStorage.getItem('todo'));
    localStorage.setItem('todo', list.filter(function (item) {
        return item !== id;
    }));
}

// export function add_task() {
//     let list = JSON.parse(localStorage.getItem('todo'))
//     // max_ind = list.reduce((maxind, ind) => {})
//     list.push({
//         id: 1,
//         text: document.getElementById('input_text').innerText 
//     })
//     localStorage.setItem('todo', list)
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.update_view = update_view;
function update_view(list) {
    var html_list = list.reduce(function (previous, current) {
        return previous + "<li>" + current.text + "\n                    <button onclick=\"remove_task(" + current.id + ")\">x</button></li>";
    }, '');
    document.getElementById("main").innerHTML = "<ul>\n        " + html_list + "\n    </ul>";
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // import { add_task } from './model'


var _model = __webpack_require__(0);

var _view = __webpack_require__(1);

var list_text = localStorage.getItem('todo');
if (typeof list_text !== 'undefined' && list_text !== '') {
    alert(typeof list_text === 'undefined' ? 'undefined' : _typeof(list_text));
    (0, _view.update_view)(JSON.parse(list_text));
    alert(1);
}

function add_task() {
    var list_text = localStorage.getItem('todo');
    if (typeof list_text !== 'undefined' && list_text !== '') {
        list = JSON.parse(list_text);
        max_id = list.reduce(function (maxid, el) {
            return el.id > maxid ? el.id : maxid;
        });
    } else {
        max_id = 0;
        list = new Array();
    }
    list.push({
        id: max_id + 1,
        text: document.getElementById('input_text').innerText
    });
    localStorage.setItem('todo', list);
}

/***/ })
/******/ ]);