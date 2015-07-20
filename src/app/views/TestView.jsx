var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { displayString: "Hello World", someNumber: 1, someArray: ['test', 'test2', 'test3']};
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
		var urlArray = ['hello world', 'test string!', 'kodak alaris'];
		var reactStrings = urlArray.map(function(string) {
            return (<div><p> {string} </p></div>);
        });
		
		return (
			<div>
				<h3> This is some JSX here. It looks just like HTML </h3>
				<p>{reactStrings}</p>
				<p className="redText" > But we can use JavaScript variables, like above! </p>
			</div>
		);
	}
});