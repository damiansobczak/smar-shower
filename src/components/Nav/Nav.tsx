import React from "react";
import "./Nav.scss";
import { NavItems } from "../../utils/db";
import { IRootReducer } from "../../redux/reducer";
import { INav } from "./INav";
import { connect } from "react-redux";

function Nav({ active, setActive }: INav) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__items">
        {NavItems.map(({ id, name, icon }) => (
          <li className={`nav__item ${active === id ? "nav__item--active" : ""}`} key={id}>
            <button className="nav__link" onClick={() => setActive(id)}>
              <i className={`nav__icon icon-${icon}`}></i>
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  return {
    active: state.nav.active,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<{ type: string; payload: number }>) => {
  return {
    setActive: (id: number) => dispatch({ type: "SET_NAV", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
