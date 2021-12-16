import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import ForecastWeather from "../../features/forecastWeather/ForecastWeather";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <ForecastWeather/>
    </ThemeProvider>
  );
}

export default App;
