var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var store = require('./app/stores/mainstore');

// Create our dispatcher
var dispatcher = new Dispatcher();
dispatcher.register(function (action) {
	store.actionHandler(action);
});

var jsx_view = require('./app/views/TestView');
var app = React.createElement(jsx_view);
React.render(app, document.getElementById('app'));


// Kick everything off
dispatcher.dispatch({ type: "init"});