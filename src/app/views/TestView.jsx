var React = require('react');
var store = require('../stores/mainstore');

module.exports = React.createClass({
	getInitialState: function() {
		return { displayString: "Hello World"};
	},
	
	componentWillMount: function(){
		
	},

	componentDidMount: function() {
		console.log("Got an event, some_event");
		store.on('some_event', this.handleEvent);
	},

	componentWillUnmount: function() {
		
	},
	
	handleEvent: function() {
		this.setState({displayString: "Hello World, new event!"});
	},

	render: function() {
		return (
			<div>
				<p>{this.state.displayString}</p>
			</div>
		);
	}
});