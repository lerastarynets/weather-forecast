import { getWeather } from "../api/api";

const SET_WEATHER = "SET_WEATHER";

const initialState = {
  weather: null,
  city: "Dubai",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return { ...state, weather: action.weather };
    }
    default:
      return state;
  }
};

export const setWeatherA = (weather) => {
  return { type: SET_WEATHER, weather };
};

export const getWeatherT = (city) => async (dispatch) => {
  let data = await getWeather(city);
  let pressure = data.list[0].main.pressure;
  dispatch(setWeatherA(pressure));
};

export default weatherReducer;
