import { all } from "redux-saga/effects";
import { forecastWeatherSaga } from "../features/forecastWeather/ForecastWeatherSaga";

export default function* rootSaga() {
  yield all([
    forecastWeatherSaga(),
  ]);
}