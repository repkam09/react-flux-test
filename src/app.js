var Dispatcher = require('flux').Dispatcher;
var store = require('./app/stores/mainstore');

// Create our dispatcher
var dispatcher = new Dispatcher();
dispatcher.register(function (action) {
	store.actionHandler(action);
});

// Kick everything off
dispatcher.dispatch({ type: "init"});