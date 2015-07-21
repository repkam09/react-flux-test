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
});

function btnTestView() {
	var view = require('./app/views/TestView');
	var app = React.createElement(view);
	React.render(app, document.getElementById('app'));
	
	dispatcher.dispatch({type: dispatcher.action.TEST_VIEW});
}

function btnFlickrView() {
	var view = require('./app/views/FlickrView');
	var app = React.createElement(view);
	React.render(app, document.getElementById('app'));
	
	dispatcher.dispatch({type: dispatcher.action.FLICKR_VIEW});
}