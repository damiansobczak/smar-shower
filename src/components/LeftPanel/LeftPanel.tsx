import React from "react";
import Presets from "../Presets/Presets";
import Weather from "../Weather/Weather";
import "./LeftPanel.scss";

class LeftPanel extends React.Component {
  render() {
    return (
      <aside className="leftPanel">
        <Presets />
        <Weather />
      </aside>
    );
  }
}

export default LeftPanel;
