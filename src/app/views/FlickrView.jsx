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
		flickrstore.on('new_image', this.handleImage);
		flickrstore.on('reset', this.reset);
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
		flickrstore.removeListener('new_image', this.handleImage);
		flickrstore.removeListener('reset', this.reset);
	},

	render: function() {
		var images = this.state.urlArray.map(function(item){
			return (
				<ImageItemJsx key={item.url} url={item.url} title={item.title} />
			);
		})
		
		return (
			<div>
				<p>This react component dynamically pulls the latest public images from my Flickr account and displays them! </p>
				{images}
			</div>
		);
	},
	
	handleImage : function(item) {		
		var newArray = this.state.urlArray;
		newArray.push(item);
		this.setState({urlArray: newArray});	
	},
	
	reset : function() {
		console.log("flickrview reset");
		this.setState({urlArray: []});	
	}
});
