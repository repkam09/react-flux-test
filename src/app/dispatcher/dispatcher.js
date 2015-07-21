var FluxDisp = require('flux').Dispatcher;
var log = require('../stores/logging');

// Create an instance of the Facebook Flux dispatcher
var dispatcher = new FluxDisp();

// Create our own object dispatcher with our own interface
function MyDispatcher() {
		log.log("Created MyDispatcher in dispatcher.js");
}

// Dispatch: sends an event to all of the registered stores
MyDispatcher.prototype.dispatch =  function(data) {
	if (data.type) {
		log.log("Dispatch Action:" + data.type + ", Payload: " +  JSON.stringify(data));
		dispatcher.dispatch({type: data.type, payload: data});
	} else {
		log.log("Dispatch Action: " + data);
		dispatcher.dispatch({type: data});
	}	
};
	
// Registers a store with the dispatcher so that actions can be passed to it
MyDispatcher.prototype.register = function(self) {
	dispatcher.register(function (action) { self.actionHandler(action); });
};

// Supported actions in the dispatcher
MyDispatcher.prototype.action =  Object.freeze({
	TEST_VIEW: 'test_view',
	FLICKR_VIEW: 'flickr_view',
	MOVE_VIEW: "move_view",
	LANGUAGE: 'language'
});

module.exports = new MyDispatcher();