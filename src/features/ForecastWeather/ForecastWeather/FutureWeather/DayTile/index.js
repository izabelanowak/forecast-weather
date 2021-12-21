import { WeatherTile } from "../../WeatherTile";
import { MiniTileWrapper } from "../styled";
import { useWatherDay } from "../useWeatherDay";

export const DayTile = ({ dayNumber, general }) => {
  const weatherDay = useWatherDay(dayNumber).dayWeather;
  const minDayTemperature = useWatherDay(dayNumber).minDayTemperature;
  const maxDayTemperature = useWatherDay(dayNumber).maxDayTemperature;
  const index = useWatherDay(dayNumber).maxIndex;

  return (
    general ?
      <WeatherTile
        key={weatherDay[0].dt}
        timestamp={weatherDay[0].dt * 1000}
        iconCode={weatherDay[index].icon}
        minTemperature={minDayTemperature}
        maxTemperature={maxDayTemperature}
        future={true}
        dayNumber={dayNumber}
      />
      :
      <MiniTileWrapper id="hourly-forecast">
        {weatherDay.map(weather =>
          <WeatherTile
            key={weather.dt}
            timestamp={weather.dt * 1000}
            iconCode={weather.icon}
            temperature={weather.temp}
            description={`${weather.description}`}
            mini={true}
          />
        )}
      </MiniTileWrapper>
  );
};