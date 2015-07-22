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
			retval = doTestView();
			break;
		case dispatcher.action.MOVE_VIEW:
			retval = doMoveView();
			break;
		case dispatcher.action.WEATHER_VIEW:
			retval = doWeatherView();
			break;
	}
	return retval;
};

// The thing to do on the INIT action from the dispatcher
function doTestView(){
	log.log("run function doTestView()");
	_store.emit('some_event');
}

function doMoveView(){
	log.log("run function doMoveView()");
	_store.emit('some_event');
}

function doWeatherView(){
	log.log("run function doWeatherView()");
	_store.emit('reset');
	ajaxGet("http://api.openweathermap.org/data/2.5/weather?q=Rochester,NY");
}


function ajaxGet(req_url) {
	log.log("GET Request to " + req_url);
	var response = $.ajax({
		method: "GET",
		dataType: "jsonp",
		url: req_url + "&APPID=e3b223ffb450c4c194866aaf95c60e0f",
		success: function(data) {
			console.log("Got Weather: " + JSON.stringify(data));
			_store.emit('weather', data);
		}
	});
}


// Create an instance of the store and export it
var _store = new MainStore();
module.exports = _store;