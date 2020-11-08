import React from "react";
import "./Temperature.scss";
import { connect } from "react-redux";
import { IRootReducer } from "../../redux/reducer";
import { IPresetItem } from "../../utils/db";
import { ITemperature } from "./ITemperature";
import useArc from "../../hooks/useArc";

function Temperature({ temperature, id, increase, decrease }: ITemperature) {
  const [pathLine] = useArc(200, 200, 190, -135, 135);
  const [pathStar] = useArc(200, 200, 140, 8, 362);
  const [pathFill] = useArc(200, 200, 190, -135, 0);

  return (
    <section className="temperature">
      <div className="temperature__control">
        <div className="temperature__path">
          <svg className="temperature__path__line" viewBox="0 0 400px 400px">
            <path fill="none" strokeWidth="2" d={pathLine} />
          </svg>
          <svg className="temperature__path__star" viewBox="0 0 400px 400px">
            <path fill="none" strokeWidth="16" style={{ strokeDasharray: "4 107" }} d={pathStar} />
          </svg>
          <svg className="temperature__path__fill" viewBox="0 0 400px 400px">
            <path fill="none" strokeWidth="16" style={{ strokeDasharray: "4 4" }} d={pathFill} />
          </svg>
        </div>
        <div className="temperature__circle">
          <div className="temperature__circle__back"></div>
          <div className="temperature__circle__middle"></div>
          <div className="temperature__circle__front">
            <div className="temperature__display">
              {temperature}
              <span className="temperature__unit">&#176;C</span>
            </div>
          </div>
        </div>
      </div>
      <div className="temperature__actions">
        <button className="temperature__action" onClick={() => decrease(id)}>
          -
        </button>
        <div className="temperature__name">Temperature</div>
        <button className="temperature__action" onClick={() => increase(id)}>
          +
        </button>
      </div>
    </section>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  return {
    temperature: state.preset.presets.filter((preset: IPresetItem) => preset.id === state.preset.active)[0]?.temperature,
    id: state.preset.active,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<{ type: string; payload: number }>) => {
  return {
    increase: (id: number) => dispatch({ type: "INCREASE_TEMPERATURE", payload: id }),
    decrease: (id: number) => dispatch({ type: "DECREASE_TEMPERATURE", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
