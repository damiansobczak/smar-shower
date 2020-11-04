import React from "react";
import Presets from "../Presets/Presets";
import "./LeftPanel.scss";

class LeftPanel extends React.Component {
  render() {
    return (
      <aside className="leftPanel">
        <Presets />
      </aside>
    );
  }
}

export default LeftPanel;
