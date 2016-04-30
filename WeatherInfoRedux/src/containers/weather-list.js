import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const pressure = cityData.list.map(weather => weather.main.pressure);

		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Chart data={temps} color="orange"/>
				</td>
				<td>
					<Chart data={humidity} color="orange"/>
				</td>
				<td>
					<Chart data={pressure} color="orange"/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humidity</th>

						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		weather: state.weather
	};  
}

export default connect(mapStateToProps)(WeatherList);