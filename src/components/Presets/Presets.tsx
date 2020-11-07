import React from "react";
import "./Presets.scss";
import { connect } from "react-redux";
import { IRootReducer } from "../../redux/reducer";
import { IPresets } from "./IPresets";
import { IShower } from "../../utils/db";

function Presets({ active, presets, modes, setActive }: IPresets) {
  return (
    <div className="presets" aria-labelledby="presets-title">
      <div className="presets__header">
        <p className="presets__title" id="presets-title">
          Shower presets
        </p>
        <button className="presets__add">+ Add presets</button>
      </div>
      <ul className="presets__items" aria-label="Presets items">
        {presets.map(({ id, name, temperature, pressure, shower }) => (
          <li className={`presets__item ${id === active ? "presets__item--active" : ""}`} key={id}>
            <button className="presets__btn" aria-labelledby="presets-name" onClick={() => setActive(id)}>
              <i className={`icon-${modes.filter((mode: IShower) => mode.id === shower)[0].icon} presets__icon`}></i>
              <span id="presets-name" className="presets__name">
                {name}
              </span>
              <div className="presets__temperature">{temperature}&#176;C</div>
              <div className="presets__pressure">{pressure}%</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  return {
    active: state.preset.active,
    presets: state.preset.presets,
    modes: state.preset.modes,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<{ type: string; payload: number }>) => {
  return {
    setActive: (id: number) => dispatch({ type: "SET_PRESET", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presets);
