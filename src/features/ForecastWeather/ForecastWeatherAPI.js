import axios from "axios";

const APIBaseURL = "https://api.openweathermap.org/data/2.5/forecast?";
const APIKey = "d4e6ee56be175a26bd9e6c27abf0e95c";

export const getWeather = city =>
  axios.get(`${APIBaseURL}q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.data);