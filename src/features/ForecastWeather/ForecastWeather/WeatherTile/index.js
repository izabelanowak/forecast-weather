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
  Label,
  HorizontalWrapper,
} from "./styled";
import { ShowMoreButton } from "./ShowMoreButton";

export const WeatherTile =
  ({
    timestamp,
    iconCode,
    temperature,
    minTemperature,
    maxTemperature,
    description,
    hourly,
    future,
    dayNumber,
    day
  }) => {
    const date = new Date(timestamp);

    return (
      hourly ?
        <HorizontalWrapper>
          <Time>{getTime(date)}</Time>
          {switchIcon(iconCode)}
          <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
          <Description>{description}</Description>
        </HorizontalWrapper>
        :
        day ?
          <TimeWrapper>
            <Weekday>{getWeekday(date)}</Weekday>
            <StyledDate>{getDate(date)}</StyledDate>
          </TimeWrapper>
          :
          future ?
            <>
              <WeatherWrapper>
                <TimeWrapper>
                  <Weekday>{getWeekday(date)}</Weekday>
                  <StyledDate>{getDate(date)}</StyledDate>
                </TimeWrapper>
                {switchIcon(iconCode)}
                <Temperature mini="true">
                  <Label>Min</Label>
                  {Math.round(minTemperature)}<TemperatureUnit mini="true" />
                </Temperature>
                <Temperature mini="true">
                  <Label>Max</Label>
                  {Math.round(maxTemperature)}<TemperatureUnit mini="true" />
                </Temperature>
                <ShowMoreButton dayNumber={dayNumber} />
              </WeatherWrapper>
            </>
            :
            (
              <Wrapper>
                <DateWrapper>{formatDate(date)}</DateWrapper>
                {switchIcon(iconCode)}
                <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
                <Description>{description}</Description>
              </Wrapper>
            )
    );
  };