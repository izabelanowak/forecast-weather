import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.titleText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.titleText};
  font-weight: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const MiniTileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${({ hide }) => hide && css`
    display: none;
  `}
`;