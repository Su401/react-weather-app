import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Weather />
				<footer>
					<small>
						This page was coded by{' '}
						<a href='https://www.linkedin.com/in/susana-silva-/'>
							Susana Silva
						</a>
						, is open-sourced on{' '}
						<a href='https://github.com/Su401/react-weather-app'>
							GitHub
						</a>{' '}
						and hosted on{' '}
						<a href='https://friendly-cat-798438.netlify.app/'>
							Netlify
						</a>
						.
					</small>
				</footer>
			</div>
		</div>
	);
}
