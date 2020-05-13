import React from "react";
import "./styles.sass";

const Weather = props => {
  return (
    <div>
      <div className="wrapper">
        {props.city && <p>{props.city},</p>}
        {props.country && <p>{props.country}</p>}
      </div>
      <br />
      {props.icon && (
        <img
          alt="weather-icon"
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
        />
      )}
      <p>{props.weather}</p>

      {props.temperature && (
        <p>
          {" "}
          {props.temperature}
          <sup>o</sup>
        </p>
      )}

      <div className="wrapper">
        {props.temperatureMax && (
          <p className="space">
            {props.temperatureMax}
            <sup>o</sup>{" "}
          </p>
        )}
        {props.temperatureMin && (
          <p>
            {" "}
            {props.temperatureMin}
            <sup>o</sup>
          </p>
        )}
      </div>

      <p> {props.description}</p>
      <p> {props.error}</p>
    </div>
  );
};

export default Weather;
