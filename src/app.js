var React = require('react');
var dispatcher = require('./app/dispatcher/dispatcher');
var jsx_view = require('./app/views/TestView');

dispatcher.register(require('./app/stores/mainstore'));
dispatcher.register(require('./app/stores/localestore'));

var app = React.createElement(jsx_view);
React.render(app, document.getElementById('app'));

// Kick everything off
dispatcher.dispatch({type: dispatcher.action.INIT});