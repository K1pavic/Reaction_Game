var elementWidth; var firstRowHeight; var secondRowHeight 

var windowHeight; var resultHeight; var offsetWidth;

windowSize();

$(window).resize(function() {

	windowSize();

});

function windowSize() {

elementWidth = $("#playground").width();

firstRowHeight = $("#firstRow").height();

secondRowHeight = $("#secondRow").height();

windowHeight = $(window).height();

resultHeight = windowHeight - firstRowHeight - secondRowHeight - 30;

$("#playground").css("height", resultHeight);

offsetWidth = (elementWidth * 8.33) / 100;

console.log(offsetWidth);

}

// Getting the playground div size


function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');
    
    var color = '#';

    for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * 16)];
    
    }

    if (color == "#000000") {

        	getRandomColor();

    } else {

    	return color;

    }

}

// Generating a color value


var clickedTime; var createdTime; var reactionTime; var i; var startedTime; var overallTime; var finishedTime;

var bestTime; var bestOverall;

i = 0;

bestTime = 0;

overallTime = 0;

function makeBox() {

	var time = Math.random();

	time = time*1500;

	var shape = Math.random();

	setTimeout(function() { // The function has a delay of var time

		if(i<10) { // There will appear 10 objects

			if (shape > 0.5) {

				document.getElementById("box").style.borderRadius = "50px";

			} else {

				document.getElementById("box").style.borderRadius = "0px";

			}

		} else {

			i = 0;

			finishedTime = Date.now();

			overall();

			return;

		}

		var top = Math.random();

		top = top * (resultHeight - 30);

		var left = 0.7;//Math.random();

		left = left * (elementWidth + offsetWidth + 2);

		document.getElementById("box").style.width = (elementWidth / 25) + "px"; 

		document.getElementById("box").style.height = (elementWidth / 25) + "px"; 

		document.getElementById("box").style.top = top + "px"; 

		document.getElementById("box").style.left = left + "px";

		document.getElementById("box").style.backgroundColor = getRandomColor();

		document.getElementById("box").style.display = "block";

		createdTime = Date.now();

		i++;

	}, time);

}

// Decieding about the shape and the position of the object


document.getElementById("box").onclick = function() {

	clickedTime = Date.now();

	reactionTime = (clickedTime - createdTime) / 1000;

	bestTime = document.getElementById("timeClick").innerHTML;

	this.style.display = "none";

	document.getElementById("time").innerHTML = reactionTime; // Set every reaction time

	if (bestTime > reactionTime || bestTime == 0) { 

		document.getElementById("timeClick").innerHTML = reactionTime; 	// Set the best single reaction time

	}

	makeBox();

}

// Getting the reaction time


document.getElementById("start").onclick = function() { // Start the game
	
	makeBox();

	startedTime = Date.now();

	document.getElementById("time").innerHTML = 0;

	document.getElementById("complete").innerHTML = 0;

}

// First created object function call when the start button is clicked


function overall () {

	overallTime = (finishedTime - startedTime) / 1000;

	document.getElementById("complete").innerHTML = overallTime;

	bestOverall = document.getElementById("completeTime").innerHTML

	if (bestOverall > overallTime || bestOverall == 0) {

		document.getElementById("completeTime").innerHTML = overallTime;

	}

}

// Get the overall time of clicking on 10 objects and update the best overall time
