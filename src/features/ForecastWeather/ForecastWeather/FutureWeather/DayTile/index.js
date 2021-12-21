import { WeatherTile } from "../../WeatherTile";
import { DayWrapper, MiniTileWrapper } from "../styled";
import { useWatherDay } from "../useWeatherDay";

export const DayTile = ({ dayNumber }) => {
  const weatherDay = useWatherDay(dayNumber);

  return (
    <DayWrapper>
      <WeatherTile
        key={weatherDay[0].dt + 1}
        timestamp={weatherDay[0].dt * 1000}
        day={true}
      />
      <MiniTileWrapper>
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
    </DayWrapper>
  );
};