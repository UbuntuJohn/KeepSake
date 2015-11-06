(function($) {

	$.fn.fadeAway = function() {
		this.each(function() {
			$(this).on("click", function() {
				$( "#dialog-confirm" ).dialog({
			        resizable: false,
			        height:140,
			        modal: true,
			        buttons: {
			        "Delete Project": function() {
			        $('.panel').fadeAway();
			        $( this ).dialog( "close" );
			        },
			        Cancel: function() {
			        $( this ).dialog( "close" );
			        }
			        }
    		
				$(this).fadeOut(100);
			});
		});
	}

}(jQuery));