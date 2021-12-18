import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectCity, selectQuery, setCity, setQuery } from "../../ForecastWeatherSlice";
import { Button, Icon, Input, Wrapper } from "./styled";

export const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  const onChange = (value) => {
    dispatch(setQuery(value));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(setCity(query));
    dispatch(setQuery(""));
  };

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [dispatch, city]);

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        placeholder="Type your city…"
        value={query}
        onChange={({ target }) => onChange(target.value)}
      />
      <Button><Icon />Search</Button>
    </Wrapper>
  );
};