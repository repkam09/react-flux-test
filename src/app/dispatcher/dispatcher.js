var FluxDisp = require('flux').Dispatcher;

// Create our dispatcher
var dispatcher = new FluxDisp();


function _dispatcher() { }

_dispatcher.prototype.dispatch =  function(data) {
	dispatcher.dispatch({type: data});	
};
	
_dispatcher.prototype.register = function(self) {
	dispatcher.register(function (action) { self.actionHandler(action); });
};
	
_dispatcher.prototype.action =  Object.freeze({
	INIT: 'init',
	GO_NEXT_VIEW: 'go_next_view'
});

module.exports = new _dispatcher();