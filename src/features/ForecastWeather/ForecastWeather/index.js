import { useSelector } from "react-redux";
import ThemeSwitcher from "../../../common/ThemeSwitcher";
import { selectError, selectLoading, selectSuccess } from "../ForecastWeatherSlice";
import { CityWeather } from "./CityWeather";
import { FutureWeather } from "./FutureWeather";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { Search } from "./Search";
import { StatusChecker } from "./StatusChecker";

const ForecastWeather = () => {
  const isLoading = useSelector(selectLoading);
  const isSuccess = useSelector(selectSuccess);
  const isError = useSelector(selectError);

  return (
    <MainContainer>
      <ThemeSwitcher />
      <Header />
      <Search />
      <StatusChecker isError={isError} isLoading={isLoading} isSuccess={isSuccess}>
        <CityWeather />
        <FutureWeather />
      </StatusChecker>
    </MainContainer>
  );
};

export default ForecastWeather;