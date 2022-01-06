export default class OpenWeatherMapService {
	_api = {
		key: 'INSERT YOUR KEY HERE',
		base: 'https://api.openweathermap.org/data/2.5/weather?',
	};

	getResource = async (url) => {
		const res = await fetch(`${this._api.base}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};
	getWeatherByCoords = async (latitude, longitude) => {
		const weather = await this.getResource(
			`lat=${latitude}&lon=${longitude}&appid=${this._api.key}&units=metric`,
		);
		return this._transformWeather(weather);
	};
	getWeatherByName = async (name) => {
		const weather = await this.getResource(
			`q=${name}&appid=${this._api.key}&units=metric`,
		);
		return this._transformWeather(weather);
	};

	_transformWeather = (weather) => {
		return {
			city: weather.name,
			temp: Math.floor(weather.main.temp),
			description: weather.weather[0].main,
			tempFeelsLike: Math.floor(weather.main.feels_like),
			wind: weather.wind.speed,
			humidity: weather.main.humidity,
		};
	};
}
