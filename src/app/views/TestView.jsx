var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');
var mainstore = require('../stores/mainstore');
var localestore = require('../stores/localestore');

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
		var urlArray = ['http://i.imgur.com/cqZK11x.jpg', 'http://i.imgur.com/D1TzTBZ.jpg',
						'http://i.imgur.com/QuqPveo.jpg', 'http://i.imgur.com/zrAxG9E.jpg'];
						
		var reactStrings = urlArray.map(function(string) {
            return (<img src={string} width="100" height="100" key={string} > </img>);
        });
		
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
	
	handleClick: function() {
		var upCounter = this.state.someNumber + 1;
		this.setState({someNumber: upCounter});
	},
	
	toggleLanguage: function() {
		dispatcher.dispatch({type: dispatcher.action.LANGUAGE});
		this.setState({});
	}
});