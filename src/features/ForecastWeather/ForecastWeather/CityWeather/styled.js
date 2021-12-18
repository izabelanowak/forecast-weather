import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  display: flex;
  justify-content: center;
`;

export const CityName = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const DataTileWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 150px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2px;
  }
`;