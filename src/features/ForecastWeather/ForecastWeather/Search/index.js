import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectCity, selectQuery, setCity, setQuery } from "../../ForecastWeatherSlice";
import { Button, Icon, Input, Wrapper } from "./styled";

export const Search = () => {
  const query = useSelector(selectQuery);
  const city = useSelector(selectCity);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onChange = (value) => {
    dispatch(setQuery(value));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(setCity(query));
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
        ref={inputRef}
        autoFocus
        onChange={({ target }) => onChange(target.value)}
      />
      <Button onClick={focusInput}><Icon />Search</Button>
    </Wrapper>
  );
};