import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Logout from "./components/Logout/Logout";
import Pressure from "./components/Pressure/Pressure";
import { useSelector } from "react-redux";
import { IRootReducer } from "./redux/reducer";
import MainPanel from "./components/MainPanel/MainPanel";

function App() {
  const state = useSelector((state: IRootReducer) => state.theme.isDark);
  return (
    <div className={`app ${state ? "app--dark" : ""}`}>
      <main className="app__dialog">
        <Header />
        <Logout />
        <LeftPanel />
        <MainPanel />
        <Pressure />
      </main>
    </div>
  );
}

export default App;
