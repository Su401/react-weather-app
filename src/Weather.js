import React from 'react';
import './Weather.css';

export default function Weather() {
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
				<li>Day 00/00</li>
				<li>Description</li>
			</ul>

			<div className='row'>
				<div className='col-6'>
					<img src='' alt='description' />
					xª
				</div>
				<div className='col-6'>
					<ul>
						<li>Precipitation: x %</li>
						<li>Humidity: x %</li>
						<li>Wind: x km/s</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
