var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');

function MainStore() {
	EventEmitter.call(this);
}

util.inherits(MainStore, EventEmitter);

MainStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log("Action: " + action.type);
	switch (action.type) {
		case 'init':
			retval = init();
			break;
	}
	return retval;
};

function init(){
	log.log("Init!");
	_store.emit('some_event');
}

var _store = new MainStore();

module.exports = _store;