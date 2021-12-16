import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import forecastWeatherReducer from "../features/forecastWeather/ForecastWeatherSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    forecastWeather: forecastWeatherReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;