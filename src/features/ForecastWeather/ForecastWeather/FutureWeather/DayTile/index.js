import { useSelector } from "react-redux";
import { selectMoreInformation } from "../../../ForecastWeatherSlice";
import { WeatherTile } from "../../WeatherTile";
import { MiniTileWrapper } from "../styled";
import { useWeatherDay } from "../useWeatherDay";

export const DayTile = ({ dayNumber, general }) => {
  const weatherDay = useWeatherDay(dayNumber).dayWeather;
  const minDayTemperature = useWeatherDay(dayNumber).minDayTemperature;
  const maxDayTemperature = useWeatherDay(dayNumber).maxDayTemperature;
  const index = useWeatherDay(dayNumber).maxIndex;
  const moreInformation = useSelector(selectMoreInformation);

  return (
    general ?
      <WeatherTile
        key={!!weatherDay[index] ? weatherDay[index].dt : ""}
        timestamp={!!weatherDay[index] ? weatherDay[index].dt * 1000 : 0}
        iconCode={!!weatherDay[index] ? weatherDay[index].icon : ""}
        minTemperature={minDayTemperature}
        maxTemperature={maxDayTemperature}
        future
        dayNumber={dayNumber}
      />
      :
      (<div id="hourly-forecast">
        <MiniTileWrapper
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
              hourly
            />
          ))}
        </MiniTileWrapper>
      </div>
      )
  );
};