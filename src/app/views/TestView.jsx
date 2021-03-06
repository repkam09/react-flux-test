var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');
var mainstore = require('../stores/mainstore');
var localestore = require('../stores/localestore');
var ImageItemJsx = require('../components//ImageItem');

module.exports = React.createClass({	
	getInitialState: function() {
		return { displayString: "Hello World", someNumber: 0, someArray: ['test', 'test2', 'test3']};
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
		var urlArray = ['https://i.imgur.com/cqZK11x.jpg', 'https://i.imgur.com/D1TzTBZ.jpg',
						'https://i.imgur.com/QuqPveo.jpg', 'https://i.imgur.com/zrAxG9E.jpg'];
						
		var reactStrings = urlArray.map(function(string) {
			// Create a sub react components to represent an image with some props
			return (<ImageItemJsx url={string} title={string} key={string} />);
        });
		
		// Get the strings in the correct language from the localestore
		var head_str = localestore.getTextString("head_str");
		var red_str = localestore.getTextString("red_str");
		var btn_str = localestore.getTextString("btn_str");
		var clk_str = localestore.getTextString("clk_str");
		var chg_lng = localestore.getTextString("chg_lng");
		
		return (
			<div>
				<h3> {head_str} </h3>
				<div>
					{reactStrings}
				</div>
				<p className="redText" > {red_str} </p>
				<button onClick={this.handleClick} > {btn_str} </button>
				<p> {clk_str} {this.state.someNumber} </p>
				<button onClick={this.toggleLanguage} > {chg_lng} </button>	
			</div>
		);
	},
	
	// A button click handler to increment the someNumber count
	handleClick: function() {
		var upCounter = this.state.someNumber + 1;
		this.setState({someNumber: upCounter});
	},
	
	// A button click handler to send a LANGUAGE event
	// changing the current language before rerendering
	toggleLanguage: function() {
		dispatcher.dispatch({type: dispatcher.action.LANGUAGE});
		this.setState({});
	}
});