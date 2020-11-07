import React from "react";
import { IRootReducer } from "../../redux/reducer";
import "./Temperature.scss";
import { connect } from "react-redux";
import { ITemperature } from "./ITemperature";

function Temperature({ temperature, increase, decrease }: ITemperature) {
  return (
    <section className="temperature">
      <div className="temperature__control">{temperature}</div>
      <div className="temperature__actions">
        <button className="temperature__action" onClick={() => decrease()}>
          -
        </button>
        <div className="temperature__name">Temperature</div>
        <button className="temperature__action" onClick={() => increase()}>
          +
        </button>
      </div>
    </section>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  return {
    temperature: state.temperature,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<{ type: string }>) => {
  return {
    increase: () => dispatch({ type: "INCREASE_TEMPERATURE" }),
    decrease: () => dispatch({ type: "DECREASE_TEMPERATURE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
