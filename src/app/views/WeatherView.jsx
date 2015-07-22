var React = require('react');
var dispatcher = require('../dispatcher/dispatcher');
var mainstore = require('../stores/mainstore');

module.exports = React.createClass({	
	getInitialState: function() {
		return {weather: "unknown", nowTemp: 0, lowTemp: 0, highTemp: 0, city: "Unknown"};
	},
	
	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
		mainstore.on('weather', this.setWeather);
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
		mainstore.removeListener('weather', this.setWeather);
	},

	render: function() {
		return (
			<div>
				<h1>City: {this.state.city} </h1>
				<h3>Current Temp: {this.state.nowTemp} </h3>
				<p> Low Temp: {this.state.lowTemp} </p>
				<p> High Temp: {this.state.highTemp} </p>
				<p> Current Weather is {this.state.weather} </p>
			</div>
		);
	},
	
	setWeather : function(data) {
		var weather = data.weather[0].description;
		var nowTemp = kelvinConvert(data.main.temp);
		var lowTemp = kelvinConvert(data.main.temp_min);
		var highTemp = kelvinConvert(data.main.temp_max);
		var city = data.name;
		
		this.setState({weather: weather, nowTemp: nowTemp, lowTemp: lowTemp, highTemp: highTemp, city: city});
	}
});


function kelvinConvert(tempKelvin) {
	return Math.round((tempKelvin - 273) * 1.8 + 32);
}