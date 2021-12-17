import { ErrorIcon, Info, Title, Wrapper } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>Ooops! Something went wrong… </Title>
      <Info>
        Sorry, failed to load Forecast Weather. Try again later.
      </Info>
    </Wrapper>
  );
};