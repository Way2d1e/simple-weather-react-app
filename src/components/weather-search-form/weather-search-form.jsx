import React, { useCallback } from 'react';
import './weather-search-form.css';
import { Form, TextField, Button } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setWeather } from '../../store/slices/weather-slice';
import OpenWeatherMapService from '../../services/open-weather-map-service';

const WeatherSearchForm = () => {
	const openWeatherMapService = new OpenWeatherMapService();
	const query = useSelector((state) => state.weather.query);
	const dispatch = useDispatch();

	const inputHandler = useCallback(
		(newValue) => dispatch(setQuery(newValue)),
		[query],
	);
	const formHandler = () => {
		openWeatherMapService.getWeatherByName(query).then((res) => {
			dispatch(setWeather(res));
		});
	};

	return (
		<div className="weather-search-form">
			<Form noValidate onSubmit={formHandler}>
				<div className="form-elements">
					<TextField
						placeholder="search"
						value={query}
						onChange={inputHandler}
						autoComplete="off"
						label=""
					/>
					<Button
						icon={<i className="fas fa-search"></i>}
						onClick={formHandler}
					/>
				</div>
			</Form>
		</div>
	);
};

export default WeatherSearchForm;
