import { useDispatch, useSelector } from "react-redux";
import { calculateAveragePressure, selectAveragePressure } from "../../ForecastWeatherSlice";
import { DataTile } from "../DataTile";
import { Subtitle, Title, Wrapper } from "./styled";
import { DayTile } from "./DayTile";

export const FutureWeather = () => {
  const averagePressure = useSelector(selectAveragePressure);
  const dispatch = useDispatch();

  dispatch(calculateAveragePressure());
  return (
    <>
      <Title>Future Weather</Title>
      <Subtitle>for 5 days with data every 3 hours</Subtitle>
      <Wrapper>
        <DataTile
          type="pressure"
          subtitle="Average pressure for the week"
          data={`${averagePressure} hPa`}
        />
        <DayTile
          dayNumber={0}
        />
        <DayTile
          dayNumber={1}
        />
        <DayTile
          dayNumber={2}
        />
        <DayTile
          dayNumber={3}
        />
        <DayTile
          dayNumber={4}
        />
      </Wrapper>
    </>
  );
};