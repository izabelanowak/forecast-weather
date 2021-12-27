import { useSelector } from "react-redux";
import { selectWeather } from "../../ForecastWeatherSlice";

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export const getCurrentDate = () => {
  const currentDate = new Date();

  return {
    today: currentDate.getDate(),
    currentMonth: currentDate.getMonth(),
    currentYear: currentDate.getFullYear(),
    currentHours: currentDate.getHours(),
  }
};

const isDayNumber = (timestamp, dayNumber) => {
  const today = getCurrentDate().today;
  const currentMonth = getCurrentDate().currentMonth;
  const currentYear = getCurrentDate().currentYear;
  const currentHours = getCurrentDate().currentHours;
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth();
  const daysOfMonth = getDaysInMonth(currentMonth, currentYear);

  if (currentHours >= 22) {
    dayNumber = dayNumber + 1;
  }

  if (currentMonth === month) {
    return day === today + dayNumber;
  }
  return day + daysOfMonth === today + dayNumber;
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

export const useWeatherDay = (dayNumber) => {
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