import { call, put, takeLatest } from "redux-saga/effects";
import { getWeather } from "./ForecastWeatherAPI";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./ForecastWeatherSlice";

function* fetchForecastWeatherHandler({ payload: city }) {
  try {
    const weather = yield call(getWeather, city);
    yield put(fetchWeatherSuccess(weather));
  } catch (error) {
    yield put(fetchWeatherError());
  }
}

export function* forecastWeatherSaga() {
  yield takeLatest(fetchWeather.type, fetchForecastWeatherHandler);
}