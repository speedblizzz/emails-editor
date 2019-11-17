(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmailsEditor"] = factory();
	else
		root["EmailsEditor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/editor/styles.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/scss/editor/styles.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".emails-editor{width:100%;min-width:280px;height:96px;padding:8px 7px;background:#fff;border:1px solid #c3c2cf;font-family:Open Sans,Arial,sans-serif;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-x:hidden;overflow-y:auto;cursor:text}.emails-editor .emails-editor__email-editor{font-size:inherit!important}.emails-editor__email{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:24px;max-width:100%;padding-left:10px;padding-right:8px;margin-bottom:3px;margin-right:4px;font-size:14px;line-height:24px;background:rgba(102,153,255,.2);border-radius:100px;cursor:default}.emails-editor__email--wrong{background-color:rgba(0,0,0,0);color:rgba(5,0,56,.6)}.emails-editor__email--wrong .emails-editor__email-content{border-bottom:1px dashed #d14836}.emails-editor__email-content{position:relative;max-width:calc(100% - 8px);max-height:100%;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:inline-block;vertical-align:middle;padding-right:8px}.emails-editor__email-wrapper{background:none}.emails-editor__email-wrapper:first-child{min-width:140px}.emails-editor__email-input{position:absolute;top:0;left:10px;height:inherit;width:calc(100% - 30px);padding:0;margin:0;font-size:14px;line-height:inherit;border:none;background-color:rgba(0,0,0,0);opacity:0;z-index:1}.emails-editor__email-remove{display:inline-block;width:8px;height:8px;cursor:pointer}.emails-editor__email-remove svg{display:block;width:inherit;height:inherit}.emails-editor__input{left:0;width:100%;opacity:1;border-radius:0;-webkit-appearance:none;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:none}.emails-editor__input-content{opacity:0}.emails-editor::-webkit-scrollbar{width:4px;height:4px}.emails-editor::-webkit-scrollbar-thumb{background-color:#827f9b;border:0 solid rgba(0,0,0,0);border-radius:2px}.emails-editor::-webkit-scrollbar-track{background-color:initial}", "",{"version":3,"sources":["C:\\Users\\Sponom\\Desktop\\emails-editor/src\\scss\\editor\\styles.scss"],"names":[],"mappings":"AAAA,eACE,UAAW,CACX,eAAgB,CAChB,WAAY,CACZ,eAAgB,CAChB,eAAmB,CACnB,wBAAyB,CACzB,sCAA2C,CAC3C,iBAAkB,CAClB,6BAAsB,CAAtB,qBAAsB,CACtB,iBAAkB,CAClB,eAAgB,CAChB,WAAY,CAZd,4CAcI,2BAA6B,CAE/B,sBACE,iBAAkB,CAClB,0BAAoB,CAApB,0BAAoB,CAApB,mBAAoB,CACpB,wBAAmB,CAAnB,qBAAmB,CAAnB,kBAAmB,CACnB,WAAY,CACZ,cAAe,CACf,iBAAkB,CAClB,iBAAkB,CAClB,iBAAkB,CAClB,gBAAiB,CACjB,cAAe,CACf,gBAAiB,CACjB,+BAAoC,CACpC,mBAAoB,CACpB,cAAe,CACf,6BACE,8BAA6B,CAC7B,qBAA0B,CAF3B,2DAIG,gCAAiC,CAGrC,8BACE,iBAAkB,CAClB,0BAA2B,CAC3B,eAAgB,CAChB,yBAAuB,CAAvB,sBAAuB,CACvB,eAAgB,CAChB,kBAAmB,CACnB,oBAAqB,CACrB,qBAAsB,CACtB,iBAAkB,CAEpB,8BACE,eAAgB,CADjB,0CAGG,eAAgB,CAGpB,4BACE,iBAAkB,CAClB,KAAM,CACN,SAAU,CACV,cAAe,CACf,uBAAwB,CACxB,SAAU,CACV,QAAS,CACT,cAAe,CACf,mBAAoB,CACpB,WAAY,CACZ,8BAA6B,CAC7B,SAAU,CACV,SAAU,CAEZ,6BACE,oBAAqB,CACrB,SAAU,CACV,UAAW,CACX,cAAe,CAJhB,iCAMG,aAAc,CACd,aAAc,CACd,cAAe,CAIrB,sBACE,MAAO,CACP,UAAW,CACX,SAAU,CACV,eAAgB,CAChB,uBAAwB,CACxB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,YAAa,CAEf,8BACE,SAAU,CA5Fd,kCA+FI,SAAU,CACV,UAAW,CAhGf,wCAmGI,wBAAyB,CACzB,4BAA2B,CAC3B,iBAAkB,CArGtB,wCAwGI,wBAAyB","file":"styles.scss","sourcesContent":[".emails-editor {\r\n  width: 100%;\r\n  min-width: 280px;\r\n  height: 96px;\r\n  padding: 8px 7px;\r\n  background: #ffffff;\r\n  border: 1px solid #c3c2cf;\r\n  font-family: 'Open Sans', Arial, sans-serif;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  cursor: text;\r\n  & .emails-editor__email-editor {\r\n    font-size: inherit !important;\r\n  }\r\n  &__email {\r\n    position: relative;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    height: 24px;\r\n    max-width: 100%;\r\n    padding-left: 10px;\r\n    padding-right: 8px;\r\n    margin-bottom: 3px;\r\n    margin-right: 4px;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    background: rgba(102, 153, 255, 0.2);\r\n    border-radius: 100px;\r\n    cursor: default;\r\n    &--wrong {\r\n      background-color: transparent;\r\n      color: rgba(5, 0, 56, 0.6);\r\n      & .emails-editor__email-content {\r\n        border-bottom: 1px dashed #d14836;\r\n      }\r\n    }\r\n    &-content {\r\n      position: relative;\r\n      max-width: calc(100% - 8px);\r\n      max-height: 100%;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      padding-right: 8px;\r\n    }\r\n    &-wrapper {\r\n      background: none;\r\n      &:first-child {\r\n        min-width: 140px;\r\n      }\r\n    }\r\n    &-input {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 10px;\r\n      height: inherit;\r\n      width: calc(100% - 30px);\r\n      padding: 0;\r\n      margin: 0;\r\n      font-size: 14px;\r\n      line-height: inherit;\r\n      border: none;\r\n      background-color: transparent;\r\n      opacity: 0;\r\n      z-index: 1;\r\n    }\r\n    &-remove {\r\n      display: inline-block;\r\n      width: 8px;\r\n      height: 8px;\r\n      cursor: pointer;\r\n      & svg {\r\n        display: block;\r\n        width: inherit;\r\n        height: inherit;\r\n      }\r\n    }\r\n  }\r\n  &__input {\r\n    left: 0;\r\n    width: 100%;\r\n    opacity: 1;\r\n    border-radius: 0;\r\n    -webkit-appearance: none;\r\n    user-select: text;\r\n    outline: none;\r\n  }\r\n  &__input-content {\r\n    opacity: 0;\r\n  }\r\n  &::-webkit-scrollbar {\r\n    width: 4px;\r\n    height: 4px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    background-color: #827f9b;\r\n    border: 0 solid transparent;\r\n    border-radius: 2px;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    background-color: initial;\r\n  }\r\n}\r\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scss/editor/styles.scss */ "./src/scss/editor/styles.scss");

var _editorClass = __webpack_require__(/*! ./js/editorClass */ "./src/js/editorClass.js");

var _editorClass2 = _interopRequireDefault(_editorClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (container, options) {
  return new _editorClass2.default(container, options);
};

/***/ }),

/***/ "./src/images/remove.svg":
/*!*******************************!*\
  !*** ./src/images/remove.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z\" fill=\"#050038\"></path></svg>"

/***/ }),

/***/ "./src/js/editorClass.js":
/*!*******************************!*\
  !*** ./src/js/editorClass.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _remove = __webpack_require__(/*! ../images/remove.svg */ "./src/images/remove.svg");

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EMAIL_REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var ENTER_KEY_CODE = 13;
var COMMA_KEY_CODE = 188;
var BACKSPACE_KEY_CODE = 8;
var SPACEBAR_KEY_CODE = 32;
var INPUT_PLACEHOLDER = 'Add more people…';
var emailsAddEvent = {
  type: 'emails:added'
};
var emailsRemoveEvent = {
  type: 'emails:removed'
};
var defaultClasses = {
  editorContainer: 'emails-editor',
  email: 'emails-editor__email',
  emailWrapper: 'emails-editor__email-wrapper',
  emailContent: 'emails-editor__email-content',
  emailRemoveBtn: 'emails-editor__email-remove',
  emailInput: 'emails-editor__email-input',
  emailWrong: 'emails-editor__email--wrong',
  inputContent: 'emails-editor__input-content',
  input: 'emails-editor__input'
};
/**
 * EmailsEditor library
 * @class EmailsEditor
 */

var EmailsEditor =
/*#__PURE__*/
function () {
  /**
   * EmailsEditor constructor
   * @constructs EmailsEditor
   * @param {HTMLElement} container
   * @param {Object} options
   */
  function EmailsEditor(container, options) {
    _classCallCheck(this, EmailsEditor);

    if (container instanceof HTMLElement) {
      this.container = container;
    } else {
      throw new Error('Emails editor container is expected to be of type `HTMLElement`');
    }

    this.options = {
      classes: _objectSpread({}, defaultClasses, {}, options.classes)
    };
    this.emails = [];
    this.callbacks = {};
    this.init();
  }
  /**
   * Creates new editor container
   */


  _createClass(EmailsEditor, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.container.classList.add(this.getClassByName('editorContainer'));
      var newEmailContainer = this.createNewEmailInputElement();
      this.newEmailContainer = newEmailContainer;
      var emailInput = newEmailContainer.querySelector(".".concat(_this.getClassByName('emailInput')));
      this.container.appendChild(this.newEmailContainer);
      this.container.addEventListener('click', function (event) {
        if (_this.container !== event.target) return;
        emailInput.focus();
      });
    }
    /**
     * Returns only valid emails
     * @returns {Array}
     */

  }, {
    key: "getValidEmails",
    value: function getValidEmails() {
      var _this2 = this;

      return this.emails.filter(function (email) {
        return _this2.isValidEmail(email);
      });
    }
    /**
     * Returns all emails
     * @returns {Array}
     */

  }, {
    key: "getEmails",
    value: function getEmails() {
      return this.emails;
    }
    /**
     * Sets emails from array
     * @param {Array} emails
     */

  }, {
    key: "setEmails",
    value: function setEmails(emails) {
      if (emails && emails instanceof Array) {
        this.addEmails(emails.join(','));
      } else {
        throw new Error('`emails` param is expected to be of type `Array`');
      }
    }
    /**
     * Returns valid emails count
     * @returns {number}
     */

  }, {
    key: "getValidEmailsCount",
    value: function getValidEmailsCount() {
      return this.getValidEmails().length;
    }
    /**
     * Returns formated email
     * @param {String} email
     * @returns {String}
     */

  }, {
    key: "formatedEmail",
    value: function formatedEmail(email) {
      return String(email).trim().toLowerCase();
    }
    /**
     * Adds emails from string or array
     * @param {String} newEmails
     */

  }, {
    key: "addEmails",
    value: function addEmails(newEmails) {
      var _this3 = this;

      if (!newEmails || typeof newEmails !== 'string') return;

      var oldEmails = _toConsumableArray(this.emails);

      var formatedNEwEmails = newEmails.split(',').map(function (email) {
        return _this3.formatedEmail(email);
      });
      this.emails = _toConsumableArray(new Set([].concat(_toConsumableArray(this.emails), _toConsumableArray(formatedNEwEmails))));

      if (oldEmails.length !== this.emails.length) {
        this.renderEmails();
        this.trigger(_objectSpread({}, emailsAddEvent, {
          value: this.emails
        }));
      }
    }
    /**
     * Adds new random email
     */

  }, {
    key: "addRandomEmail",
    value: function addRandomEmail() {
      this.addEmails(this.generateRandomEmail());
    }
    /**
     * Removes email by index
     * @param {number} index
     */

  }, {
    key: "removeEmail",
    value: function removeEmail(index) {
      this.emails.splice(index, 1);
      this.renderEmails();
      this.trigger(_objectSpread({}, emailsRemoveEvent, {
        value: this.emails
      }));
    }
    /**
     * Renders emails
     */

  }, {
    key: "renderEmails",
    value: function renderEmails() {
      var _this4 = this;

      var _this = this;

      var emails = this.emails;
      var emailInput = this.newEmailContainer.querySelector(".".concat(_this.getClassByName('emailInput')));
      this.clearEmailsElements();
      emails.forEach(function (email, index) {
        var emailContainer = _this4.createEmailsElement(email, index);

        _this4.container.insertBefore(emailContainer, _this4.newEmailContainer);
      });
      this.setEmailInputPlaceholder(emailInput);
    }
    /**
     * Removes all added emails from main container instead of new email input container
     */

  }, {
    key: "clearEmailsElements",
    value: function clearEmailsElements() {
      var editorContainer = this.container;
      var editorContainerChildrenLength = editorContainer.childNodes.length;

      while (editorContainerChildrenLength >= 2) {
        var child = editorContainer.firstElementChild;
        editorContainer.removeChild(child);
        editorContainerChildrenLength = editorContainer.childNodes.length;
      }
    }
    /**
     * Returns new added email container element
     * @param {String} email
     * @param {number} index
     * @returns {HTMLElement}
     */

  }, {
    key: "createEmailsElement",
    value: function createEmailsElement(email, index) {
      var _this5 = this;

      var emailContainer = document.createElement('div');
      emailContainer.classList.add(this.getClassByName('email'));

      if (!this.isValidEmail(email)) {
        emailContainer.classList.add(this.getClassByName('emailWrong'));
      }

      var emailContent = document.createElement('span');
      emailContent.classList.add(this.getClassByName('emailContent'));
      emailContent.textContent = email;
      var emailRemoveBtn = document.createElement('span');
      emailRemoveBtn.classList.add(this.getClassByName('emailRemoveBtn'));
      emailRemoveBtn.innerHTML = _remove2.default;
      emailContainer.appendChild(emailContent);
      emailContainer.appendChild(emailRemoveBtn);
      emailRemoveBtn.addEventListener('click', function () {
        return _this5.removeEmail(index);
      });
      return emailContainer;
    }
    /**
     * Returns new email input container element
     * @returns {HTMLElement}
     */

  }, {
    key: "createNewEmailInputElement",
    value: function createNewEmailInputElement() {
      var _this = this;

      var newEmailContainer = document.createElement('div');
      newEmailContainer.classList.add(this.getClassByName('email'));
      newEmailContainer.classList.add(this.getClassByName('emailWrapper'));
      var newEmailContent = document.createElement('span');
      newEmailContent.classList.add(this.getClassByName('emailContent'));
      newEmailContent.classList.add(this.getClassByName('inputContent')); // Hack for saving email input height

      newEmailContent.textContent = 'x';
      var newEmailInput = document.createElement('input');
      newEmailInput.classList.add(this.getClassByName('emailInput'));
      newEmailInput.classList.add(this.getClassByName('input'));
      this.setEmailInputPlaceholder(newEmailInput);
      newEmailInput.setAttribute('type', 'text'); // Updates email content width for email input width changing

      newEmailInput.addEventListener('input', function (event) {
        var value = event.target.value;
        newEmailContent.textContent = value || 'x';
      }); // Event listener for email adding after text was pasted from clipboard

      newEmailInput.addEventListener('paste', function (event) {
        var value = event.clipboardData.getData('text');

        _this.addEmails(value);

        setTimeout(function () {
          _this.resetEmailInput(event.target, newEmailContent);
        }, 0);
      }); // Event listener for email adding after input was blurred

      newEmailInput.addEventListener('blur', function (event) {
        var email = event.target.value;

        if (email) {
          _this.addEmails(email);
        }

        _this.resetEmailInput(event.target, newEmailContent);
      }, false); // Event listener for email adding after Enter was pressed

      newEmailInput.addEventListener('keypress', function (event) {
        var email = event.target.value;

        if (email && event.keyCode === ENTER_KEY_CODE) {
          _this.addEmails(email);

          _this.resetEmailInput(event.target, newEmailContent);
        }
      }, false); // Event listener for email adding after comma or spacebar was pressed

      newEmailInput.addEventListener('keyup', function (event) {
        var email = event.target.value.replace(/,/gi, '');
        event.target.value = email;

        if (email && (event.keyCode === COMMA_KEY_CODE || event.keyCode === SPACEBAR_KEY_CODE)) {
          _this.addEmails(email);

          _this.resetEmailInput(event.target, newEmailContent);
        }
      }, false); // Event listener for last email removing after backspace was pressed

      newEmailInput.addEventListener('keydown', function (event) {
        var email = event.target.value;

        if (!email && event.keyCode === BACKSPACE_KEY_CODE) {
          var lastEmailIndex = _this.emails.length - 1;
          if (lastEmailIndex > -1) _this.removeEmail(lastEmailIndex);
        }
      }, false);
      newEmailContainer.appendChild(newEmailContent);
      newEmailContainer.appendChild(newEmailInput);
      return newEmailContainer;
    }
    /**
     * Sets email input placeholder
     * @param {HTMLElement} emailInput
     */

  }, {
    key: "setEmailInputPlaceholder",
    value: function setEmailInputPlaceholder(emailInput) {
      var inputPlaceholder = this.emails.length > 0 ? '' : INPUT_PLACEHOLDER;
      emailInput.setAttribute('placeholder', inputPlaceholder);
    }
    /**
     * Resets email input and content value after new email was added
     * @param {HTMLElement} emailInput
     * @param {HTMLElement} emailContent
     * @memberof EmailsEditor
     */

  }, {
    key: "resetEmailInput",
    value: function resetEmailInput(emailInput, emailContent) {
      emailInput.value = ''; // Hack for saving input container height

      emailContent.textContent = 'x';
    }
    /**
     *
     * Returns class by name/object key for editor elements
     * @param {String} className
     * @returns {String}
     */

  }, {
    key: "getClassByName",
    value: function getClassByName(className) {
      return this.options.classes[className];
    }
    /**
     * Checks if email is valid
     * @param {String} email
     * @returns {Boolean}
     */

  }, {
    key: "isValidEmail",
    value: function isValidEmail(email) {
      return EMAIL_REG_EXP.test(this.formatedEmail(email));
    }
    /**
     * Generates random string for random email
     * @param {number} [length=4]
     * @returns {String}
     */

  }, {
    key: "generateRandomString",
    value: function generateRandomString() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';

      for (var i = length; i > 0; --i) {
        result += charset[Math.floor(Math.random() * charset.length)];
      }

      return result;
    }
    /**
     * Generates new random email
     * @returns {String}
     */

  }, {
    key: "generateRandomEmail",
    value: function generateRandomEmail() {
      var randomEmailLength = Math.floor(Math.random() * (20 - 4)) + 4;
      var randomEmail = "".concat(this.generateRandomString(randomEmailLength), "@miro.com");
      return randomEmail;
    }
    /**
     * Registers calllbacks by event name
     * @param {String} type
     * @param {...Function} callbacks
     */

  }, {
    key: "on",
    value: function on(type) {
      var _this$callbacks$type;

      if (!this.callbacks[type]) {
        this.callbacks[type] = [];
      }

      for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        callbacks[_key - 1] = arguments[_key];
      }

      (_this$callbacks$type = this.callbacks[type]).push.apply(_this$callbacks$type, callbacks);

      return this;
    }
    /**
     * Unregisters callbacks by event name
     * @param {String} type
     * @param {Function} callback
     */

  }, {
    key: "off",
    value: function off(type, callback) {
      if (!this.callbacks[type]) {
        return null;
      }

      var copy = this.callbacks[type].slice(0);

      for (var i = 0, copyLength = copy.length; i < copyLength; i++) {
        if (callback === copy[i]) {
          this.callbacks[type].splice(i, 1);
        }
      }

      return this;
    }
    /**
     * Triggers event callbacks by event object
     * @param {Object} event
     */

  }, {
    key: "trigger",
    value: function trigger(event) {
      if (!this.callbacks[event.type]) {
        return null;
      }

      var callbacks = _toConsumableArray(this.callbacks[event.type]);

      var caughtErrors = [];

      for (var i = callbacks.length - 1; i >= 0; i--) {
        var callback = callbacks[i];

        try {
          callback(event);
        } catch (error) {
          caughtErrors.push(error);
        }
      }

      if (caughtErrors.length) {
        console.error("EmailsEditor caught errors while triggering '".concat(event.type, "'"), caughtErrors);
      }

      return this;
    }
  }]);

  return EmailsEditor;
}();

exports.default = EmailsEditor;

/***/ }),

/***/ "./src/scss/editor/styles.scss":
/*!*************************************!*\
  !*** ./src/scss/editor/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/editor/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
});