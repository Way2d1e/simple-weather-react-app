import React from 'react';
import './weather-favorite-list.css';
import WeatherFavoriteListItem from '../weather-favorite-list-item';
import { useSelector } from 'react-redux';
import { DisplayText } from '@shopify/polaris';

const WeatherFavoriteList = () => {
	const list = useSelector((state) => state.weather.list);

	const elements = list.map((element) => {
		return (
			<li key={element + Date.now()}>
				<WeatherFavoriteListItem label={element} />
			</li>
		);
	});

	return (
		<ul className="weather-favorite-list">
			{list.length ? (
				elements
			) : (
				<DisplayText>The favorites list is empty</DisplayText>
			)}
		</ul>
	);
};

export default WeatherFavoriteList;
