import React from 'react';
import DisplayDate from './DisplayDate';
import TemperatureController from './TemperatureController';

export default function WeatherInfo(props) {
	return (
		<div className='WeatherInfo'>
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					<DisplayDate date={props.data.date} />
				</li>
				<li className='text-capitalize'>{props.data.description}</li>
			</ul>

			<div className='row mt-3'>
				<div className='col-6'>
					<div className='d-flex'>
						<img src={props.data.iconUrl} alt='description' />
						<TemperatureController
							celsius={props.data.temperature}
						/>
					</div>
				</div>
				<div className='col-6'>
					<ul>
						<li>Precipitation: Just look outside</li>
						<li>Humidity: {props.data.humidity} %</li>
						<li>Wind: {props.data.wind} km/s</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
