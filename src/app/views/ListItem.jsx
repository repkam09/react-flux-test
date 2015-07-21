var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');

module.exports = React.createClass({
	getInitialState: function() {
		return {};
	},
	
	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
	},

	render: function() {		
		return (
			<div>
			
			</div>
		);
	}s
});