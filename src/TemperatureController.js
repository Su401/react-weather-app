import React, { useState } from 'react';

export default function TemperatureController(props) {
	const [unit, setUnit] = useState('metric');

	function showFsmth(event) {
		event.preventDefault();
		setUnit('imperial');
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit('metric');
	}

	if (unit === 'metric') {
		return (
			<div className='TemperatureController'>
				<span className='temperature'>{props.celsius}</span>
				<span className='unit'>
					ºC |{' '}
					<a href='/' onClick={showFsmth}>
						ºF
					</a>
				</span>
			</div>
		);
	} else {
		let imperial = Math.round((props.celsius * 9) / 5 + 32);
		return (
			<div className='TemperatureController'>
				<span className='temperature'>{imperial}</span>
				<span className='unit'>
					<a href='/' onClick={showCelsius}>
						ºC
					</a>{' '}
					| ºF{' '}
				</span>
			</div>
		);
	}
}
