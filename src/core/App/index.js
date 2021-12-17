import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from "../../common/themeSlice";
import ForecastWeather from "../../features/forecastWeather/ForecastWeather";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <ForecastWeather />
    </ThemeProvider>
  );
}

export default App;