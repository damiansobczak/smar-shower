import React, { useState } from "react";
import "./Presets.scss";
import { PresetsItems } from "../../utils/db";

export default function Presets() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="presets" aria-labelledby="presets-title">
      <div className="presets__header">
        <p id="presets-title">Shower presets</p>
        <button className="presets__add">+ Add presets</button>
      </div>
      <ul className="presets__items" aria-label="Presets items">
        {PresetsItems.map(({ id, icon, name, temperature, pressure }, index) => (
          <li className={`presets__item ${id === active ? "presets__item--active" : ""}`} key={id}>
            <button className="presets__btn" aria-labelledby="presets-name" onClick={() => setActive(id)}>
              <i className={`icon-${icon} presets__icon`}></i>
              <span id="presets-name" className="presets__name">
                {name}
              </span>
              <div className="presets__temperature">{temperature}C</div>
              <div className="presets__pressure">{pressure}%</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
