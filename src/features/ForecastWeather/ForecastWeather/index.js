import { useSelector } from "react-redux";
import ThemeSwitcher from "../../../common/ThemeSwitcher";
import { selectError, selectLoading } from "../ForecastWeatherSlice";
import { CityWeather } from "./CityWeather";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { Search } from "./Search";
import { StatusChecker } from "./StatusChecker";

const ForecastWeather = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <MainContainer>
      <ThemeSwitcher />
      <Header />
      <Search />
      <StatusChecker isError={isError} isLoading={isLoading}>
        <CityWeather />
      </StatusChecker>
    </MainContainer>
  );
};

export default ForecastWeather;