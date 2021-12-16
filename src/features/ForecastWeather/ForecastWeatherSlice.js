import { createSlice } from "@reduxjs/toolkit";

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState: {
    weather: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchWeather: (state) => {
      state.loading = true;
    },
    fetchWeatherSuccess: (state, { payload: weather }) => {
      state.weather = weather;
      state.loading = false;
      state.error = false;
    },
    fetchWeatherError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
} = forecastWeatherSlice.actions;

const selectForecastWeatherState = state => state.forecastWeather;

export const selectWeather = state => selectForecastWeatherState(state).weather;
export const selectLoading = state => selectForecastWeatherState(state).loading;
export const selectError = state => selectForecastWeatherState(state).error;

export default forecastWeatherSlice.reducer;