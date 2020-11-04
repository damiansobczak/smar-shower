import React from "react";
import "./Weather.scss";

export default function Weather() {
  return (
    <div className="weather">
      <div className="weather__header">
        <p className="weather__title" id="weather-title">
          Weather
        </p>
      </div>
      <div className="weather__container">
        <div className="weather__column">
          <div className="weather__day">
            26<span className="weather__unit">&#176;C</span>
          </div>
          <div className="weather__night">26&#176;C</div>
          <div className="weather__date">Monday, 12 Sep</div>
        </div>
        <div className="weather__column weather__column--right">
          <i className="weather__icon icon-sun"></i>
          <div className="weather__desc">Sunny</div>
        </div>
      </div>
    </div>
  );
}
