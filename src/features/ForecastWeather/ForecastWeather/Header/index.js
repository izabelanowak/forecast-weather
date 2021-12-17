import { RainyIcon, SunnyIcon, Title, Wrapper } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <SunnyIcon />
      <Title>Forecast Weather</Title>
      <RainyIcon />
    </Wrapper>
  );
};