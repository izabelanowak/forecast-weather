import { getDate, getTime, getWeekday } from "../../formatDate";
import { switchIcon } from "../../Tile/switchIcon";
import { Description, StyledDate, Temperature, TemperatureUnit, Time, TimeWrapper, WeatherWrapper, Weekday } from "./styled";

export const WeatherTile = ({ timestamp, iconCode, temperature, description }) => {
  const date = new Date(timestamp);

  return (
    <WeatherWrapper>
      <TimeWrapper>
        <Weekday>{getWeekday(date)}</Weekday>
        <StyledDate>{getDate(date)}</StyledDate>
        <Time>{getTime(date)}</Time>
      </TimeWrapper>
      {switchIcon(iconCode)}
      <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
      <Description>{description}</Description>
    </WeatherWrapper>
  );
};