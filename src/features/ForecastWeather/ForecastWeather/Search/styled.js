import styled from "styled-components";

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
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 20px;
  border-radius: 40px;
  border: none;
  background: #3C99DD;
`;