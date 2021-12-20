import { Data, Title, Wrapper } from "./styled";
import { switchTileType } from "./switchTileType";

export const DataTile = ({ type, data, subtitle }) => {
  return (
    <Wrapper>
      {subtitle
        ?
        <Title>{subtitle}</Title>
        :
        <Title>{switchTileType(type).title}</Title>
      }
      {switchTileType(type).icon}
      <Data>{data}</Data>
    </Wrapper>
  );
};