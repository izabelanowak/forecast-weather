import { createSlice } from "@reduxjs/toolkit";

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState: {
    weather: [],
    loading: false,
    success: false,
    error: false,
    query: "",
    city: "",
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
  },
});

export const {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
  setQuery,
  setCity,
} = forecastWeatherSlice.actions;

const selectForecastWeatherState = state => state.forecastWeather;

export const selectWeather = state => selectForecastWeatherState(state).weather;
export const selectLoading = state => selectForecastWeatherState(state).loading;
export const selectSuccess = state => selectForecastWeatherState(state).success;
export const selectError = state => selectForecastWeatherState(state).error;
export const selectQuery = (state) => selectForecastWeatherState(state).query;
export const selectCity = (state) => selectForecastWeatherState(state).city;

export default forecastWeatherSlice.reducer;