import React from "react";
import "./Mode.scss";
import { useSelector, useDispatch } from "react-redux";
import { IRootReducer } from "../../redux/reducer";

export default function Mode() {
  const state = useSelector((state: IRootReducer) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <ul id="mode" className="mode" aria-label="Theme mode">
      <li id="mode__item" className="mode__item">
        <button
          className={`mode__btn ${!state ? "mode__btn--active" : ""}`}
          onClick={() => dispatch({ type: "LIGHT" })}
          aria-label="Light"
          aria-pressed={state ? false : true}
        >
          <i className="mode__icon icon-sun"></i>
        </button>
      </li>
      <li id="mode__item" className="mode__item">
        <button
          className={`mode__btn ${state ? "mode__btn--active" : ""}`}
          onClick={() => dispatch({ type: "DARK" })}
          aria-label="Dark"
          aria-pressed={state ? true : false}
        >
          <i className="mode__icon icon-moon"></i>
        </button>
      </li>
    </ul>
  );
}
