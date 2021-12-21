import { useDispatch, useSelector } from "react-redux";
import { calculateAveragePressure, selectAveragePressure, selectDayNumber } from "../../ForecastWeatherSlice";
import { DataTile } from "../DataTile";
import { MiniTileWrapper, Subtitle, Title, Wrapper } from "./styled";
import { DayTile } from "./DayTile";

export const FutureWeather = () => {
  const averagePressure = useSelector(selectAveragePressure);
  const dayToShow = useSelector(selectDayNumber);
  const dispatch = useDispatch();

  dispatch(calculateAveragePressure());
  return (
    <>
      <Title>Future Weather</Title>
      <Subtitle>for 5 days with data every 3 hours</Subtitle>
      <Wrapper>
        <DataTile
          type="pressure"
          subtitle="Average pressure for 5 days"
          data={`${averagePressure} hPa`}
        />
        <MiniTileWrapper>
          <DayTile
            dayNumber={0}
            general={true}
          />
          <DayTile
            dayNumber={1}
            general={true}
          />
          <DayTile
            dayNumber={2}
            general={true}
          />
          <DayTile
            dayNumber={3}
            general={true}
          />
          <DayTile
            dayNumber={4}
            general={true}
          />
        </MiniTileWrapper>
        <DayTile
          dayNumber={dayToShow}
        />
      </Wrapper>
    </>
  );
};