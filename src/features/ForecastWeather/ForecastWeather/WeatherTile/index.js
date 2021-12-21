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

export const WeatherTile = ({ timestamp, iconCode, temperature, description, mini, day }) => {
  const date = new Date(timestamp);

  return (
    mini ?
      <WeatherWrapper>
        <Time>{getTime(date)}</Time>
        {switchIcon(iconCode)}
        <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
        <Description>{description}</Description>
      </WeatherWrapper>
      :
      day ?
        <TimeWrapper>
          <Weekday>{getWeekday(date)}</Weekday>
          <StyledDate>{getDate(date)}</StyledDate>
        </TimeWrapper>
        :
        <Wrapper>
          <DateWrapper>{formatDate(date)}</DateWrapper>
          {switchIcon(iconCode)}
          <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
          <Description>{description}</Description>
        </Wrapper>
  );
};