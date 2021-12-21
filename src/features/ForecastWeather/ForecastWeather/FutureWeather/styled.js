import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
`;

export const DayWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 0;
  padding: 30px 0;
  opacity: 0.8;
`;