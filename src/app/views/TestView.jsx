var React = require('react');
var store = require('../stores/mainstore');

module.exports = React.createClass({
	getInitialState: function() {
		return { displayString: "Hello World", someNumber: 1, someArray: ['test', 'test2', 'test3']};
	},
	
	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
		// Display one of our initial state values that was defined above:
		console.log(this.state.displayString);
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
		store.on('some_event', this.handleEvent);
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
	},
	
	handleEvent: function() {
		console.log("Got an event, some_event");
		this.setState({displayString: "Hello World, new event!"});
	},

	render: function() {
		var urlArray = ['hello world', 'test string!', 'kodak alaris'];
		var reactStrings = urlArray.map(function(string) {
            return (
				<div>
					<p> {string} </p>
				</div>
			)
        });
		
		return (
			<div>
				<p> This is some JSX here. It looks just like HTML </p>
				<p>{reactStrings}</p>
				<p> But we can use JavaScript variables, like above! </p>
			</div>
		);
	}
});