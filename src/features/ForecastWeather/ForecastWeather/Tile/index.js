import { formatDate } from "../formatDate";
import { Wrapper, StyledDate, Temperature, TemperatureUnit, Description } from "./styled";
import { switchIcon } from "./switchIcon";

export const Tile = ({ iconCode, timestamp, temperature, description }) => {
  const date = new Date(timestamp);

  return (
    <Wrapper>
      <StyledDate>{formatDate(date)}</StyledDate>
      {switchIcon(iconCode)}
      <Temperature>{Math.round(temperature)}<TemperatureUnit /></Temperature>
      <Description>{description}</Description>
    </Wrapper>
  );
};