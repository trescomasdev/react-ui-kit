module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(146);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(126);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(127);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(16);

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(105);

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error(process.env.NODE_ENV !== 'production' ? 'Unable to get document size' : '');
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if (process.env.NODE_ENV !== 'production' && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(10);

var _background = __webpack_require__(12);

var _border = __webpack_require__(23);

var _borderRadius = __webpack_require__(109);

var _display = __webpack_require__(110);

var _float = __webpack_require__(111);

var _font = __webpack_require__(112);

var _letterSpacing = __webpack_require__(113);

var _lineBreak = __webpack_require__(114);

var _listStyle = __webpack_require__(17);

var _margin = __webpack_require__(115);

var _overflow = __webpack_require__(116);

var _overflowWrap = __webpack_require__(39);

var _padding = __webpack_require__(40);

var _position = __webpack_require__(41);

var _textDecoration = __webpack_require__(24);

var _textShadow = __webpack_require__(117);

var _textTransform = __webpack_require__(42);

var _transform = __webpack_require__(118);

var _visibility = __webpack_require__(119);

var _wordBreak = __webpack_require__(120);

var _zIndex = __webpack_require__(121);

var _Bounds = __webpack_require__(6);

var _Input = __webpack_require__(34);

var _ListItem = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (process.env.NODE_ENV !== 'production') {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(107);

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(16);

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(6);

var _padding = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (process.env.NODE_ENV !== 'production') {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(44);

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(42);

var _TextBounds = __webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (process.env.NODE_ENV !== 'production') {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(12);

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var decimal = exports.decimal = {
  'en-US': '.',
  ar: '٫'
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = exports.dotDecimal = [];
var commaDecimal = exports.commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-Pl', 'pt-PT', 'ru-RU', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(10);

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(14);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(17);

var _Unicode = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(129);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.setClass = _this.setClass.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'setClass',
    value: function setClass() {
      var classes = ["button", this.props.type ? this.props.type : "default"];

      if (this.props.size) classes.push(this.props.size);

      if (this.props.margin) classes.push(this.props.margin);

      return classes.join(" ");
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'button',
        { id: this.props.id, className: this.setClass(), onClick: this.props._onClick },
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'setClass',
    value: function setClass() {
      var classes = ["input", this.props.type ? this.props.type : "default"];

      if (this.props.size) classes.push(this.props.size);

      if (this.props.margin) classes.push(this.props.margin);

      return classes.join(" ");
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('input', {
        id: this.props.id,
        className: this.setClass(),
        placeholder: this.props.placeholder,
        type: this.props.type,
        name: this.props.name,
        value: this.props._value,
        onChange: this.props._onChange
      });
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabeledInput = function (_Component) {
  _inherits(LabeledInput, _Component);

  function LabeledInput(props) {
    _classCallCheck(this, LabeledInput);

    var _this = _possibleConstructorReturn(this, (LabeledInput.__proto__ || Object.getPrototypeOf(LabeledInput)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    return _this;
  }

  _createClass(LabeledInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("click", this.handleClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.addEventListener("click", this.handleClick);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {

      if (!this.wrapper || this.wrapper.contains(e.target)) return false;

      return this.onBlur();
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.wrapper.classList.add("focused");
      if (this.props._onFocus) this.props._onFocus();
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      this.wrapper.classList.remove("focused");
      if (this.props._onBlur) this.props._onBlur();
    }
  }, {
    key: 'setClass',
    value: function setClass(classes) {

      if (this.props._value !== "" && this.props._value !== undefined) classes.push("populated");

      if (this.props.focused) classes.push("focused");

      if (this.props.validate) {
        if ((!this.props.error || !this.props.error.length > 0) && this.props._value !== "" && this.props._value !== undefined) classes.push("valid");

        if (this.props.error && this.props.error.length > 0) classes.push("invalid");
      }

      return classes.join(" ");
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.setClass(["labeled-input"]), ref: function ref(_ref) {
            return _this2.wrapper = _ref;
          } },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            name: this.props.name,
            type: this.props.type || "text",
            value: this.props._value || "",
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            onFocus: this.onFocus,
            onChange: this.props._onChange
          }),
          _react2.default.createElement(
            'span',
            null,
            this.props.placeholder
          )
        ),
        this.props.validate && this.props.error && this.props.error.length > 0 ? _react2.default.createElement(
          'span',
          { className: 'error' },
          this.props.error.join(this.props.errorDivider ? this.props.errorDivider : " ")
        ) : null
      );
    }
  }]);

  return LabeledInput;
}(_react.Component);

exports.default = LabeledInput;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(20);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error(process.env.NODE_ENV !== 'production' ? 'No document found for font metrics' : '');
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(14);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(12);

var _border = __webpack_require__(23);

var _Circle = __webpack_require__(106);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(16);

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(6);

var _TextBounds = __webpack_require__(37);

var _Util = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(13);

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject(process.env.NODE_ENV !== 'production' ? 'No proxy defined' : null);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject(process.env.NODE_ENV !== 'production' ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : '');
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : '');
            };
        }

        xhr.send();
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(6);

var _textDecoration = __webpack_require__(24);

var _Feature = __webpack_require__(13);

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(76);

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(15);

var _textDecoration = __webpack_require__(24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminPanelPanel = exports.AdminPanelSection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _html2canvas = __webpack_require__(108);

var _html2canvas2 = _interopRequireDefault(_html2canvas);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminPanelSection = exports.AdminPanelSection = function (_Component) {
  _inherits(AdminPanelSection, _Component);

  function AdminPanelSection() {
    _classCallCheck(this, AdminPanelSection);

    return _possibleConstructorReturn(this, (AdminPanelSection.__proto__ || Object.getPrototypeOf(AdminPanelSection)).apply(this, arguments));
  }

  _createClass(AdminPanelSection, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: 'admin-panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-section' },
          this.props.children
        )
      );
    }
  }]);

  return AdminPanelSection;
}(_react.Component);

var AdminPanelPanel = exports.AdminPanelPanel = function (_Component2) {
  _inherits(AdminPanelPanel, _Component2);

  function AdminPanelPanel(props) {
    _classCallCheck(this, AdminPanelPanel);

    var _this2 = _possibleConstructorReturn(this, (AdminPanelPanel.__proto__ || Object.getPrototypeOf(AdminPanelPanel)).call(this, props));

    _this2.state = {
      collapsed: _this2.props.collapsed || false
    };

    _this2.setClass = _this2.setClass.bind(_this2);
    _this2.togglePanel = _this2.togglePanel.bind(_this2);
    _this2.capturePanel = _this2.capturePanel.bind(_this2);
    return _this2;
  }

  _createClass(AdminPanelPanel, [{
    key: 'setClass',
    value: function setClass() {
      var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      if (this.props.size) classes.push(this.props.size);

      if (this.state.collapsed === true) classes.push("collapsed");

      return classes.join(" ");
    }
  }, {
    key: 'capturePanel',
    value: function capturePanel() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "capture";

      (0, _html2canvas2.default)(this.panel).then(function (canvas) {
        var el = document.getElementById("content").appendChild(canvas);
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'capture.jpg';
        a.click();
        a.remove();
        el.remove();
      });
    }
  }, {
    key: 'togglePanel',
    value: function togglePanel() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var panelTitle = this.props.icon ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactFontawesome2.default, { name: this.props.icon }),
        this.props.title
      ) : _react2.default.createElement(
        'div',
        null,
        this.props.title
      );

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.setClass(["panel"]), ref: function ref(_ref) {
            return _this3.panel = _ref;
          } },
        _react2.default.createElement(
          'div',
          { className: 'panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'panel-title' },
            panelTitle
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-actions' },
            this.props.capture ? _react2.default.createElement(_reactFontawesome2.default, { key: 'capture', name: 'camera', onClick: this.capturePanel }) : null,
            this.props.actions,
            _react2.default.createElement(_reactFontawesome2.default, { name: this.state.collapsed ? "chevron-down" : "chevron-up", onClick: this.togglePanel })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-content' },
          this.props.children
        ),
        _react2.default.createElement('div', { className: 'panel-footer' })
      );
    }
  }]);

  return AdminPanelPanel;
}(_react.Component);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DockedMenu = function (_Component) {
  _inherits(DockedMenu, _Component);

  function DockedMenu(props) {
    _classCallCheck(this, DockedMenu);

    var _this = _possibleConstructorReturn(this, (DockedMenu.__proto__ || Object.getPrototypeOf(DockedMenu)).call(this, props));

    _this.state = {
      toggled: false
    };
    return _this;
  }

  _createClass(DockedMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { id: 'docked-menu', className: this.state.toggled ? "toggled" : "" },
        this.props.children,
        _react2.default.createElement(
          'div',
          { className: 'toggle', onClick: function onClick() {
              return _this2.setState({ toggled: !_this2.state.toggled });
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: this.state.toggled ? "chevron-right" : "chevron-left" })
        )
      );
    }
  }]);

  return DockedMenu;
}(_react.Component);

exports.default = DockedMenu;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_Component) {
  _inherits(FileUpload, _Component);

  function FileUpload(props) {
    _classCallCheck(this, FileUpload);

    var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(FileUpload, [{
    key: 'onChange',
    value: function onChange(e) {
      var fileName = '';

      fileName = e.target.value.split('\\').pop();

      if (fileName) this.labelText.innerHTML = fileName;

      this.props._onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'file-upload' },
        _react2.default.createElement('input', { type: 'file', 'data-imageType': this.props.imageType, name: this.props.name, id: this.props.id, className: 'inputfile inputfile-5', onChange: this.onChange }),
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'upload' }),
          _react2.default.createElement(
            'span',
            { ref: function ref(_ref) {
                return _this2.labelText = _ref;
              } },
            this.props.label ? this.props.label : "Choose a file…"
          )
        )
      );
    }
  }]);

  return FileUpload;
}(_react.Component);

exports.default = FileUpload;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fields = exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _validation = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = exports.Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    var initialValues = {};

    if (_this.props.children.length > 0) {
      _this.props.children.forEach(function (data, key) {
        if (data && data.props._value) initialValues[data.props.name] = data.props._value;
      });
    } else {
      if (_this.props.children.props._value) initialValues[_this.props.children.props.name] = _this.props.children.props._value;
    }

    _this.state = { values: initialValues, errors: {} };

    _this.onChangeInput = _this.onChangeInput.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);

    return _this;
  }

  _createClass(Form, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.childs.length > 0) {
        this.childs.forEach(function (data, key) {
          _this2.validateChilds(data, key);
        });
      } else {
        this.validateChilds(this.childs);
      }

      this.props.onSubmit(this.state);
    }
  }, {
    key: 'onChangeInput',
    value: function onChangeInput(e) {
      var triggered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var values = this.state.values;
      var errors = this.state.errors;
      var obj = triggered ? e.props : e.target;
      var value = triggered ? e.props._value : e.target.value;

      delete errors[obj.name];
      var validate = (0, _validation.validateInput)(value, this.props.validations[obj.name], this.state.values);

      values[obj.name] = validate.value;

      if (validate.error.length > 0) errors[obj.name] = validate.error;

      this.setState({ values: values, errors: errors });
    }
  }, {
    key: 'validateChilds',
    value: function validateChilds(data, key) {
      var _this3 = this;

      if (!data) return false;

      if (data.type.name === "Fields" && data.props.children.length > 0) {
        data.props.children.forEach(function (grand, key) {
          if (grand.props.submit === true) return null;

          if (grand.props.field === true) _this3.onChangeInput(grand, true);
        });
      } else if (data.type.name === "Fields") {
        if (data.props.submit === true) return null;

        if (data.props.field === true) this.onChangeInput(data, true);
      }
    }
  }, {
    key: 'renderChilds',
    value: function renderChilds(data, key) {
      var _this4 = this;

      if (!data) return false;

      if (data.type.name === "Fields" && data.props.children.length > 0) {
        var grands = data.props.children.map(function (grand, grandKey) {
          if (grand.props.submit === true) return _react2.default.cloneElement(grand, { _onClick: _this4.onSubmit, key: grandKey });

          if (grand.props.field === true) return _react2.default.cloneElement(grand, { _onChange: _this4.onChangeInput, _value: _this4.state.values[grand.props.name], error: _this4.state.errors[grand.props.name], key: grandKey });

          return grand;
        });

        return _react2.default.cloneElement(data, { children: grands, key: key });
      } else if (data.type.name === "Fields") {
        var grand = data.props.children;

        if (data.props.children.props.submit === true) {
          grand = _react2.default.cloneElement(data.props.children, { _onClick: this.onSubmit, key: key });
        }

        if (data.props.children.props.field === true) grand = _react2.default.cloneElement(data.props.children, { _onChange: this.onChangeInput, _value: this.state.values[data.props.children.name], error: this.state.errors[data.props.children.name], key: key });

        return _react2.default.cloneElement(data, { children: grand, key: key });
      }

      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      this.childs = this.props.children.length > 0 ? this.props.children.map(function (data, key) {
        return _this5.renderChilds(data, key);
      }) : this.renderChilds(this.props.children);

      return _react2.default.createElement(
        'form',
        { className: this.props.className ? this.props.className + " form-validated" : "form-validated" },
        this.childs
      );
    }
  }]);

  return Form;
}(_react.Component);

var Fields = exports.Fields = function (_Component2) {
  _inherits(Fields, _Component2);

  function Fields() {
    _classCallCheck(this, Fields);

    return _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
  }

  _createClass(Fields, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'form-fields' },
        this.props.children
      );
    }
  }]);

  return Fields;
}(_react.Component);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoTable = function (_Component) {
  _inherits(InfoTable, _Component);

  function InfoTable() {
    _classCallCheck(this, InfoTable);

    return _possibleConstructorReturn(this, (InfoTable.__proto__ || Object.getPrototypeOf(InfoTable)).apply(this, arguments));
  }

  _createClass(InfoTable, [{
    key: 'render',
    value: function render() {

      var rows = this.props.data.length > 0 ? this.props.data.map(function (data, key) {
        return _react2.default.createElement(
          'tr',
          { key: key, className: data.rowClass },
          _react2.default.createElement(
            'th',
            null,
            data.icon ? _react2.default.createElement(
              'div',
              { className: 'icon-holder' },
              _react2.default.createElement(_reactFontawesome2.default, { name: data.icon })
            ) : null,
            _react2.default.createElement(
              'span',
              null,
              data.label
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            data.value
          )
        );
      }) : undefined;

      return _react2.default.createElement(
        'div',
        { className: this.props.className ? "info-table " + this.props.className : "info-table" },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            rows
          )
        )
      );
    }
  }]);

  return InfoTable;
}(_react.Component);

exports.default = InfoTable;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabeledCheckbox = function (_Component) {
  _inherits(LabeledCheckbox, _Component);

  function LabeledCheckbox() {
    _classCallCheck(this, LabeledCheckbox);

    return _possibleConstructorReturn(this, (LabeledCheckbox.__proto__ || Object.getPrototypeOf(LabeledCheckbox)).apply(this, arguments));
  }

  _createClass(LabeledCheckbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className ? "labeled-checkbox " + this.props.className : "labeled-checkbox" },
        _react2.default.createElement('input', { id: this.props.id, name: this.props.name, className: 'toggle-status', type: 'checkbox', checked: this.props.checked ? "checked" : "", value: this.props.checked ? 1 : 0, onChange: this.props._onChange }),
        _react2.default.createElement('label', { htmlFor: this.props.id, className: this.props.rounded ? "toggle-switch  toggle-rounded" : "toggle-switch" }),
        _react2.default.createElement(
          'span',
          { className: 'toggle-string' },
          this.props.label
        )
      );
    }
  }]);

  return LabeledCheckbox;
}(_react.Component);

exports.default = LabeledCheckbox;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _LabeledInput = __webpack_require__(31);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

__webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabeledSelect = function (_Component) {
  _inherits(LabeledSelect, _Component);

  function LabeledSelect(props) {
    _classCallCheck(this, LabeledSelect);

    var _this = _possibleConstructorReturn(this, (LabeledSelect.__proto__ || Object.getPrototypeOf(LabeledSelect)).call(this, props));

    var value = _this.props._value ? _this.props._value.value : undefined;

    if (_this.props.valueRenderer && data) value = _this.props.valueRenderer(_this.props._value);

    _this.state = {
      data: {
        value: value,
        key: undefined
      },
      focused: false
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.clear = _this.clear.bind(_this);
    return _this;
  }

  _createClass(LabeledSelect, [{
    key: 'onChange',
    value: function onChange(data) {
      var value = data.value;
      if (this.props.valueRenderer && data) value = this.props.valueRenderer(data);

      this.setState({ data: { value: value } });
      this.props._onChange(data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({
        data: {
          value: undefined,
          key: undefined
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;

      if (this.state.data.value) {
        var value = this.state.data.value.toString();
        options = options.filter(function (data) {
          var val = _this2.props.valueRenderer && data ? _this2.props.valueRenderer(data) : data.value;
          return val.toLowerCase().search(value.toLowerCase()) !== -1;
        });
      }

      options = options.length > 0 ? options.map(function (data, key) {
        return _react2.default.createElement(
          'li',
          { key: key, onClick: function onClick() {
              return _this2.onChange(data);
            } },
          _this2.props.valueRenderer && data ? _this2.props.valueRenderer(data) : data.value
        );
      }) : _react2.default.createElement(
        'li',
        { key: 'not-found' },
        'Not found'
      );

      return _react2.default.createElement(
        'div',
        { className: 'labeled-select' },
        _react2.default.createElement(_LabeledInput2.default, {
          placeholder: this.props.placeholder,
          focused: this.state.focused,
          _value: this.state.data.value,
          _onChange: function _onChange(e) {
            return _this2.setState({ data: { value: e.target.value } });
          },
          _onFocus: function _onFocus() {
            return _this2.setState({ focused: true });
          }
        }),
        _react2.default.createElement(
          'ul',
          null,
          options
        ),
        _react2.default.createElement(_reactFontawesome2.default, { className: 'clear', name: 'times', onClick: this.clear })
      );
    }
  }]);

  return LabeledSelect;
}(_react.Component);

exports.default = LabeledSelect;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'loader-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'loader' },
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null)
        )
      );
    }
  }]);

  return Loader;
}(_react.Component);

exports.default = Loader;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapPin = function (_Component) {
  _inherits(MapPin, _Component);

  function MapPin() {
    _classCallCheck(this, MapPin);

    return _possibleConstructorReturn(this, (MapPin.__proto__ || Object.getPrototypeOf(MapPin)).apply(this, arguments));
  }

  _createClass(MapPin, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.props.className ? "map-pin " + this.props.className : "map-pin", onClick: this.props._onClick },
        _react2.default.createElement(_reactFontawesome2.default, { name: this.props.icon ? this.props.icon : "map-pin" }),
        this.props.tooltip ? _react2.default.createElement(
          'div',
          { className: 'tooltip' },
          this.props.tooltip
        ) : null
      );
    }
  }]);

  return MapPin;
}(_react.Component);

exports.default = MapPin;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("click", this.handleClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.addEventListener("click", this.handleClick);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.modal && !this.modal.contains(e.target)) return this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.show) return null;

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.props.className ? "modal-container " + this.props.className : "modal-container" },
        _react2.default.createElement(
          'div',
          { className: 'modal', ref: function ref(element) {
              return _this2.modal = element;
            } },
          this.props.title ? _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            _react2.default.createElement(
              'span',
              null,
              this.props.title
            ),
            _react2.default.createElement(
              'button',
              { className: 'close-modal', onClick: this.props.onClose },
              _react2.default.createElement(_reactFontawesome2.default, { name: 'times' })
            )
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            this.props.children
          ),
          _react2.default.createElement('div', { className: 'modal-footer' })
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavListItem = exports.NavList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavList = exports.NavList = function (_Component) {
  _inherits(NavList, _Component);

  function NavList() {
    _classCallCheck(this, NavList);

    return _possibleConstructorReturn(this, (NavList.__proto__ || Object.getPrototypeOf(NavList)).apply(this, arguments));
  }

  _createClass(NavList, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'ul',
        { className: 'nav' },
        this.props.children
      );
    }
  }]);

  return NavList;
}(_react.Component);

var NavListItem = exports.NavListItem = function (_Component2) {
  _inherits(NavListItem, _Component2);

  function NavListItem() {
    _classCallCheck(this, NavListItem);

    return _possibleConstructorReturn(this, (NavListItem.__proto__ || Object.getPrototypeOf(NavListItem)).apply(this, arguments));
  }

  _createClass(NavListItem, [{
    key: 'render',
    value: function render() {
      var icon = this.props.icon ? _react2.default.createElement(_reactFontawesome2.default, { name: this.props.icon }) : null;

      return _react2.default.createElement(
        'li',
        { className: 'nav-item icon', onClick: this.props._onClick },
        icon,
        _react2.default.createElement(
          'a',
          null,
          this.props.children
        )
      );
    }
  }]);

  return NavListItem;
}(_react.Component);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(141);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {

      var width = this.props.progress > 100 ? 100 : this.props.progress;

      if (isNaN(width)) {
        console.log("width", width);
        width = 0;
      }

      return _react2.default.createElement(
        'div',
        { className: 'progress-bar-container' },
        _react2.default.createElement(
          'div',
          { className: 'progress-bg' },
          _react2.default.createElement('div', { className: 'progress-bar', style: { width: width + "%" } })
        )
      );
    }
  }]);

  return ProgressBar;
}(_react.Component);

exports.default = ProgressBar;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubNav = function (_Component) {
  _inherits(SubNav, _Component);

  function SubNav() {
    _classCallCheck(this, SubNav);

    return _possibleConstructorReturn(this, (SubNav.__proto__ || Object.getPrototypeOf(SubNav)).apply(this, arguments));
  }

  _createClass(SubNav, [{
    key: 'render',
    value: function render() {
      var info = this.props.info ? this.props.info.map(function (data, key) {
        return _react2.default.createElement(
          'div',
          { key: key },
          data.label ? _react2.default.createElement(
            'span',
            { className: 'label' },
            data.label
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'info' },
            data.icon ? _react2.default.createElement(
              'span',
              { className: 'icon' },
              _react2.default.createElement(_reactFontawesome2.default, { name: data.icon })
            ) : null,
            data.value
          )
        );
      }) : [];

      return _react2.default.createElement(
        'div',
        { id: 'sub-nav' },
        _react2.default.createElement(
          'div',
          { className: 'sub-nav-info' },
          info
        ),
        _react2.default.createElement(
          'div',
          { className: 'sub-nav-actions' },
          this.props.actions
        )
      );
    }
  }]);

  return SubNav;
}(_react.Component);

exports.default = SubNav;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TableDesktop = __webpack_require__(71);

var _TableDesktop2 = _interopRequireDefault(_TableDesktop);

var _TableResponsive = __webpack_require__(72);

var _TableResponsive2 = _interopRequireDefault(_TableResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = { width: window.innerWidth };

    _this.updateDimensions = _this.updateDimensions.bind(_this);
    return _this;
  }

  _createClass(Table, [{
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.setState({ width: window.innerWidth });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.width <= this.props.responsiveWidth) return _react2.default.createElement(_TableResponsive2.default, this.props);

      return _react2.default.createElement(_TableDesktop2.default, this.props);
    }
  }]);

  return Table;
}(_react.Component);

exports.default = Table;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'setClass',
    value: function setClass(classes) {
      if (this.props.underline) classes.push("underline");

      if (this.props.noMargin) classes.push("no-margin");

      return classes.join(" ");
    }
  }, {
    key: 'render',
    value: function render() {
      var Tag = this.props.tag || "h1";
      var icon = this.props.icon ? _react2.default.createElement(_reactFontawesome2.default, { name: this.props.icon }) : null;

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.setClass(["title"]) },
        _react2.default.createElement(
          Tag,
          null,
          icon,
          this.props.children
        )
      );
    }
  }]);

  return Title;
}(_react.Component);

exports.default = Title;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInput = validateInput;

var _validator = __webpack_require__(147);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateInput(value, validations, values) {
  var error = [];

  value = value === undefined ? "" : String(value);

  if (!validations) return { value: value, error: error };

  if (validations.required && value === "") error.push("Field is required");

  if (validations.email && !_validator2.default.isEmail(value)) error.push("This is not a valid email address!");

  if (validations.equal && values[validations.equal] !== value) {
    error.push("The field doesn't match with " + validations.equal);
  }

  return { value: value, error: error };
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Button = __webpack_require__(29);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

__webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableDesktop = function (_Component) {
  _inherits(TableDesktop, _Component);

  function TableDesktop(props) {
    _classCallCheck(this, TableDesktop);

    var _this = _possibleConstructorReturn(this, (TableDesktop.__proto__ || Object.getPrototypeOf(TableDesktop)).call(this, props));

    var data = _this.sortArray(_this.props.data, _this.props.defaultSort);

    _this.state = {
      data: data,
      originalData: data,
      filter: "",
      summaries: undefined,
      savedFilters: []
    };

    _this.createHeader();

    _this.createHeader = _this.createHeader.bind(_this);
    _this.filterArray = _this.filterArray.bind(_this);
    _this.saveFilter = _this.saveFilter.bind(_this);
    _this.resetData = _this.resetData.bind(_this);
    _this.sortArray = _this.sortArray.bind(_this);
    _this.calculateSummaries = _this.calculateSummaries.bind(_this);
    _this.onChangeInput = _this.onChangeInput.bind(_this);

    return _this;
  }

  _createClass(TableDesktop, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var data = this.filterArray([this.state.filter].concat(_toConsumableArray(this.state.savedFilters)), props.data, this.props.filters);
      data = this.sortArray(data, this.props.defaultSort);
      this.setState({ data: data, originalData: props.data });
    }
  }, {
    key: 'createHeader',
    value: function createHeader() {
      var _this2 = this;

      this.header = this.props.dataKeys.map(function (data, key) {
        var cellClass = ["data-table-desktop-header-cell", data.id];
        var sortButtons = undefined;

        if (_this2.props.sortables && _this2.props.sortables[data.id]) {
          cellClass.push("sortable");
          sortButtons = _react2.default.createElement(
            'div',
            { className: 'order-actions' },
            _react2.default.createElement('span', { key: 'arrow-asc', className: 'order-arrow asc', onClick: function onClick() {
                return _this2.setState({ data: _this2.sortArray(_this2.state.data, _this2.props.sortables[data.id], "asc") });
              } }),
            _react2.default.createElement('span', { key: 'arrow-desc', className: 'order-arrow desc', onClick: function onClick() {
                return _this2.setState({ data: _this2.sortArray(_this2.state.data, _this2.props.sortables[data.id], "desc") });
              } })
          );
        }

        return _react2.default.createElement(
          'td',
          { key: data.id, className: _this2.setClass(cellClass) },
          data.label,
          sortButtons
        );
      });

      if (this.props.actions && this.props.actions.length > 0) this.header.push(_react2.default.createElement('td', { key: 'actions', className: this.setClass(["data-table-desktop-header-cell", "actions"]) }));
    }
  }, {
    key: 'onChangeInput',
    value: function onChangeInput(e) {
      var strings = [].concat(_toConsumableArray(this.state.savedFilters));

      if (e.target.value !== "") strings.push(e.target.value);

      var data = this.filterArray(strings, this.state.originalData, this.props.filters);

      this.setState({ filter: e.target.value, data: data });
    }
  }, {
    key: 'saveFilter',
    value: function saveFilter() {
      var savedFilters = this.state.savedFilters;
      if (this.state.filter !== "") savedFilters.push(this.state.filter);

      this.setState({ savedFilters: savedFilters, filter: "" });
    }
  }, {
    key: 'resetData',
    value: function resetData() {
      this.setState({ savedFilters: [], filter: "", data: this.state.originalData });
    }
  }, {
    key: 'filterMultiple',
    value: function filterMultiple(data, strings, filters) {
      var hasMatch = strings.every(function (string) {
        return filters.some(function (filterObj) {
          return filterObj.filterData(data) && filterObj.filterData(data).toLowerCase().search(string.toLowerCase()) !== -1;
        });
      });

      return hasMatch;
    }
  }, {
    key: 'filterArray',
    value: function filterArray(strings, array, filters) {
      var _this3 = this;

      var data = array.filter(function (data) {
        return _this3.filterMultiple(data, strings, filters);
      });

      return data;
    }
  }, {
    key: 'sortArray',
    value: function sortArray(array, sortable, order) {
      var defaultOrder = sortable ? sortable.defaultOrder : undefined;
      var orderDirection = order || defaultOrder;

      if (orderDirection === undefined) return array;

      var data = array.sort(function (a, b) {

        if (sortable.type === "number") return sortable.sortData(a) - sortable.sortData(b);

        if (sortable.type === "text") return sortable.sortData(a).localeCompare(sortable.sortData(b), undefined, { sensitivity: "base" });

        if (sortable.type === "date") return new Date(sortable.sortData(a)) - new Date(sortable.sortData(b));

        return false;
      });

      if (orderDirection === "desc") data = data.reverse();

      return data;
    }
  }, {
    key: 'calculateSummaries',
    value: function calculateSummaries() {
      var _this4 = this;

      var summaries = this.props.summaries && this.props.summaries.length > 0 && this.state.data.length > 0 ? this.props.summaries.map(function (data, key) {
        return _react2.default.createElement(
          'div',
          { key: key, className: 'summary-item' },
          _react2.default.createElement(
            'span',
            null,
            data.label
          ),
          _react2.default.createElement(
            'span',
            null,
            data.callback(_this4.state.data).toFixed(data.round || 0)
          )
        );
      }) : null;

      return summaries;
    }
  }, {
    key: 'setClass',
    value: function setClass(classes) {
      if (Array.isArray(classes)) return classes.join(" ");

      return classes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var summaries = this.calculateSummaries();

      var savedFilters = this.state.savedFilters.length > 0 ? this.state.savedFilters.map(function (data, key) {
        return _react2.default.createElement(
          'div',
          { key: key },
          data
        );
      }) : null;

      var rows = this.state.data.length > 0 ? this.state.data.map(function (row, key) {
        var cells = _this5.props.dataKeys.map(function (cell, key) {
          return _react2.default.createElement(
            'td',
            { key: key, className: _this5.setClass(["data-table-desktop-cell", cell.id]) },
            cell.value(row)
          );
        });

        if (_this5.props.actions && _this5.props.actions.length > 0) {
          var actions = _this5.props.actions.map(function (data, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: 'action', onClick: function onClick() {
                  return data.action(row);
                } },
              _react2.default.createElement(_reactFontawesome2.default, { name: data.icon })
            );
          });

          cells.push(_react2.default.createElement(
            'td',
            { key: 'actions', className: _this5.setClass(["data-table-desktop-cell", "actions"]) },
            actions
          ));
        }

        var rowClass = ["data-table-desktop-row"];

        if (_this5.props.rowClass) rowClass.push(_this5.props.rowClass(row));

        return _react2.default.createElement(
          'tr',
          { key: key, className: _this5.setClass(rowClass), onClick: function onClick() {
              return _this5.props.onClickRow ? _this5.props.onClickRow(row._id) : undefined;
            } },
          cells
        );
      }) : _react2.default.createElement(
        'tr',
        { key: 'no-data', className: this.setClass(["data-table-desktop-row", "no-data"]) },
        _react2.default.createElement(
          'td',
          { className: this.setClass(["data-table-desktop-cell"]), colSpan: this.props.actions ? this.props.dataKeys.length + 1 : this.props.dataKeys.length },
          'No data to show'
        )
      );

      return _react2.default.createElement(
        'div',
        { id: 'data-table' },
        _react2.default.createElement(
          'div',
          { className: 'data-table-desktop-header-bar' },
          _react2.default.createElement(
            'div',
            { className: 'data-table-desktop-actions' },
            _react2.default.createElement(_Input2.default, { _value: this.state.filter, placeholder: 'filter', _onChange: this.onChangeInput }),
            _react2.default.createElement(
              _Button2.default,
              { _onClick: this.saveFilter },
              'save filter'
            ),
            _react2.default.createElement(
              _Button2.default,
              { _onClick: this.resetData },
              'clear filters'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'data-table-desktop-saved-filters' },
            savedFilters
          ),
          _react2.default.createElement(
            'div',
            { className: 'data-table-desktop-summaries' },
            summaries
          )
        ),
        _react2.default.createElement(
          'table',
          { className: this.setClass(["data-table-desktop", this.props.counter ? "counter" : null]) },
          _react2.default.createElement(
            'thead',
            { className: 'data-table-desktop-header' },
            _react2.default.createElement(
              'tr',
              { className: this.setClass(["data-table-desktop-header-row"]) },
              this.header
            )
          ),
          _react2.default.createElement(
            'tbody',
            { className: 'data-table-desktop-content' },
            rows
          ),
          _react2.default.createElement('tfoot', { className: 'data-table-desktop-footer' })
        )
      );
    }
  }]);

  return TableDesktop;
}(_react.Component);

exports.default = TableDesktop;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableResponsive = function (_Component) {
  _inherits(TableResponsive, _Component);

  function TableResponsive(props) {
    _classCallCheck(this, TableResponsive);

    var _this = _possibleConstructorReturn(this, (TableResponsive.__proto__ || Object.getPrototypeOf(TableResponsive)).call(this, props));

    _this.header = _this.props.dataKeys.filter(function (data) {
      return data.responsiveHeader === true;
    }).map(function (data, key) {
      return _react2.default.createElement(
        'div',
        { key: data.id, className: _this.setClass(["data-table-cell", "data-table-header-cell", data.id]) },
        data.label
      );
    });

    return _this;
  }

  _createClass(TableResponsive, [{
    key: 'setClass',
    value: function setClass(classes) {
      if (Array.isArray(classes)) return classes.join(" ");

      return classes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log("data", this.props);

      var rows = [];

      this.props.data.forEach(function (row, key) {
        var cells = [];

        _this2.props.dataKeys.filter(function (data) {
          return data.responsiveHeader === true;
        }).forEach(function (cell, key) {
          cells.push(_react2.default.createElement(
            'div',
            { key: key, className: _this2.setClass(["data-table-cell", cell.id]) },
            cell.value(row)
          ));
        });

        rows.push(_react2.default.createElement(
          'div',
          { key: key, className: _this2.setClass(["data-table-row"]) },
          cells
        ));
      });

      return _react2.default.createElement(
        'div',
        { className: 'data-table-responsive' },
        _react2.default.createElement(
          'div',
          { className: 'data-table-header' },
          _react2.default.createElement(
            'div',
            { className: this.setClass(["data-table-row", "data-table-header-row"]) },
            this.header
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'data-table-content' },
          rows
        ),
        _react2.default.createElement('div', { className: 'data-table-footer' })
      );
    }
  }]);

  return TableResponsive;
}(_react.Component);

exports.default = TableResponsive;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavListItem = exports.NavList = exports.ProgressBar = exports.Title = exports.SubNav = exports.Modal = exports.MapPin = exports.InfoTable = exports.Table = exports.Loader = exports.DockedMenu = exports.AdminPanelSection = exports.AdminPanelPanel = exports.LabeledCheckbox = exports.LabeledSelect = exports.LabeledInput = exports.FileUpload = exports.Button = exports.Input = exports.Fields = exports.Form = undefined;

var _AdminPanel = __webpack_require__(55);

var _Form = __webpack_require__(58);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(29);

var _Button2 = _interopRequireDefault(_Button);

var _LabeledInput = __webpack_require__(31);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

var _LabeledSelect = __webpack_require__(61);

var _LabeledSelect2 = _interopRequireDefault(_LabeledSelect);

var _LabeledCheckbox = __webpack_require__(60);

var _LabeledCheckbox2 = _interopRequireDefault(_LabeledCheckbox);

var _DockedMenu = __webpack_require__(56);

var _DockedMenu2 = _interopRequireDefault(_DockedMenu);

var _FileUpload = __webpack_require__(57);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _Loader = __webpack_require__(62);

var _Loader2 = _interopRequireDefault(_Loader);

var _Table = __webpack_require__(68);

var _Table2 = _interopRequireDefault(_Table);

var _InfoTable = __webpack_require__(59);

var _InfoTable2 = _interopRequireDefault(_InfoTable);

var _MapPin = __webpack_require__(63);

var _MapPin2 = _interopRequireDefault(_MapPin);

var _Modal = __webpack_require__(64);

var _Modal2 = _interopRequireDefault(_Modal);

var _SubNav = __webpack_require__(67);

var _SubNav2 = _interopRequireDefault(_SubNav);

var _Title = __webpack_require__(69);

var _Title2 = _interopRequireDefault(_Title);

var _ProgressBar = __webpack_require__(66);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _NavList = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _Form.Form;
exports.Fields = _Form.Fields;
exports.Input = _Input2.default;
exports.Button = _Button2.default;
exports.FileUpload = _FileUpload2.default;
exports.LabeledInput = _LabeledInput2.default;
exports.LabeledSelect = _LabeledSelect2.default;
exports.LabeledCheckbox = _LabeledCheckbox2.default;
exports.AdminPanelPanel = _AdminPanel.AdminPanelPanel;
exports.AdminPanelSection = _AdminPanel.AdminPanelSection;
exports.DockedMenu = _DockedMenu2.default;
exports.Loader = _Loader2.default;
exports.Table = _Table2.default;
exports.InfoTable = _InfoTable2.default;
exports.MapPin = _MapPin2.default;
exports.Modal = _Modal2.default;
exports.SubNav = _SubNav2.default;
exports.Title = _Title2.default;
exports.ProgressBar = _ProgressBar2.default;
exports.NavList = _NavList.NavList;
exports.NavListItem = _NavList.NavListItem;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(75);

var _linebreakTrie = __webpack_require__(77);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(19);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(74);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".admin-panel{\n\n}\n\n.admin-panel .panel-section{\n  display: flex;\n  padding: 20px 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n}\n\n.admin-panel .panel{\n  background: var(--ui-bg);\n  color: var(--ui-text);\n  flex-basis: 100%;\n  margin: 0;\n  box-shadow: 0 1px 5px rgba(30,30,30,0.15), 0 2px 5px rgba(40,40,40,0.20);\n  padding: 15px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.admin-panel .panel.half{\n  flex-basis: 49%\n}\n\n.admin-panel .panel .panel-header{\n  border-bottom: 1px solid var(--ui-border);\n  margin-bottom: 15px;\n  display: flex;\n  padding-bottom: 15px;\n}\n\n.admin-panel .panel .panel-header .panel-title{\n  color: var(--ui-heading)\n}\n\n.admin-panel .panel .panel-header .panel-title span.fa{\n  margin-right: 10px;\n}\n\n.admin-panel .panel .panel-header .panel-actions{\n  margin-left: auto;\n}\n\n.admin-panel .panel .panel-header .panel-actions span{\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.admin-panel .panel .panel-content{\n  max-height: auto;\n  -webkit-transition: all 200ms ease-in;\n  -o-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n\n.admin-panel .panel.collapsed .panel-content{\n  max-height: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "button.button{\n  padding: 5px 10px;\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  border: 1px solid transparent;\n  outline: 0;\n  cursor: pointer;\n  -webkit-transition: all 200ms ease-in;\n  -o-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n\n/******  Types  ******/\n\nbutton.button.default{\n  background: var(--ui-bg-inv);\n  color: var(--ui-text);\n  border-color: var(--ui-border);\n}\n\nbutton.button.default:hover{\n  background: var(--ui-bg);\n  color: var(--ui-placeholder);\n  border-color: var(--ui-border);\n}\n\nbutton.button.main{\n  color: var(--ui-bg);\n  border-color: var(--main-color);\n  background: var(--main-color);\n}\n\nbutton.button.main:hover{\n  color: var(--main-color);\n  border-color: var(--main-color);\n  background: var(--ui-bg);\n}\n\n/******  Sizes  ******/\n\nbutton.button.medium{\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nbutton.button.big{\n  padding: 20px 30px;\n  font-size: 16px;\n}\n\nbutton.button.bigger{\n  padding: 30px 40px;\n  font-size: 18px;\n}\n\nbutton.button.full{\n  display: block;\n  width: 100%;\n  padding: 20px;\n  font-size: 18px\n}\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#docked-menu{\n  width: 220px;\n  height: 100%;\n  position: relative;\n  z-index: 10;\n  -webkit-transition: all 200ms ease-in;\n  -o-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n\n#docked-menu.toggled{\n  width: 50px;\n}\n\n#docked-menu{\n background: var(--ui-bg);\n}\n\n#docked-menu .title{\n  padding: 15px;\n  border-bottom: 1px solid var(--ui-border);\n  color: var(--ui-heading);\n}\n\n#docked-menu .nav .nav-item.icon{\n  padding-left: 25px;\n  display: flex;\n  overflow: hidden;\n}\n\n#docked-menu.toggled .nav .nav-item{\n  height: 50px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#docked-menu.toggled .nav .nav-item a{\n  display: none;\n}\n\n#docked-menu.toggled .nav .nav-item.icon:hover span.fa{\n  margin: 0\n}\n\n#docked-menu.toggled h5{\n  display: none;\n}\n\n#docked-menu .toggle{\n  color: var(--ui-placeholder);\n  z-index: -1;\n  display: flex;\n  opacity: 0;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 30px;\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  right: 0;\n  transform: translateY(-200%) translateX(50%);\n  background: var(--ui-bg);\n  -webkit-transition: all 200ms ease-in;\n  -o-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n\n#docked-menu .toggle span{\n  padding-left: 20px;\n}\n\n#docked-menu:hover .toggle{\n  opacity: 1\n}\n", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".file-upload{\n  width: 100%;\n  display: inline-block;\n  border: 2px dashed var(--ui-border);\n  color: var(--ui-text);\n  box-sizing: border-box;\n}\n\n.file-upload input{\n  display: none;\n}\n\n.file-upload label{\n  padding: 40px;\n  display: block;\n  text-align: center;\n  cursor: pointer;\n}\n\n.file-upload label span.fa{\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".info-table table{\n  width: 100%;\n}\n\n.info-table tr{\n  border-bottom: 1px solid var(--ui-border)\n}\n\n.info-table th{\n  line-height: 20px;\n  white-space: nowrap;\n}\n\n.info-table th .icon-holder{\n  width: 30px;\n  float: left;\n  color: var(--main-color);\n  text-align: center;\n  margin-right: 10px;\n  display: inline-block;\n  text-align: center;\n}\n\n.info-table th{\n  width: 120px;\n  padding: 10px 0;\n  text-align: left;\n}\n\n.info-table td{\n    padding: 10px 5px;\n    text-align: right;\n}\n\n.info-table th .icon-holder .fa{\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".input{\n  padding: 10px;\n  border: 1px solid transparent;\n  background: transparent;\n  font-size: 14px;\n  line-height: 1;\n  outline: 0;\n}\n\n.input.default{\n  background: var(--ui-bg);\n  color: var(--ui-text);\n  border-color: var(--ui-border)\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".labeled-checkbox{\n  margin: 0;\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n}\n\n.labeled-checkbox .toggle-status {\n    display: none;\n}\n.labeled-checkbox .toggle-switch {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    vertical-align: bottom;\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    width:  1.625em; /* calc(1em * 2 - 0.125em * 2 - 0.0625em * 2); */\n    height: 1.000em; /* calc(1em * 1); */\n    box-sizing: border-box;\n    border: solid var(--ui-border) 0.125em;\n    transition: border 0.5s;\n    font-size: 30px;\n    margin-right: 5px;\n}\n.labeled-checkbox .toggle-status:checked + .toggle-switch {\n    border: solid var(--var(--ui-border)) 0.125em;\n}\n.labeled-checkbox .toggle-switch::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top:    0.0625em;\n    left:   0.0625em;\n    width:  0.625em; /* calc(1em - 0.125em * 2 - 0.0625em * 2); */\n    height: 0.625em; /* calc(1em - 0.125em * 2 - 0.0625em * 2); */\n    background: var(--ui-placeholder);\n    transition: background 0.5s, left 0.5s;\n}\n.labeled-checkbox .toggle-status:checked + .toggle-switch::after {\n    background: var(--ui-color);\n    left: 0.6875em; /* calc(1em - 0.125em * 2 - 0.0625em); */\n}\n.labeled-checkbox .toggle-string {\n    line-height: 1;\n    font-size: 16px;\n}\n/* ------------------------------------------ */\n.labeled-checkbox .toggle-rounded {\n    border-radius: 0.5000em; /* calc(1em / 2); */\n}\n.labeled-checkbox .toggle-rounded::after {\n    border-radius: 0.3125em; /* calc(1em / 2 - 0.125em - 0.0625em); */\n}\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".labeled-input{\n    position: relative;\n}\n\n.labeled-input label{\n  position: relative;\n  display: block;\n}\n\n.labeled-input .error{\n  color: var(--invalid-color);\n  top: 50%;\n  transform: translateY(-50%);\n  right: 40px;\n  position: absolute;\n  font-size: 12px;\n}\n\n.labeled-input label input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 15px;\n  background: var(--ui-bg);\n  color: var(--ui-text);\n  font-size: 14px;\n  border: 1px solid var(--ui-border);\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  outline: none;\n}\n\n.labeled-input.valid label input{\n  border-color: var(--valid-color);\n}\n\n.labeled-input.invalid label input{\n  border-color: var(--invalid-color);\n}\n\n.labeled-input.valid label:after,\n.labeled-input.invalid label:after{\n  content: '';\n  position: absolute;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-family: FontAwesome;\n  width: 20px;\n  height: 20px;\n  text-align: center ;\n  line-height: 20px;\n  margin-right: 10px;\n}\n\n.labeled-input.valid label:after{\n  background: var(--valid-color);\n  content: \"\\F00C\";\n}\n\n.labeled-input.invalid label:after{\n  background: var(--invalid-color);\n  content: \"\\F00D\";\n}\n\n.labeled-input label input::-webkit-input-placeholder,\n.labeled-input label input::-moz-placeholder,\n.labeled-input label input:-ms-input-placeholder,\n.labeled-input label input::placeholder{\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  color: var(--ui-placeholder);\n  font-size: 18px;\n}\n\n\n.labeled-input label input:focus,\n.labeled-input.populated label input {\n  padding-top: 28px;\n  padding-bottom: 12px;\n}\n\n.labeled-input label input:focus::-webkit-input-placeholder,\n.labeled-input.populated label input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.labeled-input label input:focus::-moz-placeholder,\n.labeled-input.populated label input::-moz-placeholder {\n  color: transparent;\n}\n\n.labeled-input label input:focus:-ms-input-placeholder,\n.labeled-input.populated label input:-ms-input-placeholder {\n  color: transparent;\n}\n\n.labeled-input label input:focus::placeholder,\n.labeled-input.populated label input::placeholder {\n  color: transparent;\n}\n\n.labeled-input label input:focus + span,\n.labeled-input.populated label input + span {\n  opacity: 1;\n  top: 10px;\n  left: 15px;\n}\n\n.labeled-input label input + span {\n  color: var(--ui-color);\n  font-size: 12px;\n  position: absolute;\n  top: 0px;\n  left: 20px;\n  opacity: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n", ""]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".labeled-select{\n    position: relative;\n    overflow: visible;\n}\n\n.labeled-select .labeled-input + ul{\n  max-height: 0;\n  overflow: hidden;\n  position: absolute;\n  background: var(--ui-bg);\n  width: 100%;\n  border: 1px solid var(--ui-border);\n  border-top: 0;\n  box-sizing: border-box;\n  -moz-transition:all 200ms linear;\n  -webkit-transition:all 200ms linear;\n  -o-transition:all 200ms linear;\n  transition:all 200ms linear;\n}\n\n.labeled-select .labeled-input.focused + ul{\n  max-height: 100px;\n  overflow-y: scroll;\n}\n\n.labeled-select .labeled-input + ul li{\n  padding: 10px;\n  border: 0;\n  cursor: pointer;\n  display: block;\n  width: 100%;\n}\n\n.labeled-select .labeled-input + ul li:hover{\n  background: var(--ui-bg-helper)\n}\n\n.labeled-select .labeled-input + ul li:last-child{\n  border-bottom: 0;\n}\n\n.labeled-select .clear{\n  display: none;\n  position: absolute;\n  right: 0;\n  margin-right: 10px;\n  font-size: 12px;\n  top: 50%;\n  color: var(--invalid-color);\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.labeled-select .labeled-input.populated + ul + .clear{\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".loader-wrapper{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--bg);\n}\n\n.loader {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.loader div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid var(--main-color);\n  border-radius: 50%;\n  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: var(--main-color) transparent transparent transparent;\n}\n.loader div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.loader div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.loader div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".map-pin{\n  transform: translateX(0) translateY(-50%);\n  left: 0;\n  top: 0;\n}\n\n.map-pin span{\n  font-size: 25px;\n  color: var(--main-color);\n}\n\n.map-pin .tooltip{\n  display: none;\n}\n\n.map-pin:hover .tooltip{\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".modal-container{\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: var(--ui-bg-opacity);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container .modal{\n  display: inline-block;\n  width: 50%;\n  overflow: hidden;\n  background: var(--ui-bg);\n  -webkit-box-shadow: 0 3px 7px var(--ui-shadow);\n  -moz-box-shadow: 0 3px 7px var(--ui-shadow);\n  box-shadow: 0 3px 7px var(--ui-shadow);\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding-box;\n  background-clip: padding-box;\n  padding: 10px;\n}\n\n.modal-container .modal .modal-header{\n  padding: 10px;\n  display: flex;\n  border-bottom: 1px solid var(--ui-border);\n  margin-bottom: 10px;\n}\n\n.modal-container .modal .modal-header .close-modal{\n  margin-left: auto;\n  border: 0;\n  background: 0;\n  outline: 0;\n}\n\n.modal-container .modal .modal-header .close-modal span{\n  color: var(--ui-placeholder);\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.modal-container .modal .modal-header .close-modal:hover span{\n  color: var(--ui-text);\n}\n\n.modal-container .modal .modal-footer{\n  border-top: 1px solid var(--ui-border);\n  margin-top: 10px;\n  padding: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".nav{\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav .nav-item{\n  padding: 15px;\n  border-bottom: 1px solid var(--ui-border);\n  cursor: pointer;\n}\n\n.nav .nav-item:hover{\n  background: var(--ui-bg-inv);\n  cursor: pointer;\n}\n\n.nav .nav-item a{\n  color: var(--ui-placeholder);\n}\n\n/********* With Icon ***********/\n\n.nav .nav-item.icon a{\n  margin-left: 5px;\n}\n\n.nav .nav-item span.fa{\n  color: var(--ui-placeholder);\n  -webkit-transition: all 200ms ease-in;\n  -o-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n\n.nav .nav-item.icon:hover span.fa{\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n/* -----------------------------------------------------\n\tCSS Progress Bars\n-------------------------------------------------------- */\n.progress-bar-container {\n  width: 100%;\n}\n\n.progress-bar-container .progress-bar {\n  display: block;\n  float: left;\n  width: 0%;\n  height: 100%;\n  background: var(--ui-color);\n  -webkit-box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.1);\n          box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.1);\n  -webkit-transition: width 0.8s ease-in-out;\n  transition: width 0.8s ease-in-out;\n}\n\n.progress-bg {\n  position: relative;\n  width: 100%;\n  background-color: var(--ui-border);\n}\n\n.progress-bg .progress-bar {\n  display: block;\n  float: none;\n  width: 0%;\n  height: 4px;\n  background: var(--ui-color);\n}\n", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#sub-nav{\n  background: var(--ui-bg-helper);\n  border-bottom: 1px solid var(--ui-border);\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1;\n  position: -webkit-sticky;\n   position: sticky;\n   top: 0;\n   z-index: 900;\n}\n\n#sub-nav .sub-nav-actions{\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n#sub-nav .sub-nav-info{\n  color: var(--ui-text);\n  display: flex;\n  align-items: flex-end;\n}\n\n#sub-nav .sub-nav-info > div{\n  margin-right: 20px;\n  text-align: right;\n}\n\n#sub-nav .sub-nav-info > div .label{\n  font-size: 13px;\n  color: var(--ui-placeholder);\n  line-height: 2\n}\n\n#sub-nav .sub-nav-info .fa{\n  color: var(--ui-color);\n  margin-right: 5px;\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#data-table{\n\n}\n\n#data-table .data-table-desktop{\n  width: 100%;\n}\n\n#data-table .data-table-desktop-actions{\n  margin-bottom: 5px;\n}\n\n#data-table .data-table-desktop-actions .filter-input{\n  outline: 0;\n  padding: 10px;\n}\n\n#data-table .data-table-desktop-actions button{\n  padding: 10px;\n  margin: 0 5px;\n}\n\n#data-table .data-table-desktop-row{\n\n}\n\n#data-table .data-table-desktop-row{\n\n}\n\n#data-table .data-table-desktop-saved-filters{\n  display: flex;\n  align-items: center;\n}\n\n#data-table .data-table-desktop-saved-filters > div{\n  padding: 5px;\n  border: 1px solid var(--ui-border);\n  margin-right: 5px;\n}\n\n#data-table .data-table-desktop-header-cell{\n  padding: 10px;\n  padding-right: 20px;\n  border: 1px solid var(--ui-border);\n  background: var(--ui-bg-heading);\n  width: auto;\n  position: relative;\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n}\n\n#data-table .data-table-desktop-cell{\n  padding: 10px;\n  border: 1px solid var(--ui-border);\n  width: auto;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n#data-table .data-table-desktop-cell.actions{\n\n}\n\n#data-table .data-table-desktop-cell.actions .action{\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#data-table .data-table-desktop-row:nth-child(odd) .data-table-desktop-cell{\n  background: var(--ui-bg)\n}\n\n#data-table .data-table-desktop-row:nth-child(even) .data-table-desktop-cell{\n  background: var(--ui-bg-helper)\n}\n\n#data-table .data-table-desktop-row:nth-child(even):hover .data-table-desktop-cell,\n#data-table .data-table-desktop-row:hover .data-table-desktop-cell{\n  background: var(--ui-bg-inv)\n}\n\n#data-table .data-table-desktop-header-bar{\n  display: flex;\n}\n\n#data-table .data-table-desktop-summaries{\n  margin-left: auto;\n  display: flex;\n  align-items: flex-end;\n}\n\n#data-table .data-table-desktop-summaries .summary-item{\n  padding: 0 10px 5px;\n  border: 1px solid var(--ui-border);\n  border-bottom: 0;\n  border-right: 0;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n\n#data-table .data-table-desktop-summaries .summary-item:last-child{\n  border-right: 1px solid var(--ui-border);\n}\n\n#data-table .data-table-desktop-summaries .summary-item span:first-child{\n  font-size: 13px;\n  color: var(--ui-placeholder);\n  line-height: 2;\n}\n\n#data-table .order-actions{\n  display: flex;\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-direction: column;\n}\n\n#data-table .order-actions .action{\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border: 1px solid var(--ui-border);\n}\n\n#data-table .order-arrow {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  vertical-align: middle;\n  border-style: solid;\n  cursor: pointer;\n}\n\n#data-table .order-arrow.asc {\n  border-width: 0 6px 6px 6px;\n  border-color: transparent transparent var(--ui-placeholder) transparent;\n  top: 0;\n  margin-bottom: 2px;\n}\n\n#data-table .order-arrow.desc {\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ui-placeholder) transparent transparent transparent;\n  top: 8px\n}\n\n/*********** Counter ************/\n\n#data-table .data-table-desktop.counter .data-table-desktop-row{\n  counter-increment: cell;\n}\n\n#data-table .data-table-desktop.counter .data-table-desktop-row:not(.no-data) td:first-child{\n  padding-left: 45px;\n}\n\n#data-table .data-table-desktop.counter .data-table-desktop-row:not(.no-data) td:first-child:before{\n  content: counter(cell);\n  display: block;\n  left: 0;\n  top: 0;\n  justify-content: flex-end;\n  width: 30px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  border-right: 1px solid var(--ui-border);\n}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".data-table-responsive{\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.data-table-responsive-row{\n  display: table-row;\n  flex: 1;\n  flex-direction: row;\n}\n\n.data-table-responsive-cell{\n  display: table-cell;\n}\n", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".title{\n  margin: 10px 0;\n}\n\n.title.underline{\n  border-bottom: 1px solid var(--ui-border);\n  padding: 10px 0\n}\n\n.title.no-margin{\n  margin: 0;\n}\n\n.title h1,\n.title h2,\n.title h3,\n.title h4,\n.title h5{\n  color: var(--ui-heading);\n  font-weight: bold;\n}\n\n.title h1 span.fa,\n.title h1{\n  font-size: 24px;\n}\n\n.title h2 span.fa,\n.title h2{\n  font-size: 22px\n}\n\n.title h3 span.fa,\n.title h3{\n  font-size: 20px\n}\n\n.title h4 span.fa,\n.title h4{\n  font-size: 18px\n}\n\n.title h5 span.fa,\n.title h5{\n  font-size: 16px;\n}\n\n.title span.fa{\n  color: var(--ui-heading);\n  margin-right: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(6);

var _Proxy = __webpack_require__(36);

var _ResourceLoader = __webpack_require__(102);

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(10);

var _background = __webpack_require__(12);

var _CanvasRenderer = __webpack_require__(43);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (process.env.NODE_ENV !== 'production') {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (process.env.NODE_ENV !== 'production') {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (process.env.NODE_ENV !== 'production') {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (process.env.NODE_ENV !== 'production') {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject(process.env.NODE_ENV !== 'production' ? 'Body element not found in Document that is getting rendered' : '');
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject(process.env.NODE_ENV !== 'production' ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : '');
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(96);

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(103);

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(14);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(34);

var _ListItem = __webpack_require__(22);

var _listStyle = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (process.env.NODE_ENV !== 'production') {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (process.env.NODE_ENV !== 'production') {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if (process.env.NODE_ENV !== 'production' && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(22);

var _listStyle = __webpack_require__(17);

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(6);

var _Font = __webpack_require__(33);

var _Gradient = __webpack_require__(98);

var _TextContainer = __webpack_require__(14);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(12);

var _border = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (process.env.NODE_ENV !== 'production') {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(13);

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (process.env.NODE_ENV !== 'production') {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (process.env.NODE_ENV !== 'production') {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (process.env.NODE_ENV !== 'production') {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) loading image' : '');
            }, timeout);
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(9);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(35);

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(99);

var _Renderer = __webpack_require__(101);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(44);

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(13);

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(6);

var _Clone = __webpack_require__(97);

var _Font = __webpack_require__(33);

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (process.env.NODE_ENV !== 'production') {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);
                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: options.x,
                    y: options.y,
                    width: options.width,
                    height: options.height,
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                container = _ref2[0],
                clonedElement = _ref2[1],
                resourceLoader = _ref2[2];

            if (process.env.NODE_ENV !== 'production') {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (process.env.NODE_ENV !== 'production') {
                    logger.log('Starting renderer');
                }

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: options.x,
                    y: options.y,
                    width: options.width,
                    height: options.height
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (process.env.NODE_ENV !== 'production') {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(15);

var _Vector = __webpack_require__(16);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (process.env.NODE_ENV !== 'production') {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(43);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(35);

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(104);

var _Bounds = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "$npm_package_version");

    if (process.env.NODE_ENV !== 'production' && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var scrollX = defaultView.pageXOffset;
    var scrollY = defaultView.pageYOffset;

    var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

    var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
        width = _ref.width,
        height = _ref.height,
        left = _ref.left,
        top = _ref.top;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        x: left,
        y: top,
        width: Math.ceil(width),
        height: Math.ceil(height),
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (process.env.NODE_ENV !== 'production') {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(7);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(8);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(21);
  var warning = __webpack_require__(32);
  var ReactPropTypesSecret = __webpack_require__(25);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(20);
var invariant = __webpack_require__(21);
var ReactPropTypesSecret = __webpack_require__(25);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(20);
var invariant = __webpack_require__(21);
var warning = __webpack_require__(32);
var assign = __webpack_require__(122);

var ReactPropTypesSecret = __webpack_require__(25);
var checkPropTypes = __webpack_require__(123);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(125)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(124)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(78);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./AdminPanel.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./AdminPanel.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(79);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./Button.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./Button.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(80);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./DockedMenu.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./DockedMenu.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(81);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./FileUpload.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./FileUpload.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(82);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./InfoTable.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./InfoTable.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(83);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./Input.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./Input.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(84);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./LabeledCheckbox.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./LabeledCheckbox.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(85);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./LabeledInput.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./LabeledInput.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(86);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./LabeledSelect.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./LabeledSelect.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./Loader.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./Loader.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(88);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./MapPin.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./MapPin.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(89);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./Modal.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./Modal.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./NavList.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./NavList.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(91);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./ProgressBar.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./ProgressBar.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(92);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./SubNav.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./SubNav.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(93);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./TableDesktop.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./TableDesktop.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(94);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./TableResponsive.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./TableResponsive.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./Title.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./Title.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 146 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__(27);

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__(54);

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__(198);

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__(197);

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__(149);

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__(148);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(194);

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__(163);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__(189);

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__(179);

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__(50);

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = __webpack_require__(26);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__(157);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__(152);

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__(153);

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__(185);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isPort = __webpack_require__(186);

var _isPort2 = _interopRequireDefault(_isPort);

var _isLowercase = __webpack_require__(178);

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__(191);

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__(154);

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__(47);

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__(48);

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__(192);

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__(184);

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__(188);

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__(51);

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__(165);

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__(161);

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__(49);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__(162);

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__(167);

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = __webpack_require__(172);

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = __webpack_require__(180);

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = __webpack_require__(166);

var _isHash2 = _interopRequireDefault(_isHash);

var _isJSON = __webpack_require__(175);

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__(164);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__(177);

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__(46);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__(190);

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__(183);

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = __webpack_require__(151);

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__(156);

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__(174);

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__(158);

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__(169);

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__(168);

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__(173);

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__(182);

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__(159);

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__(171);

var _isISO2 = _interopRequireDefault(_isISO);

var _isISO31661Alpha = __webpack_require__(170);

var _isISO31661Alpha2 = _interopRequireDefault(_isISO31661Alpha);

var _isBase = __webpack_require__(155);

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__(160);

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isMimeType = __webpack_require__(181);

var _isMimeType2 = _interopRequireDefault(_isMimeType);

var _isLatLong = __webpack_require__(176);

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = __webpack_require__(187);

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = __webpack_require__(52);

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__(53);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__(199);

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__(150);

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__(200);

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__(196);

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__(201);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__(45);

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__(193);

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__(195);

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__(28);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '9.4.1';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isPort: _isPort2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isPostalCode: _isPostalCode2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isISO31661Alpha2: _isISO31661Alpha2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isMimeType: _isMimeType2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(28);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(27);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(27);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
  });
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;

var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;

var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString2.default)(str);
  var data = str.split(',');
  if (data.length < 2) {
    return false;
  }
  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }
  var mediaType = schemeAndMediaType.substr(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }
  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {
      // ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp('^[-+]?([0-9]+)?(\\' + _alpha.decimal[options.locale] + '[0-9]{' + options.decimal_digits + '})' + (options.force_decimal ? '' : '?') + '$');
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};

var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_decimal_options);
  if (options.locale in _alpha.decimal) {
    return !blacklist.includes(str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }
  throw new Error('Invalid locale \'' + options.locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = __webpack_require__(54);

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(46);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(26);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  var float = new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\' + (options.locale ? _alpha.decimal[options.locale] : '.') + '[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$');
  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString2.default)(str);
  var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
  return hash.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString2.default)(str);
  return validISO31661Alpha2CountriesCodes.includes(str.toUpperCase());
}
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

function isISO8601(str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString2.default)(str);
  return isrc.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(28);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  (0, _assertString2.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
};

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/

// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len

// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len

// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString2.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[3456789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString2.default)(str);
  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = __webpack_require__(49);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = __webpack_require__(51);

var _isInt2 = _interopRequireDefault(_isInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt2.default)(str, { min: 0, max: 65535 });
}
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locales = undefined;

exports.default = function (str, locale) {
  (0, _assertString2.default)(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
};

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;

var patterns = {
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  TW: /^\d{3}(\d{2})?$/,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};

var locales = exports.locales = Object.keys(patterns);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(26);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(50);

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = __webpack_require__(47);

var _isHalfWidth = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = __webpack_require__(11);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = __webpack_require__(45);

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = __webpack_require__(53);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = __webpack_require__(52);

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}
module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ })
/******/ ]);