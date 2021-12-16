import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search.svg";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 40px;
  border: 1px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Icon = styled(SearchIcon)``;

export const Button = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  border-radius: 40px;
  border: none;
  background: #3C99DD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;