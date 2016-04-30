import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = 'd7b1be823ca5146741a8c29287f13a0c';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${API_URL}&q=${city},in`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}