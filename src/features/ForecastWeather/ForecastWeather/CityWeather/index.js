import { useSelector } from "react-redux";
import { selectWeather } from "../../ForecastWeatherSlice";
import { CityName, DataTileWrapper, Title, Wrapper } from "./styled";
import { DataTile } from "../DataTile";
import { WeatherTile } from "../WeatherTile";

export const CityWeather = () => {
  const weather = useSelector(selectWeather);
  const sunrise = new Date(weather.city.sunrise * 1000);
  const sunset = new Date(weather.city.sunset * 1000);

  return (
    <>
      <Title>Current weather for&nbsp;<CityName>{weather.city.name}</CityName></Title>
      <Wrapper>
        {weather.length === 0 ?
          <></>
          :
          <WeatherTile
            key={weather.list[0].dt}
            timestamp={weather.list[0].dt * 1000}
            iconCode={weather.list[0].weather[0].icon}
            temperature={weather.list[0].main.temp}
            description={`${weather.list[0].weather[0].description}`}
          />
        }
        <DataTileWrapper>
          <DataTile
            type="humidity"
            data={`${Math.round(weather.list[0].main.humidity)} %`}
          />
          <DataTile
            type="precipitation"
            data={`${Math.round(weather.list[0].pop * 100)} %`}
          />
          <DataTile
            type="pressure"
            data={`${weather.list[0].main.pressure} hPa`}
          />
          <DataTile
            type="wind"
            data={`${weather.list[0].wind.speed} km/h`}
          />
          <DataTile
            type="sunrise"
            data={`${sunrise.getHours()}:${sunrise.getMinutes() < 10 ? "0" : ""}${sunrise.getMinutes()}`}
          />
          <DataTile
            type="sunset"
            data={`${sunset.getHours()}:${sunset.getMinutes() < 10 ? "0" : ""}${sunset.getMinutes()}`}
          />
        </DataTileWrapper>
      </Wrapper>
    </>
  );
};