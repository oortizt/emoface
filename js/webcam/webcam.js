var initialDate;
var resultShowed = false;

function initWebcam() {
	jQuery("#btnShowResult").hide();
resultShowed = false;
jQuery("#webcam").empty();
jQuery("#webcam").webcam({

	width: 320,
	height: 240,
	mode: "callback",
	swffile: "js/webcam/jscam_canvas_only.swf", // canvas only doesn't implement a jpeg encoder, so the file is much smaller

	onTick: function(remain) {

		if (0 == remain) {
			jQuery("#status").text("Cheese!");
		} else {
			jQuery("#status").text(remain + " seconds remaining...");
		}
	},

	onSave: function(data) {

		var col = data.split(";");
    // Work with the picture. Picture-data is encoded as an array of arrays... Not really nice, though =/
	},

	onCapture: function () {
		webcam.save();

 	  // Show a flash for example
	},

	debug: function (type, string) {
		// Write debug information to console.log() or a div, ...
	},

	onLoad: function () {
    // Page load
		var cams = webcam.getCameraList();
		for(var i in cams) {
			jQuery("#cams").append("<li>" + cams[i] + "</li>");
		}
	}
});

 initialDate = new Date();
    setInterval(function() {
        var currentDate = new Date();        
        if (!resultShowed && (currentDate - initialDate) > 10000) {
			resultShowed = true;
			jQuery("#btnShowResult").show();
		}
    }, 1000);
}

function showResult() {
	jQuery("#webcam").empty();			
	var html = '';
	html += '<div class="col_full">';
	html += '<div class="feature-box fbox-border fbox-light fbox-effect">';
	html += '<div class="fbox-icon">';
	html += '<a href="#"><i class="icon-thumbs-up"></i></a>';
	html += '</div>';
	html += '<h3>La emoción es positiva!</h3>';
	html += '<p>El sistema detecto emociones positivas (Alegria, Sorpresa y Confianza) en las reacciones mostradas</p>';
	html += '</div></div>';
	jQuery("#webcam").append(html);
}