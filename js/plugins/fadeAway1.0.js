(function($) {

	$.fn.fadeAway = function() {
		this.each(function() {
			$(this).fadeOut(100);
		});
	};

}(jQuery));