var React = require('react');
var dispatcher = require('./app/dispatcher/dispatcher');
var jsx_view = require('./app/views/TestView');


dispatcher.register(require('./app/stores/mainstore'));

var app = React.createElement(jsx_view);
React.render(app, document.getElementById('app'));

// Kick everything off
dispatcher.dispatch(dispatcher.action.INIT);