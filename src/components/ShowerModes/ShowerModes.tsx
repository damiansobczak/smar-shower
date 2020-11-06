import React from "react";
import "./ShowerModes.scss";
import { Showers } from "../../utils/db";
import { connect } from "react-redux";
import { IShowerModes } from "./IShowerModes";
import { IRootReducer } from "../../redux/reducer";

function ShowerModes({ presets, active, setShower }: IShowerModes) {
  return (
    <div className="shower-modes">
      <div className="shower-modes__header">
        <p className="shower-modes__title" id="shower-modes-title">
          Shower modes
        </p>
      </div>
      <ul className="shower-modes__list" aria-labelledby="shower-modes-title">
        {Showers.map(({ id, name, icon }: any) => (
          <li className={`shower-modes__item ${presets[active].shower === id ? "shower-modes__item--active" : ""}`} key={id}>
            <button className="shower-modes__btn" aria-labelledby="shower-modes-name" onClick={() => setShower({ active, id })}>
              <i className={`shower-modes__icon icon-${icon}`}></i>
              <span className="shower-modes__name" id="shower-modes-name">
                {name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  return {
    presets: state.preset.presets,
    active: state.preset.active,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<{ type: string; payload: any }>) => {
  return {
    setShower: (payload: any) => dispatch({ type: "SET_PRESET_SHOWER", payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowerModes);
