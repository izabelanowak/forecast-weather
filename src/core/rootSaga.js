import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { forecastWeatherSaga } from "../features/forecastWeather/ForecastWeatherSaga";

export default function* rootSaga() {
  yield all([
    forecastWeatherSaga(),
    themeSaga(),
  ]);
}