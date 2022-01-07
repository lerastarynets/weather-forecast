import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather-reducer";
import thunkMiddleware from "redux-thunk";

let store = createStore(weatherReducer, applyMiddleware(thunkMiddleware));

export default store;
