var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');
var flickrstore = require('../stores/flickrstore');
var ImageItemJsx = require('../components/ImageItem');

module.exports = React.createClass({
	getInitialState: function() {
		return {urlArray: []};
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
				<p>LastFM Data for repkam09</p>
				
			</div>
		);
	},
	
	handleImage : function(item) {
		console.log("handle " + JSON.stringify(item));
		var newArray = this.state.urlArray;
		newArray.push(item);
		this.setState({urlArray: newArray});	
	},
	
	reset : function() {
		console.log("lastfmview reset");
		this.setState({urlArray: []});	
	}
});