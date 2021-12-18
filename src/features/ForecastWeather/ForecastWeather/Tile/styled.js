import styled from "styled-components";
import { ReactComponent as Celsius } from "./celsius.svg";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.tile.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 10px;
  opacity: 0.8;
`;

export const StyledDate = styled.div`
  background: ${({ theme }) => theme.colors.tile.date.background};
  opacity: 0.9;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -10px;
  border: 2px solid ${({ theme }) => theme.colors.tile.date.border};
  font-size: 12px;
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
`;

export const Description = styled.p`
  font-size: 18px;
`;
