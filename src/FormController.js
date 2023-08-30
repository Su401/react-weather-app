import React, { useState } from 'react';

export default function FormController({ onFormSubmit }) {
	const [city, setCity] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onFormSubmit(city);
	};

	return (
		<div className='FormController'>
			<form onSubmit={handleSubmit}>
				<div className='row'>
					<div className='col-9'>
						<input
							type='search'
							placeholder='Type a city...'
							className='formController'
							value={city}
							onChange={(e) => setCity(e.target.value)}
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
		</div>
	);
}
