import { RainyIcon, ThunderstormIcon, Title, Wrapper } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <ThunderstormIcon />
      <Title>Forecast Weather</Title>
      <RainyIcon />
    </Wrapper>
  );
};