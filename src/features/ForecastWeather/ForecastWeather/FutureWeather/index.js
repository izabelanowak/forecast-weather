import { useDispatch, useSelector } from "react-redux";
import { calculateAveragePressure, selectAveragePressure, selectWeather } from "../../ForecastWeatherSlice";
import { DataTile } from "../DataTile";
import { Subtitle, Title, Wrapper } from "./styled";
import { WeatherTile } from "../WeatherTile";

export const FutureWeather = () => {
  const weather = useSelector(selectWeather);
  const averagePressure = useSelector(selectAveragePressure);
  const dispatch = useDispatch();
  dispatch(calculateAveragePressure());
  return (
    <>
      <Title>Future Weather</Title>
      <Subtitle>for 5 days with data every 3 hours</Subtitle>
      <Wrapper>
        <DataTile
          type="pressure"
          subtitle="Average pressure for the week"
          data={`${averagePressure} hPa`}
        />
        {weather.list.map(weather =>
          <WeatherTile
            key={weather.dt}
            timestamp={weather.dt * 1000}
            iconCode={weather.weather[0].icon}
            temperature={weather.main.temp}
            description={`${weather.weather[0].description}`}
            future={true}
          />
        )}
      </Wrapper>
    </>
  );
};