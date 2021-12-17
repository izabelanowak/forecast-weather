import { LoadingContainer, LoadingInfo, StyledSpinner } from "./styled";

export const Loading = () => (
  <LoadingContainer>
    <LoadingInfo>
      Please wait, loading Forecast Weather…
    </LoadingInfo>
    <StyledSpinner />
  </LoadingContainer>
);
