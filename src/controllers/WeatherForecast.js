import React, { useEffect, useState } from 'react';
import '../css/WeatherForecast.css';
import DayForecast from './DayController';
import axios from 'axios';

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.data.city]);

	function handleResponse(res) {
		setForecast(res.data.daily);
		setLoaded(true);
	}
	function load() {
		const apikey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apikey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className='WeatherForecast'>
				<div className='row'>
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className='col' key={index}>
									<DayForecast data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();
		return null;
	}
}
