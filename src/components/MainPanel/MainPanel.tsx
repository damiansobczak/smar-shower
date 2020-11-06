import React from "react";
import ShowerModes from "../ShowerModes/ShowerModes";
import Temperature from "../Temperature/Temperature";
import "./MainPanel.scss";

export default function MainPanel() {
  return (
    <div className="main-panel">
      <Temperature />
      <ShowerModes />
    </div>
  );
}
