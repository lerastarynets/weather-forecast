import { getWeather } from "../api/api";

const SET_WEATHER = "SET_WEATHER";
const SET_TIME = "SET_TIME";

const initialState = {
  city: "Dubai",
  weather: null,
  day: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return { ...state, weather: action.weather };
    }
    case SET_TIME: {
      return { ...state, day: action.day };
    }
    default:
      return state;
  }
};

export const setWeatherA = (weather) => {
  return { type: SET_WEATHER, weather };
};
export const setTimeA = (day) => {
  return { type: SET_TIME, day };
};

export const getWeatherT = (city) => async (dispatch) => {
  let data = await getWeather(city);

  //Time
  let unixTimestamp = data.list[0].dt;
  let date = new Date(unixTimestamp * 1000);
  let day = date.getUTCDate();
  dispatch(setTimeA(day));

  //Weather
  let weather = data.list[0].weather[0].main;
  dispatch(setWeatherA(weather));
};

export default weatherReducer;
