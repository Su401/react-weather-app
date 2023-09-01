import React, { useState } from 'react';
import '../css/WeatherForecast.css';
import DayForecast from './DayController';
import axios from 'axios';

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(res) {
		setForecast(res.data.daily);
		setLoaded(true);
	}
	if (loaded) {
		console.log(forecast);
		return (
			<div className='WeatherForecast'>
				<DayForecast data={forecast[0]} />
			</div>
		);
	} else {
		const apikey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apikey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
