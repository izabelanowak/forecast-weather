import { getDate, getTime, getWeekday, formatDate } from "../formatDate";
import { switchIcon } from "./switchIcon";
import {
  Description,
  StyledDate,
  Temperature,
  TemperatureUnit,
  Time,
  TimeWrapper,
  WeatherWrapper,
  Weekday,
  Wrapper,
  DateWrapper,
} from "./styled";

export const WeatherTile = ({ timestamp, iconCode, temperature, description, future }) => {
  const date = new Date(timestamp);

  return (
    future
      ?
      <WeatherWrapper>
        <TimeWrapper>
          <Weekday>{getWeekday(date)}</Weekday>
          <StyledDate>{getDate(date)}</StyledDate>
          <Time>{getTime(date)}</Time>
        </TimeWrapper>
        {switchIcon(iconCode)}
        <Temperature future={future}>{Math.round(temperature)}<TemperatureUnit /></Temperature>
        <Description future={future}>{description}</Description>
      </WeatherWrapper>
      :
      <Wrapper>
        <DateWrapper>{formatDate(date)}</DateWrapper>
        {switchIcon(iconCode)}
        <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
        <Description>{description}</Description>
      </Wrapper>
  );
};