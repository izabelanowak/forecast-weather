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
  const temperature = [];
  for (const element of table) {
    if (isDayNumber(element.dt, dayNumber)) {
      day.push({
        dt: element.dt,
        icon: element.weather[0].icon,
        temp: element.main.temp,
        description: element.weather[0].description,
      });
      temperature.push(element.main.temp);
    }
  }
  return [day, temperature];
};



export const useWatherDay = (dayNumber) => {
  const weather = useSelector(selectWeather);
  const [dayWeather, dayTemperature] = createDay(weather.list, dayNumber);
  const minDayTemperature = Math.min(...dayTemperature);
  const maxDayTemperature = Math.max(...dayTemperature);
  const maxIndex = dayTemperature.indexOf(maxDayTemperature);

  return {
    dayWeather,
    minDayTemperature,
    maxDayTemperature,
    maxIndex,
  };
};