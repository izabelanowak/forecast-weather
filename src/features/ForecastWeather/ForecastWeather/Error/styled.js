import styled from "styled-components";
import { ReactComponent as Error } from "./lightning.svg";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 32px;
  }
`;

export const ErrorIcon = styled(Error)`
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.titleText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Info = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.titleText};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;