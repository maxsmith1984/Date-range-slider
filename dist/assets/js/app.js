/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("let sliders = document.querySelectorAll('.range-slider');\r\n\r\nfor (let i = 0; i < sliders.length; i++) {\r\n    init_slider(sliders[i]);\r\n}\r\n\r\nfunction init_slider(slider) {\r\n    const range = slider.querySelectorAll('.progress__range');\r\n    const progress = slider.querySelector('.progress__line');\r\n    let gap = 1;\r\n\r\n    const inputMin = slider.querySelector('.value__min');\r\n    const inputMax = slider.querySelector('.value__max');\r\n\r\n\r\n    range.forEach(input => {\r\n        input.addEventListener('input', event => {\r\n            let minrange = parseInt(range[0].value);\r\n            let maxrange = parseInt(range[1].value);\r\n            console.log(minrange)\r\n            inputMin.style.left = minrange + '%';\r\n            inputMax.style.left = maxrange + '%';\r\n\r\n\r\n\r\n            if (maxrange - minrange < gap) {\r\n\r\n\r\n                if (event.target.className === 'progress__min progress__range') {\r\n\r\n                    range[0].value = maxrange - gap;\r\n\r\n                }\r\n                else {\r\n                    range[1].value = minrange + gap;\r\n                }\r\n            }\r\n            else {\r\n                progress.style.left = (minrange / range[0].max) * 100 + '%';\r\n                progress.style.right = 100 - (maxrange / range[1].max) * 100 + '%';\r\n\r\n                inputMin.innerHTML = `${newArray[minrange]}`;\r\n                inputMax.innerHTML = `${newArray[maxrange]}`;\r\n\r\n\r\n            }\r\n\r\n\r\n        });\r\n\r\n    });\r\n\r\n\r\n\r\n    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];\r\n\r\n    const year = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];\r\n\r\n\r\n\r\n    const newArray = [];\r\n\r\n    year.forEach(y => {\r\n        month.forEach(m => {\r\n            newArray.push(y + '  ' + m)\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;