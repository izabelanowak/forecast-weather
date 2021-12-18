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
            key={weather.dt}
            timestamp={weather.dt * 1000}
            iconCode={weather.weather[0].icon}
            temperature={weather.main.temp}
            description={`${weather.weather[0].main} - ${weather.weather[0].description}`}
          />
          <DataTile
            key={weather.dt + 1}
            type="pressure"
            data={`${weather.main.pressure} hPa`}
          />
          <DataTile
            key={weather.dt + 2}
            type="wind"
            data={`${weather.wind.speed} km/h`}
          />
        </Wrapper>
      )}
    </>
  );
};