import styled from "styled-components";
import { ReactComponent as Sunny } from "./sunny.svg";
import { ReactComponent as Rainy } from "./rainyNight.svg";

export const Wrapper= styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
export const Title = styled.h1`
  font-size: 56px;
  margin: 20px 40px;
  padding: 10px;
`;

export const RainyIcon = styled(Rainy)`
  transition: transform 1s;

&:hover {
  transform: translate(20px);
}

`;
export const SunnyIcon = styled(Sunny)`
  transition: transform 1s;

&:hover {
  transform: rotate(360deg);
}`;

