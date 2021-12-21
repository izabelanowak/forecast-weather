import styled, { css } from "styled-components";
import { ReactComponent as Celsius } from "./icons/celsius.svg";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.tile.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px;
`;

export const WeatherWrapper = styled(Wrapper)`
  padding: 10px;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
    flex-basis: 100%;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 0 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;

export const Weekday = styled.span`
  padding: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const DateWrapper = styled.div`
  background: ${({ theme }) => theme.colors.tile.date.background};
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -10px;
  margin-bottom: 50px;
  border: 2px solid ${({ theme }) => theme.colors.tile.date.border};
  font-size: 12px;
`;

export const StyledDate = styled.span`
  padding: 5px;
`;

export const Time = styled.span`
  padding: 5px;
  margin-top: 10px;
  font-size: 24px;
`;

export const TemperatureUnit = styled(Celsius)`
  height: 100%;

  ${({ mini }) => mini && css`
    height: 40px;
    margin-left: -15px;
  `}
`;

export const Temperature = styled.div`
  font-size: 72px;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: bold;

  ${({ mini }) => mini && css`
    font-size: 36px;
  `}
`;

export const Description = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
  align-self: center;
`;