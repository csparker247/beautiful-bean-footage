$(function() {
	//Setup the player	
	$(document).ready(function() {
		var bbfPlaylist;

		//Get our sources
		$("bbf-video").each(function ( index ){
			console.log( index + $(this).attr("mpv") );
			console.log( index + $(this).attr("ogg") );
		});

		//Add the media controllers
		prev = "<span class='bbf-nav' id='bbfprev'>&#8592;</span>";
		playPause = "<span class='bbf-nav' id='bbfplayPause'>&#9655;</span>";
		next = "<span class='bbf-nav' id='bbfnext'>&#8594;</span>";
		controls = "<div id='bbf-controls'>" + prev + playPause + next + "</div>";
		$("bbf-player").append(controls);
	});

});