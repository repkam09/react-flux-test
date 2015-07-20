var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher');

function MainStore() {
	EventEmitter.call(this);
}

util.inherits(MainStore, EventEmitter);

MainStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log("MainStore got an action: " + action.type);
	switch (action.type) {
		case dispatcher.action.INIT:
			retval = init();
			break;
			
		case dispatcher.action.GO_NEXT_VIEW:
			retval = viewRequest();
	}
	return retval;
};

function init(){
	log.log("run function init()");
	_store.emit('some_event');
}


function viewRequest() {
	log.log("run function viewRequest()");
	_store.emit('some_event');
}

var _store = new MainStore();
module.exports = _store;