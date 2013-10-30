/*!
 * mailKitten-UI
 * Bootstrap like UI libaray
 * Copyright (c) 2013 Daniel Yang <miniflycn@justany.net>
 * MIT Licensed
 */
!function ($) {

	function UI(selector) {
		return new UI.fn.init(selector);
	}
	UI.fn = UI.prototype = {
		constructor: UI,
		init: function (selector) {
			this.$ = $(selector);
		}
	};
	UI.fn.init.prototype = UI.fn;

	UI.lang = {};

	window.UI = UI;
}($);