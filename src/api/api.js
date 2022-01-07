import * as axios from "axios";

export const getWeather = (city) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f3a00e0ec86ab6bc5d8725fa46075ae`
    )
    .then((response) => {
      return response.data;
    });
};
