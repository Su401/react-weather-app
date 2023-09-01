import React from 'react';

export default function DayForecast(props) {
	function maxTemp() {
		let temp = Math.round(props.data.temperature.maximum);
		return `${temp}º`;
	}
	function minTemp() {
		let temp = Math.round(props.data.temperature.minimum);
		return `${temp}º`;
	}
	function day() {
		let date = new Date(props.data.time * 1000);
		let day = date.getDay();
		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return days[day];
	}

	return (
		<div className='DayForecast'>
			<div className='row'>
				<div className='col'>
					<div className='forecastDay'> {day()}</div>
					<div className='forecastIcon'>
						<img src={props.data.condition.icon_url} alt='icon' />
					</div>
					<div className='forecastTemps'>
						<span className='forecastTempMax'>{maxTemp()}</span> |{' '}
						<span className='forecastTempMin'>{minTemp()}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
