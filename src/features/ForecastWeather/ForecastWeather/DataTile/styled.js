import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px;
  opacity: 0.8;
  font-weight: bold;

  &:hover {
    box-shadow: 0px 4px 4px ${({theme})=> theme.colors.shadow};
  }
`;

export const Title = styled.div``;
export const Data = styled.div``;
