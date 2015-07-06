var React = require('react');
var store = require('../stores/mainstore');

module.exports = React.createClass({
	getInitialState: function() {
		return { myVal: 0};
	},
	
	componentWillMount: function(){
		
	},

	componentDidMount: function() {
		
	},

	componentWillUnmount: function() {
		
	},

	render: function() {
		return (
			<div>
				<p> Hello World!</p>
			</div>
		);
	}
});