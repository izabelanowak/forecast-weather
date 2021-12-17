import styled from "styled-components";
import { ReactComponent as DayNightIcon } from "./daynight.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -30px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  margin-right: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      display: none;
    }
`;

export const Icon = styled(DayNightIcon)`
  transition: transform 1s;

  &:hover {
    transform: rotate(360deg);
  }
`;