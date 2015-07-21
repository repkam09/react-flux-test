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
		case dispatcher.action.FLICKR_VIEW:
			retval = getFlickrImages();
			break;
	}
	return retval;
};

function getFlickrImages() {
	// Assign handlers immediately after making the request,
	// and remember the jqXHR object for this request
	ajaxGet("https://api.flickr.com/services/feeds/photos_public.gne?format=json");
}

function ajaxGet(req_url) {
	log.log("GET Request to " + req_url);
	$.ajax({
		method: "GET",
		dataType: "jsonp",
		url: req_url,
	});
}

// Deal with the callback of the jsonp request. Grrr.
window["jsonFlickrFeed"] = function (data) {
	var array = data.items;
	array.forEach(function(item){
		var title = item.title;
		var url = item.media.m;
		
		var newItem = {title: title, url: url};
		
		_store.emit('new_image', newItem);
	});
}

var _store = new FlickrStore();
module.exports = _store;