import React from 'react';
import '../css/WeatherForecast.css';

export default function WeatherForecast(props) {
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
