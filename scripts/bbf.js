$(function() {
	//Setup the player	
	$(document).ready(function() {
		//Hide the extra sources
		var vidList = $(".bbf").children();
		$.each(vidList, function (index, value) {
			if (index > 0) {
				$(vidList[index]).hide();
			};
		});

		//Add the media controllers
		$prev = $( "<span class='bbfNav' id='bbfprev'>&#8592;</span>" );
		$playPause = $( "<span class='bbfNav' id='bbfplayPause'>&#9655;</span>" );
		$next = $( "<span class='bbfNav' id='bbfnext'>&#8594;</span>" );

		$(".bbf").append($prev, $playPause, $next);
	});

});