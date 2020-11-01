import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Logout from "./components/Logout/Logout";
import Pressure from "./components/Pressure/Pressure";
import Temperature from "./components/Temperature/Temperature";
import { useSelector } from "react-redux";
import { IState } from "./reducers/themeReducer";
function App() {
  const state = useSelector((state: IState) => state.isDark);
  return (
    <div className={`app ${state ? "app--dark" : ""}`}>
      <main className="app__dialog">
        <Header />
        <Logout />
        <LeftPanel />
        <Temperature />
        <Pressure />
      </main>
    </div>
  );
}

export default App;
