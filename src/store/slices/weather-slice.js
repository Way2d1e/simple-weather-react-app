import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		// defaultCoords: {
		//   latitude: 0,
		//   longitude: 0,
		// },
		weather: {
			city: '',
			temp: 0,
			tempFeelsLike: 0,
			description: '',
			wind: 0,
			humidity: 0,
		},
		query: '',
		list: [],
	},
	reducers: {
		// setDefaultCoords(state, action) {
		//   state.defaultCoords = { ...state.defaultCoords, ...action.payload}
		// },
		setWeather(state, action) {
			state.weather = { ...state.weather, ...action.payload };
		},
		setQuery(state, action) {
			state.query = action.payload;
		},
		setFavoriteList(state, action) {
			state.list.push(...action.payload);
		},
		deleteFavoriteListItem(state, action) {
			state.list = [
				...state.list.slice(0, action.payload),
				...state.list.slice(action.payload + 1),
			];
		},
	},
});

export default weatherSlice.reducer;
export const { setWeather, setQuery, setFavoriteList, deleteFavoriteListItem } =
	weatherSlice.actions;
