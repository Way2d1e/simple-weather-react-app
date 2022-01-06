import React from 'react';
import './app.css';
import WeatherSearchForm from '../weather-search-form';
import WeatherForecast from '../weather-forecast';
import WeatherFavoriteList from '../weather-favorite-list';

const App = () => {
	return (
		<div className="container">
			<div>
				<WeatherSearchForm />
				<WeatherForecast />
			</div>
			<WeatherFavoriteList />
		</div>
	);
};

export default App;
