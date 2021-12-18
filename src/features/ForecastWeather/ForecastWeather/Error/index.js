import { ErrorIcon, Info, Title, Wrapper } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>Ooops! Something went wrong… </Title>
      <Info>
        Sorry, failed to load Forecast Weather. There are no results for your search, please try entering the city name again or try again later.
      </Info>
    </Wrapper>
  );
};