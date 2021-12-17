import ThemeSwitcher from "../../../common/ThemeSwitcher";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { Search } from "./Search";
import { TileWrapper } from "./styled";
import { Tile } from "./Tile";

const ForecastWeather = () => {
  return (
    <MainContainer>
      <ThemeSwitcher />
      <Header />
      <Search />
      <TileWrapper>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </TileWrapper>
    </MainContainer>
  );
};

export default ForecastWeather;