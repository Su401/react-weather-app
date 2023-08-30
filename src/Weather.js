import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayDate from './DisplayDate';
import './Weather.css';

export default function Weather(props) {
	const [weather, setWeather] = useState({ ready: false });

	useEffect(() => {
		const apikey = '6bf9818d9ac6ad65c210c2c0a7205a25';
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}, [props.defaultCity]);

	function handleResponse(res) {
		console.log(res.data);
		setWeather({
			ready: true,
			temperature: Math.round(res.data.main.temp),
			date: new Date(res.data.dt * 1000),
			description: res.data.weather[0].description,
			humidity: res.data.main.humidity,
			wind: res.data.wind.speed,
			iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
			city: res.data.name,
		});
	}
	if (weather.ready) {
		return (
			<div className='Weather'>
				<form>
					<div className='row'>
						<div className='col-9'>
							<input
								type='search'
								placeholder='Type a city...'
								className='formController'
							/>
						</div>
						<div className='col-3'>
							<input
								type='submit'
								value='Search'
								className='btn btn-primary'
							/>
						</div>
					</div>
				</form>

				<h1>City</h1>
				<ul>
					<li>
						<DisplayDate date={weather.date} />
					</li>
					<li className='text-capitalize'>{weather.description}</li>
				</ul>

				<div className='row'>
					<div className='col-6'>
						<img src={weather.iconUrl} alt='description' />
						{weather.temperature}ºC
					</div>
					<div className='col-6'>
						<ul>
							<li>Precipitation: x %</li>
							<li>Humidity: {weather.humidity} %</li>
							<li>Wind: {weather.wind} km/s</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		return 'Loading...';
	}
}
