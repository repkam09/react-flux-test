// Required files/modules
var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher');


function TodoStore() {
	EventEmitter.call(this);
}

util.inherits(TodoStore, EventEmitter);

TodoStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log("TodoStore got an action: " + action.type);
	switch (action.type) {
		case dispatcher.action.INIT:
			retval = init();
			break;
	}
	return retval;
};

function init(){
	log.log("run function init()");
}

var _store = new TodoStore();
module.exports = _store;