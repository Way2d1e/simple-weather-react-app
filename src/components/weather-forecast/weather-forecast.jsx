import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './weather-forecast.css';
import { Card, DisplayText, Button } from '@shopify/polaris';
import { setFavoriteList, setWeather } from '../../store/slices/weather-slice';
import OpenWeatherMapService from '../../services/open-weather-map-service';

const WeatherForecast = () => {
	const openWeatherMapService = new OpenWeatherMapService();

	const { city, temp, tempFeelsLike, wind, humidity, description } =
		useSelector((state) => state.weather.weather);
	const list = useSelector((state) => state.weather.list);
	const dispatch = useDispatch();

	const getWeatherByCoords = (latitude, longitude) => {
		openWeatherMapService
			.getWeatherByCoords(latitude, longitude)
			.then((res) => {
				dispatch(setWeather(res));
			});
	};

	useEffect(() => {
		const success = (pos) => {
			const { latitude, longitude } = pos.coords;
			getWeatherByCoords(latitude, longitude);
		};
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	const addToFavoriteList = (city) => {
		if (!list.includes(city)) {
			dispatch(setFavoriteList([city]));
		}
	};

	useEffect(() => {
		console.log('loading favoritelist from localstorage');
		if (localStorage.getItem('favoriteList')) {
			console.log('favoritelist loaded');
			dispatch(
				setFavoriteList([...JSON.parse(localStorage.getItem('favoriteList'))]),
			);
		} else {
			console.log('favoritelist not found');
		}
	}, []);

	const saveInLocalStorage = (list) => {
		if (list.length) {
			localStorage.setItem('favoriteList', JSON.stringify(list));
			console.log('save in localstorage list');
		}
	};

	useEffect(() => {
		saveInLocalStorage(list);
	}, [list]);

	return (
		<div className="weather-forecast">
			<Card subdued sectioned>
				<DisplayText size="small">{city}</DisplayText>
				<div className="weather-indicators">
					<DisplayText size="extraLarge">{temp}°</DisplayText>
					<div className="weather-description">
						<DisplayText>{description}</DisplayText>
						<DisplayText size="small">Feels Like {tempFeelsLike}°</DisplayText>
					</div>
				</div>
				<div className="weather-additional-indicators">
					<span className="wind">
						<i style={{ fontSize: '16px' }} className="fas fa-wind"></i>&nbsp;
						{wind} m/s
					</span>
					<span className="humidity">
						<i style={{ fontSize: '16px' }} className="fas fa-tint"></i>&nbsp;
						{humidity}%
					</span>
				</div>
				<Button fullWidth onClick={() => addToFavoriteList(city)}>
					Add a city to favorites
				</Button>
			</Card>
		</div>
	);
};

export default WeatherForecast;
