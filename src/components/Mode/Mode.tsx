import React from "react";
import "./Mode.scss";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../reducers/themeReducer";

export default function Mode() {
  const state = useSelector((state: IState) => state.isDark);
  const dispatch = useDispatch();

  return (
    <label htmlFor="mode" className="mode">
      <input type="checkbox" className="mode__input" name="mode" id="mode" onChange={() => dispatch({ type: "TOGGLE" })} />
      <i className={`mode__icon icon-sun ${!state ? "mode__icon--active" : ""}`}></i>
      <i className={`mode__icon icon-moon ${state ? "mode__icon--active" : ""}`}></i>
    </label>
  );
}
