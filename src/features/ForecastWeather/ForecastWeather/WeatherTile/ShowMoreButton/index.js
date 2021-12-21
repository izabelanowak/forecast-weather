import { useDispatch } from "react-redux";
import { showHourlyForecast } from "../../../ForecastWeatherSlice";
import { Button, Icon, Link } from "./styled";

export const ShowMoreButton = ({ dayNumber }) => {
  const dispatch = useDispatch();
  
  return (
    <Link href="#hourly-forecast" >
      <Button onClick={() => dispatch(showHourlyForecast(dayNumber))}>
        Show more
        <Icon />
      </Button>
    </Link>
  );
};