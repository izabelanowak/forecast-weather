import styled from "styled-components";
import { ReactComponent as Celsius } from "../../Tile/celsius.svg";

export const WeatherWrapper = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px;
  opacity: 0.8;
  font-weight: bold;

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
  margin: 0 20px 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      align-items: center;
  }
`;

export const Weekday = styled.span`
  padding: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
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
  flex-basis: 220px;
`;

export const Description = styled.p`
  font-size: 18px;
`;