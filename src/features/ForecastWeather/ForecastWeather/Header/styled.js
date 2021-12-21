import styled from "styled-components";
import { ReactComponent as Thunderstorm } from "./icons/thunderstorm.svg";
import { ReactComponent as Rainy } from "./icons/rainyNight.svg";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  margin: 20px 40px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.titleText};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    font-size: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 32px;
    margin: 5px 10px;
    padding: 2px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
    font-size: 24px;
  }
`;

export const RainyIcon = styled(Rainy)`
  transition: transform 1s;

  &:hover {
    transform: translate(20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    max-height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-height: 60px;
  }
`;

export const ThunderstormIcon = styled(Thunderstorm)`
  transition: transform 1s;

  &:hover {
    transform: translate(-20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    max-height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-height: 60px;
  }
}`;