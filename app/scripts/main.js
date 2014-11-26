"use strict";

// DISABLE HOVER WHILE SCROLL
var disableHoverOnScroll = function() {
	var body = document.body,
		timer,
		addEvent = window.attachEvent || window.addEventListener;
	addEvent('scroll', function() {
		clearTimeout(timer);
		if (!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover');
		}
		timer = setTimeout(function() {
			body.classList.remove('disable-hover');
		}, 500);
	}, false);
};

// FILTERS
var filterSelection = function() {
	if (jQuery('#container').length) {
		jQuery('#container').mixItUp({
			load: {
				sort: 'order:desc'
			}
		});
	}
};

// DOCUMENT READY
jQuery(document).ready(function() {
	disableHoverOnScroll();
	filterSelection();
});