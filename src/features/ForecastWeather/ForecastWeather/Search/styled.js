import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search.svg";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 6px;
    padding: 6px;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  font-family: 'Cousine', monospace;

  &:hover {
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.shadow};
  }
`;

export const Icon = styled(SearchIcon)`
  width: 20px;
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.button};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.shadow};
  }
`;