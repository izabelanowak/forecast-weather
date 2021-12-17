import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./icon-spinner.svg";

const rotate = keyframes`
  to {
      transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 88px;
  margin-bottom: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 32px;
    margin-bottom: 64px;
  }
`;

export const LoadingInfo = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  height: auto;
  animation: ${rotate} 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 40px;
  }
`;