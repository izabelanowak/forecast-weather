import { useSelector } from "react-redux";
import { selectWeather } from "../../ForecastWeatherSlice";
import { DataTile } from "../DataTile";
import { Title, Wrapper } from "./styled";
import { WeatherTile } from "./WeatherTile";

export const FutureWeather = () => {
  const weather = useSelector(selectWeather);
  console.log(weather);
  return (
    <>
      <Title>Future Weather</Title>
      {weather.list.map(weather =>
        <Wrapper>
          <WeatherTile
            timestamp={weather.dt * 1000}
            iconCode={weather.weather[0].icon}
            temperature={weather.main.temp}
            description={`${weather.weather[0].main} - ${weather.weather[0].description}`}
          />
          <DataTile
            type="pressure"
            data={`${weather.main.pressure} hPa`}
          />
          <DataTile
            type="wind"
            data={`${weather.wind.speed} km/h`}
          />
        </Wrapper>
      )}
    </>
  );
};