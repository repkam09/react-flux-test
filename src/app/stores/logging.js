module.exports = {
	log: function (message) {
		console.log('%c[i] ' + message, 'color:black');
	},
	
	warn: function (message) {
		console.warn('[w] ' + message, '');
	},
	
	error: function (message) {
		console.error('[e] ' + message, '');
	}
};
