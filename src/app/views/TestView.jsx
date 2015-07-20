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
		var urlArray = ['One Fish', 'Two Fish', 'Red Fish', 'Blue Fish'];
		var reactStrings = urlArray.map(function(string) {
            return (<div><p> {string} </p></div>);
        });
		
		return (
			<div>
				<h3> This is some JSX here. It looks just like HTML </h3>
				<p>{reactStrings}</p>
				<p className="redText" > But we can use JavaScript variables, like above! </p>
				<button onClick={this.handleClick} > Click on me </button>
				<p> Number of clicks is {this.state.someNumber} </p>
				<button onClick={this.handleClickView} > Next View </button>
			</div>
		);
	},
	
	handleClick: function() {
		var upCounter = this.state.someNumber + 1;
		this.setState({someNumber: upCounter});
	},
	
	handleClickView: function() {
		dispatcher.dispatch(dispatcher.action.GO_NEXT_VIEW);
	}
});