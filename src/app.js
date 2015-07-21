var React = require('react');
var dispatcher = require('./app/dispatcher/dispatcher');

// Register all of the stores with the dispatcher
dispatcher.register(require('./app/stores/mainstore'));
dispatcher.register(require('./app/stores/localestore'));
dispatcher.register(require('./app/stores/todostore'));

// Select the view to display
var view = require('./app/views/TestView');
var app = React.createElement(view);
React.render(app, document.getElementById('app'));

// Kick everything off
dispatcher.dispatch({type: dispatcher.action.INIT});