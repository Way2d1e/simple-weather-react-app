import React from 'react';
import './weather-favorite-list-item.css';
import { DisplayText, Button } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteFavoriteListItem,
	setWeather,
} from '../../store/slices/weather-slice';
import OpenWeatherMapService from '../../services/open-weather-map-service';

const WeatherFavoriteListItem = ({ label }) => {
	const openWeatherMapService = new OpenWeatherMapService();

	const list = useSelector((state) => state.weather.list);
	const dispatch = useDispatch();

	const deleteItem = (label) => {
		const idx = list.indexOf(label);
		const localList = JSON.parse(localStorage.getItem('favoriteList'));

		const newArray = [...localList.slice(0, idx), ...localList.slice(idx + 1)];
		localStorage.setItem('favoriteList', JSON.stringify(newArray));
		dispatch(deleteFavoriteListItem([idx]));
	};
	const updateWeather = (label) => {
		openWeatherMapService.getWeatherByName(label).then((res) => {
			dispatch(setWeather(res));
		});
	};

	return (
		<div className="weather-favorite-list-item">
			<DisplayText size={'small'}>{label}</DisplayText>
			<div className="buttons">
				<Button
					onClick={() => updateWeather(label)}
					size="slim"
					icon={<i className="fas fa-map-marker-alt"></i>}
				></Button>
				<Button
					onClick={() => deleteItem(label)}
					size="slim"
					icon={<i className="fas fa-trash-alt"></i>}
				></Button>
			</div>
		</div>
	);
};

export default WeatherFavoriteListItem;
