import { createSlice } from "@reduxjs/toolkit";
import { getAveragePressure } from "./ForecastWeather/average";

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState: {
    weather: [],
    loading: false,
    success: false,
    error: false,
    query: "",
    city: "",
    averagePressure: null,
    moreInformation: false,
    dayNumber: null,
  },
  reducers: {
    fetchWeather: (state) => {
      state.loading = true;
    },
    fetchWeatherSuccess: (state, { payload: weather }) => {
      state.weather = weather;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.query = "";
    },
    fetchWeatherError: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
    setCity: (state, { payload: query }) => {
      state.city = query;
    },
    calculateAveragePressure: (state) => {
      state.averagePressure = getAveragePressure(state.weather.list).toFixed(1);
    },
    showHourlyForecast: (state, { payload: dayNumber }) => {
      state.dayNumber = dayNumber;
      state.moreInformation = true;
    },
  },
});

export const {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
  setQuery,
  setCity,
  calculateAveragePressure,
  showHourlyForecast,
} = forecastWeatherSlice.actions;

const selectForecastWeatherState = state => state.forecastWeather;

export const selectWeather = state => selectForecastWeatherState(state).weather;
export const selectLoading = state => selectForecastWeatherState(state).loading;
export const selectSuccess = state => selectForecastWeatherState(state).success;
export const selectError = state => selectForecastWeatherState(state).error;
export const selectQuery = (state) => selectForecastWeatherState(state).query;
export const selectCity = (state) => selectForecastWeatherState(state).city;
export const selectAveragePressure = (state) => selectForecastWeatherState(state).averagePressure;
export const selectMoreInformation = (state) => selectForecastWeatherState(state).moreInformation;
export const selectDayNumber = (state) => selectForecastWeatherState(state).dayNumber;

export default forecastWeatherSlice.reducer;