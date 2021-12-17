import { Wrapper, Date, StyledIcon, Temperature, TemperatureUnit, Description } from "./styled";

export const Tile = () => {
  return (
    <Wrapper>
      <Date>Friday, 17 December 2021 </Date>
      <StyledIcon />
      <Temperature>23<TemperatureUnit/></Temperature>
      <Description>Clouds</Description>
    </Wrapper>
  );
};