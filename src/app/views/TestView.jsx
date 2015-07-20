var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');


module.exports = React.createClass({
	getInitialState: function() {
		return { displayString: "Hello World", someNumber: 0, someArray: ['test', 'test2', 'test3']};
	},
	
	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
		console.log(this.state.displayString);
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
	},

	render: function() {
		var urlArray = ['http://i.imgur.com/cqZK11x.jpg', 'http://i.imgur.com/D1TzTBZ.jpg', 'http://i.imgur.com/QuqPveo.jpg', 'http://i.imgur.com/zrAxG9E.jpg'];
		var reactStrings = urlArray.map(function(string) {
            return (<img src={string} width="100" height="100"> </img>);
        });
		
		return (
			<div>
				<h3> This is some JSX here. It looks just like HTML </h3>
				<p>{reactStrings}</p>
				<p className="redText" > But we can use JavaScript variables, like above! </p>
				<button onClick={this.handleClick} > Click on me </button>
				<p> Number of clicks is {this.state.someNumber} </p>				
			</div>
		);
	},
	
	handleClick: function() {
		var upCounter = this.state.someNumber + 1;
		this.setState({someNumber: upCounter});
	}
});