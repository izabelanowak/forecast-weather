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
  margin: 0 10px;
  opacity: 0.8;
`;

export const WeatherWrapper = styled(Wrapper)`
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  margin: 10px;
  font-weight: bold;
  flex-direction: row;

  &:hover {
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 10px 0 0;
  flex-basis: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-items: center;
    flex-basis: unset;
  }
`;

export const Weekday = styled.span`
  padding: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const DateWrapper = styled.div`
  background: ${({ theme }) => theme.colors.tile.date.background};
  opacity: 0.9;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -10px;
  border: 2px solid ${({ theme }) => theme.colors.tile.date.border};
  font-size: 12px;
`;

export const StyledDate = styled.span`
  padding: 5px;
`;

export const Time = styled.span`
  padding: 5px;
`;

export const TemperatureUnit = styled(Celsius)`
  height: 100%;
`;

export const Temperature = styled.div`
  font-size: 72px;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: bold;

  ${({ future }) => future && css`
    flex-basis: 220px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      flex-basis: unset;
    }
  `}
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  
  ${({ future }) => future && css`
    flex-basis: 220px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      flex-basis: unset;
    }
  `}
`;