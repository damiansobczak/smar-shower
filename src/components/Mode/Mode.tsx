import React from "react";
import "./Mode.scss";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../reducers/themeReducer";

export default function Mode() {
  const state = useSelector((state: IState) => state.isDark);
  const dispatch = useDispatch();

  const setToLight = (e: React.SyntheticEvent | React.KeyboardEvent) => {
    if (("key" in e && e.key === "Enter") || e.type === "click") {
      dispatch({ type: "LIGHT" });
    }
    e.stopPropagation();
  };

  const setToDark = (e: React.SyntheticEvent | React.KeyboardEvent) => {
    if (("key" in e && e.key === "Enter") || e.type === "click") {
      dispatch({ type: "DARK" });
    }
    e.stopPropagation();
  };

  return (
    <ul id="mode" className="mode" role="radiogroup" aria-label="Theme mode">
      <li
        id="mode__item"
        className="mode__item"
        aria-label="Light"
        role="radio"
        aria-checked={state ? false : true}
        onClick={setToLight}
        onKeyPress={setToLight}
        tabIndex={0}
      >
        <i className={`mode__icon icon-sun ${!state ? "mode__icon--active" : ""}`}></i>
      </li>
      <li
        id="mode__item"
        className="mode__item"
        aria-label="Dark"
        role="radio"
        aria-checked={state ? true : false}
        onClick={setToDark}
        onKeyPress={setToDark}
        tabIndex={0}
      >
        <i className={`mode__icon icon-moon ${state ? "mode__icon--active" : ""}`}></i>
      </li>
    </ul>
  );
}
