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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// This module will emulate a scrollspy feature, by attaching itself to trigger dom nodes and animating the scroll of the page appropriately

//TODO: Add Speed feature
//TODO: Add registration feature that appends the trigger's target node's height to a data element on the node to allow for less compute time

const init = () => {
	document.querySelectorAll('.scroll-spy-trigger').forEach(ele => {
		let worked = appendScrollEffect(ele);
		if (!worked) console.error('Element was not an anchor');
	});
};

const appendScrollEffect = element => {
	const isAnchor = element.hasAttribute('data-target');
	if (!isAnchor) return false;
	// Abstract this out in registration feature
	element.onclick = () => {
		let currentTop = window.scrollY;
		let targetPos = document.querySelector(`${element.dataset.target}`).getBoundingClientRect().top + currentTop;

		animateScroll(targetPos - currentTop, targetPos);
	};
	return true;
};

const animateScroll = (difference, end) => {
	// Set velocity which determines direction
	let velocity = 2;

	if (difference < 0) velocity *= -1;
	if (end < 0) end *= -1;

	let scrolling = window.setInterval(() => {
		window.scroll(0, window.scrollY + velocity);
		const curpos = window.scrollY;
		if (curpos >= end - 2 && curpos <= end + 2 || curpos >= document.body.clientHeight - window.innerHeight) return window.clearInterval(scrolling);
	}, .001);
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ })
/******/ ]);