import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
  grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
`;