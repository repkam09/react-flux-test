// Required files/modules
var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher');

// Constructor for the MainStore
function MainStore() {
	EventEmitter.call(this);
}

util.inherits(MainStore, EventEmitter);

// actionHandler is a callback function for the dispatcher
// to send actions to this store. Decides what to do 
// with the action when it arrives via a switch
MainStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log("MainStore got an action: " + action.type);
	switch (action.type) {
		case dispatcher.action.TEST_VIEW:
			retval = init();
			break;
	}
	return retval;
};

// The thing to do on the INIT action from the dispatcher
function init(){
	log.log("run function init()");
	_store.emit('some_event');
}


// Create an instance of the store and export it
var _store = new MainStore();
module.exports = _store;