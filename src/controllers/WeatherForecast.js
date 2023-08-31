import React from 'react';
import '../css/WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {
	function handleResponse(res) {
		console.log(res.data);
	}

	const apikey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apikey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div className='WeatherForecast'>
			<div className='row'>
				<div className='col'>
					<div className='forecastDay'> Day</div>
					<div className='forecastIcon'>
						<img src={props.data.iconUrl} alt='icon' />
					</div>
					<div className='forecastTemps'>
						<span className='forecastTempMax'>X</span> |{' '}
						<span className='forecastTempMin'>X</span>
					</div>
				</div>
			</div>
		</div>
	);
}
