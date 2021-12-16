import { all } from "redux-saga/effects";
import { forecastWeatherSaga } from "../features/ForecastWeather/ForecastWeatherSaga";

export default function* rootSaga() {
  yield all([
    forecastWeatherSaga(),
  ]);
}