import { useSelector } from "react-redux";
import { selectMoreInformation } from "../../../ForecastWeatherSlice";
import { WeatherTile } from "../../WeatherTile";
import { MiniTileWrapper } from "../styled";
import { useWatherDay } from "../useWeatherDay";

export const DayTile = ({ dayNumber, general }) => {
  const weatherDay = useWatherDay(dayNumber).dayWeather;
  const minDayTemperature = useWatherDay(dayNumber).minDayTemperature;
  const maxDayTemperature = useWatherDay(dayNumber).maxDayTemperature;
  const index = useWatherDay(dayNumber).maxIndex;
  const moreInformation = useSelector(selectMoreInformation);

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
      <MiniTileWrapper
        id="hourly-forecast"
        hide={!moreInformation}
      >
        <WeatherTile
          day
          timestamp={weatherDay[0].dt * 1000}
        />
        {weatherDay.map(({ dt, icon, temp, description }) => (
          <WeatherTile
            key={dt}
            timestamp={dt * 1000}
            iconCode={icon}
            temperature={temp}
            description={description}
            mini="true"
          />
        ))}
      </MiniTileWrapper>
  );
};