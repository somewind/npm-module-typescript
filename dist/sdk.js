(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.sdk = {}));
}(this, function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var lib = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * get welcome words
	 * @param name your name
	 * @returns welcome words
	 */
	function sayHello(name) {
	    return "hello, " + name;
	}
	exports.sayHello = sayHello;

	});

	var index = unwrapExports(lib);
	var lib_1 = lib.sayHello;

	exports.default = index;
	exports.sayHello = lib_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sdk.js.map
