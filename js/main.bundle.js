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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/js/src/controller.js":
/*!************************************!*\
  !*** ./build/js/src/controller.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _model = __webpack_require__(/*! ./model */ \"./build/js/src/model.js\");\n\nvar _model2 = _interopRequireDefault(_model);\n\nvar _view = __webpack_require__(/*! ./view */ \"./build/js/src/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _handleFunctions = __webpack_require__(/*! ./handleFunctions */ \"./build/js/src/handleFunctions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  guesses: 0,\n\n  processGuess: function processGuess(location) {\n    if (location) {\n      this.guesses++;\n      var viewGuesses = document.querySelector(\"#numberGuesses\");\n\n      viewGuesses.innerHTML = \"Guesses: \" + this.guesses;\n\n      var hit = _model2.default.fire(location);\n\n      if (hit && _model2.default.shipsSunk === _model2.default.numShips) {\n        var guessInput = document.getElementById(\"guessInput\");\n        var fireButton = document.getElementById(\"fireButton\");\n        var table = document.getElementById(\"table\");\n\n        _view2.default.displayMessage(\"You sank all my battleships, in \" + this.guesses + \" guesses\");\n        fireButton.style.display = \"none\";\n        guessInput.setAttribute(\"disabled\", true);\n        table.removeEventListener(\"click\", _handleFunctions.handleClick);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./build/js/src/controller.js?");

/***/ }),

/***/ "./build/js/src/handleFunctions.js":
/*!*****************************************!*\
  !*** ./build/js/src/handleFunctions.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.handleClick = exports.handleRestart = exports.handleKeyPress = exports.handleFireButton = exports.parseGuess = undefined;\n\nvar _model = __webpack_require__(/*! ./model */ \"./build/js/src/model.js\");\n\nvar _model2 = _interopRequireDefault(_model);\n\nvar _controller = __webpack_require__(/*! ./controller */ \"./build/js/src/controller.js\");\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nvar _init = __webpack_require__(/*! ./init */ \"./build/js/src/init.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction parseGuess(guess) {\n  var alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\"];\n\n  if (guess === null || guess.length !== 2) {\n    alert(\"Oops, please enter a letter and a number on the board.\");\n  } else {\n    var firstChar = guess.charAt(0);\n    var row = alphabet.indexOf(firstChar);\n    var column = guess.charAt(1);\n\n    if (isNaN(row) || isNaN(column)) {\n      alert(\"Oops, that isn't on the board.\");\n    } else if (row < 0 || row >= _model2.default.boardSize || column < 0 || column >= _model2.default.boardSize) {\n      alert(\"Oops, that's off the board!\");\n    } else {\n      return row + column;\n    }\n  }\n  return null;\n}\n\nfunction handleFireButton(e) {\n  e.preventDefault();\n\n  var guessInput = document.getElementById(\"guessInput\");\n  var guess = guessInput.value.toUpperCase();\n  var location = parseGuess(guess);\n\n  _controller2.default.processGuess(location);\n\n  guessInput.value = \"\";\n}\n\nfunction handleKeyPress(e) {\n  var fireButton = document.getElementById(\"fireButton\");\n\n  if (e.keyCode === 13) {\n    e.preventDefault();\n\n    fireButton.click();\n    return false;\n  }\n}\n\nfunction handleRestart(e) {\n  e.preventDefault();\n\n  location.reload();\n  (0, _init.init)();\n}\n\nfunction handleClick(e) {\n  _controller2.default.processGuess(e.target.id);\n}\n\nexports.parseGuess = parseGuess;\nexports.handleFireButton = handleFireButton;\nexports.handleKeyPress = handleKeyPress;\nexports.handleRestart = handleRestart;\nexports.handleClick = handleClick;\n\n//# sourceURL=webpack:///./build/js/src/handleFunctions.js?");

/***/ }),

/***/ "./build/js/src/init.js":
/*!******************************!*\
  !*** ./build/js/src/init.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.init = undefined;\n\nvar _handleFunctions = __webpack_require__(/*! ./handleFunctions */ \"./build/js/src/handleFunctions.js\");\n\nvar _model = __webpack_require__(/*! ./model */ \"./build/js/src/model.js\");\n\nvar _model2 = _interopRequireDefault(_model);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction init() {\n  var table = document.getElementById(\"table\");\n  var fireButton = document.getElementById(\"fireButton\");\n  var guessInput = document.getElementById(\"guessInput\");\n  var restartButton = document.getElementById(\"restartButton\");\n\n  table.addEventListener(\"click\", _handleFunctions.handleClick);\n  fireButton.addEventListener(\"click\", _handleFunctions.handleFireButton);\n  guessInput.addEventListener(\"keypress\", _handleFunctions.handleKeyPress);\n  restartButton.addEventListener(\"click\", _handleFunctions.handleRestart);\n\n  _model2.default.generateShipLocations();\n\n  console.log(_model2.default.ships);\n}\n\nexports.init = init;\n\n//# sourceURL=webpack:///./build/js/src/init.js?");

/***/ }),

/***/ "./build/js/src/main.js":
/*!******************************!*\
  !*** ./build/js/src/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _init = __webpack_require__(/*! ./init */ \"./build/js/src/init.js\");\n\nwindow.onload = _init.init;\n\n//# sourceURL=webpack:///./build/js/src/main.js?");

/***/ }),

/***/ "./build/js/src/model.js":
/*!*******************************!*\
  !*** ./build/js/src/model.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _view = __webpack_require__(/*! ./view */ \"./build/js/src/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  boardSize: 7,\n  numShips: 3,\n  shipLength: 3,\n  shipsSunk: 0, //кол-во сбитых кораблей\n\n  ships: [{ locations: [], hits: [] }, { locations: [], hits: [] }, { locations: [], hits: [] }],\n\n  fire: function fire(guess) {\n    for (var i = 0; i < this.numShips; i++) {\n      var ship = this.ships[i];\n      var index = ship.locations.indexOf(guess);\n\n      if (index >= 0) {\n        ship.hits[index] = \"hit\";\n        _view2.default.displayHit(guess);\n\n        if (this.isSunk(ship)) {\n          _view2.default.displayMessage(\"You sank my battleship!\");\n          this.shipsSunk++;\n        }\n\n        return true;\n      }\n    }\n\n    _view2.default.displayMiss(guess);\n\n    return false;\n  },\n\n  isSunk: function isSunk(_ref) {\n    var hits = _ref.hits;\n\n    for (var i = 0; i < this.shipLength; i++) {\n      if (hits[i] !== \"hit\") {\n        return false;\n      }\n    }\n\n    return true;\n  },\n\n  generateShipLocations: function generateShipLocations() {\n    var locations = void 0;\n\n    for (var i = 0; i < this.numShips; i++) {\n      do {\n        locations = this.generateShip();\n      } while (this.collision(locations));\n      this.ships[i].locations = locations;\n    }\n    for (var _i = 0; _i < this.ships.length; _i++) {}\n  },\n\n  generateShip: function generateShip() {\n    var newShipLocations = [];\n    var direction = Math.floor(Math.random() * 2); // решает будет ли корабль расположен по вертикали или по горезонтали\n    var row = void 0,\n        col = void 0;\n\n    if (direction) {\n      // horizontal\n      row = Math.floor(Math.random() * this.boardSize); // от 0 до 6\n      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1) // от 0 до 5\n      );\n    } else {\n      // vertical\n      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));\n      col = Math.floor(Math.random() * this.boardSize);\n    }\n\n    for (var i = 0; i < this.shipLength; i++) {\n      if (direction) {\n        newShipLocations.push(row + \"\" + (col + i));\n      } else {\n        newShipLocations.push(row + i + \"\" + col);\n      }\n    }\n\n    return newShipLocations;\n  },\n\n  collision: function collision(locations) {\n    for (var i = 0; i < this.numShips; i++) {\n      var ship = this.ships[i];\n\n      for (var j = 0; j < locations.length; j++) {\n        if (ship.locations.indexOf(locations[j]) >= 0) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n};\n\n//# sourceURL=webpack:///./build/js/src/model.js?");

/***/ }),

/***/ "./build/js/src/view.js":
/*!******************************!*\
  !*** ./build/js/src/view.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  displayMessage: function displayMessage(msg) {\n    var message = document.getElementById(\"messageArea\");\n\n    message.innerHTML = msg;\n  },\n\n  displayHit: function displayHit(location) {\n    var cell = document.getElementById(location);\n\n    if (cell.classList.contains(\"hit\")) {\n      this.displayMessage(\"Oops, you already hit that location!\");\n    } else {\n      cell.setAttribute(\"class\", \"hit\");\n\n      this.displayMessage(\"HIT!\");\n    }\n  },\n\n  displayMiss: function displayMiss(location) {\n    var cell = document.getElementById(location);\n\n    if (cell.classList.contains(\"miss\")) {\n      this.displayMessage(\"You already shot here!\");\n    } else {\n      cell.setAttribute(\"class\", \"miss\");\n\n      this.displayMessage(\"You missed.\");\n    }\n  }\n};\n\n//# sourceURL=webpack:///./build/js/src/view.js?");

/***/ })

/******/ });