//Setup
var setList = [ 
 ["test", "answer", "test1", "test2", "test3"],
 ["std1", "answer", "test1"],
 ["std2", "answer", "test1"],
 ["incr1", "answer", "test1", "test2", "test3"],
 ["dual1", "answer", "test1"]
];

var thisSet = 0;
var thisVid = 2;
var guiVid;
var guiTotal;
var vidProg;
var whichClicked;

$(function() {

	function updateGUI() {
		$("#vidNum").fadeOut(500, function() {
			guiVid = thisVid - 1;
			guiTotal = setList[thisSet].length - 2;
			if (guiVid == 0) {
				$("#vidNum").text( "Answer" );
			}
			else { 
				$("#vidNum").text( "Test: " + guiVid + "/" + guiTotal );
			}
			$("#vidNum").fadeIn();
		});

		//Update video control buttons
		if (thisVid >= 3) {
			$("#prevTest").removeClass( "disable" );
		}
		else if (thisVid <= 2) {
			$("#prevTest").addClass( "disable" );
		};

		if (thisVid >= setList[thisSet].length - 1) {
			$("#nextTest").addClass( "disable" );
		}
		else if (thisVid < setList[thisSet].length - 1) {
			$("#nextTest").removeClass( "disable" );
		};

		if (thisVid == 1) {
			$("#showAnswer").addClass( "disable" );
		}
		else if (thisVid >= 2) {
			$("#showAnswer").removeClass( "disable" );
		};
	}

	$(document).ready(function() {
		$("#videoPlayer").fadeOut(500, function() {
			updateGUI();
			$("#mp4Vid").attr("src", "media/" + setList[thisSet][0] + "/" + setList[thisSet][thisVid] + ".mp4");
			$("#videoPlayer").load();
			$("#videoPlayer").fadeIn();
		});
	});

	$(".setButton").click(function() {
		whichClicked = $(this).attr('id');
		$("#videoPlayer").fadeOut(500, function() {
			$("#" + thisSet).removeClass("highlight");
			thisSet = whichClicked;
			thisVid = 2;
			updateGUI();
			$("#mp4Vid").attr("src", "media/" + setList[thisSet][0] + "/" + setList[thisSet][thisVid] + ".mp4");
			$("#videoPlayer").attr("autoplay", false);
			$("#videoPlayer").load();
			$("#" + thisSet).addClass("highlight");
			$("#videoPlayer").fadeIn();
		});
	});


	//Functions for iterating through the videos in a set
	$("#nextTest").click(function() {
		$("#videoPlayer").fadeOut(500, function() {
			++thisVid;
			updateGUI();
			$("#mp4Vid").attr("src", "media/" + setList[thisSet][0] + "/" + setList[thisSet][thisVid] + ".mp4");
			$("#videoPlayer").attr("autoplay", false);
			$("#videoPlayer").load();
			$("#videoPlayer").fadeIn();
		});
	});

	$("#prevTest").click(function() {
		$("#videoPlayer").fadeOut(500, function() {
			--thisVid;
			updateGUI();
			$("#mp4Vid").attr("src", "media/" + setList[thisSet][0] + "/" + setList[thisSet][thisVid] + ".mp4");
			$("#videoPlayer").attr("autoplay", false);
			$("#videoPlayer").load();
			$("#videoPlayer").fadeIn();
		});
	});

	$("#showAnswer").click(function() {
		$("#videoPlayer").fadeOut(500, function() {
			thisVid = 1;
			updateGUI();
			$("#mp4Vid").attr("src", "media/" + setList[thisSet][0] + "/" + setList[thisSet][thisVid] + ".mp4");
			$("#videoPlayer").attr("autoplay", true);
			$("#videoPlayer").load();
			$("#videoPlayer").fadeIn();
		});
	});

	$("#playPause").click(function() {
		if ( $("#videoPlayer").get(0).paused == true ) {
			$("#videoPlayer").get(0).play();
			$("#playPause").text( "||" );
		}
		else if ( $("#videoPlayer").get(0).paused == false ) {
			$("#videoPlayer").get(0).pause();
			$("#playPause").html("&#9655;").text();
		}
	});

	$("#videoPlayer").on("ended", function() {
		$("#playPause").html("&#9655;").text();
	});

	$("#videoPlayer").on("timeupdate", function() {
		if ( $("#videoPlayer").get(0).paused == true ) {
			$("#playPause").html("&#9655;").text();
		}
		else if ( $("#videoPlayer").get(0).paused == false ) {
			$("#playPause").text( "||" );
		}

		vidProg = $("#videoPlayer").get(0).currentTime / $("#videoPlayer").get(0).duration * 100;
		if (vidProg == NaN) {
			vidProg = 0;
		}
		$("#progressBar").progressbar( "value", vidProg );
		console.log( "vProg:" + vidProg );
	});

	$("#progressBar").progressbar({
      value: 0
    });
});