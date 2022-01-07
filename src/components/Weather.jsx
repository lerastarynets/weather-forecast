import { useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../api/api";
import { getWeatherT } from "../redux/weather-reducer";
import React from "react";

// class Day extends React.Component {
//   componentDidMount() {
//     this.props.getWeather(this.props.city);
//   }
//   handleClick = () => {};

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Get Weather</button>
//         <div>{this.props.weather}</div>
//       </div>
//     );
//   }
// }

const Day = (props) => {
  const handleClick = () => {};
  return (
    <div>
      <button onClick={handleClick}>Get Weather</button>
      <div>{props.weather}</div>
    </div>
  );
};

const Weather = (props) => {
  useEffect(() => {
    props.getWeatherT(props.city);
  }, []);
  return (
    <div>
      <h1>Weather in {props.city}</h1>
      <Day
        weather={props.weather}
        city={props.city}
        getWeather={props.getWeatherT}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    weather: state.weather,
    city: state.city,
  };
};

export default connect(mapStateToProps, { getWeatherT })(Weather);
