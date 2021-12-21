import { ErrorIcon, Info, Title, Wrapper } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>Ooops! Something went wrong… </Title>
      <Info>
        Sorry, failed to load Forecast Weather. Maybe there are no results for your search - 
        please try entering the city name again. If is another problem - try again later.
      </Info>
    </Wrapper>
  );
};