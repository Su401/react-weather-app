import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FormController from './controllers//FormController';
import WeatherInfo from './controllers/WeatherInfo';
import WeatherForecast from './controllers/WeatherForecast';
import './css/Weather.css';

export default function Weather(props) {
	const [weather, setWeather] = useState({ ready: false });

	useEffect(() => {
		const apikey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apikey}`;
		axios.get(apiUrl).then(handleResponse);
	}, [props.defaultCity]);

	const handleResponse = function (res) {
		console.log(res.data);
		setWeather({
			ready: true,
			temperature: Math.round(res.data.temperature.current),
			date: new Date(res.data.time * 1000),
			description: res.data.condition.description,
			humidity: res.data.temperature.humidity,
			wind: res.data.wind.speed,
			iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${res.data.condition.icon}.png`,
			city: res.data.city,
		});
	};

	const handleSubmit = function (city) {
		const apikey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
		axios.get(apiUrl).then(handleResponse);
	};

	if (weather.ready) {
		return (
			<div className='Weather'>
				<FormController onFormSubmit={handleSubmit} />
				<WeatherInfo data={weather} />
				<WeatherForecast data={weather} />
			</div>
		);
	} else {
		return 'Loading...';
	}
}
