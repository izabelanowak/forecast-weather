import { useSelector } from "react-redux";
import { selectWeather } from "../../ForecastWeatherSlice";

const isDayNumber = (timestamp, dayNumber) => {
  const currentDate = new Date();
  const today = currentDate.getDate();
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  return day === today + dayNumber;
};

const createDay = (table, dayNumber) => {
  const day = [];
  for (const element of table) {
    if (isDayNumber(element.dt, dayNumber)) {
      day.push({
        dt: element.dt,
        icon: element.weather[0].icon,
        temp: element.main.temp,
        description: element.weather[0].description,
      });
    }
  }
  return day;
};

export const useWatherDay = (dayNumber) => {
  const weather = useSelector(selectWeather);

  return createDay(weather.list, dayNumber);
};