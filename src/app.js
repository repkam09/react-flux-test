var React = require('react');
var dispatcher = require('./app/dispatcher/dispatcher');

// Register all of the stores with the dispatcher
dispatcher.register(require('./app/stores/mainstore'));
dispatcher.register(require('./app/stores/localestore'));
dispatcher.register(require('./app/stores/flickrstore'));

// button handlers
$(document).ready(function() {
    $("#btnTestView").click(btnTestView);
	$("#btnFlickrView").click(btnFlickrView);
	$("#btnMoveView").click(btnMoveView);
	$("#btnWeatherView").click(btnWeatherView);
});

function btnTestView(event) {
	event.preventDefault();
	var view = require('./app/views/TestView');
	reactGoView(view);
	
	dispatcher.dispatch({type: dispatcher.action.TEST_VIEW});
}

function btnFlickrView(event) {
	event.preventDefault();
	var view = require('./app/views/FlickrView');
	reactGoView(view);
	
	dispatcher.dispatch({type: dispatcher.action.FLICKR_VIEW});
}


function btnMoveView(event) {
	event.preventDefault();
	var view = require('./app/views/MoveView');
	reactGoView(view);
	
	dispatcher.dispatch({type: dispatcher.action.MOVE_VIEW});
}

function btnWeatherView(event) {
	event.preventDefault();
	var view = require('./app/views/WeatherView');
	reactGoView(view);
	
	dispatcher.dispatch({type: dispatcher.action.WEATHER_VIEW});
}


function reactGoView(view) {
	var app = React.createElement(view);
	React.render(app, document.getElementById('app'));
}