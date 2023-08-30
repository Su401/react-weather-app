import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WeatherInfo from './WeatherInfo';
import FormController from './FormController';
import './Weather.css';

export default function Weather(props) {
	const [weather, setWeather] = useState({ ready: false });

	useEffect(() => {
		const apikey = '6bf9818d9ac6ad65c210c2c0a7205a25';
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}, [props.defaultCity]);

	const handleResponse = function (res) {
		console.log(res.data);
		setWeather({
			ready: true,
			temperature: Math.round(res.data.main.temp),
			date: new Date(res.data.dt * 1000),
			description: res.data.weather[0].description,
			humidity: res.data.main.humidity,
			wind: res.data.wind.speed,
			iconUrl: ` https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
			city: res.data.name,
		});
	};

	const handleSubmit = function (city) {
		const apikey = '6bf9818d9ac6ad65c210c2c0a7205a25';
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	};

	if (weather.ready) {
		return (
			<div className='Weather'>
				<FormController onFormSubmit={handleSubmit} />
				<WeatherInfo data={weather} />
			</div>
		);
	} else {
		return 'Loading...';
	}
}
