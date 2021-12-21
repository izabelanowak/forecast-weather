import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Link = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  background: inherit;
  font-size: 12px;
  align-items: center;
  transition: 0.5s;

  &:hover {
    transform: translateY(6px);
  }
`;

export const Icon = styled(Arrow)`
  margin-top: 5px;
`;