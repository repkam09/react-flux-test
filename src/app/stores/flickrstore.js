// Required files/modules
var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher');


function FlickrStore() {
	EventEmitter.call(this);
}

util.inherits(FlickrStore, EventEmitter);

FlickrStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log("FlickrStore got an action: " + action.type);
	switch (action.type) {
		case dispatcher.action.INIT:
			retval = getFlickrImages();
			break;
	}
	return retval;
};

function getFlickrImages() {
	// 
	
	// Assign handlers immediately after making the request,
	// and remember the jqXHR object for this request
	var jqxhr = $.ajax("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
		.done(function (result) {
			alert("success = " + JSON.stringify(result));
		})
		.fail(function (error) {
			alert("error = " + JSON.stringify(error));
		});
}

var _store = new FlickrStore();
module.exports = _store;