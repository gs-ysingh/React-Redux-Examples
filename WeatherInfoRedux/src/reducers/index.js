import { combineReducers } from 'redux';
import fetchWeather from './fetchWeather';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: fetchWeather
});

export default rootReducer;
