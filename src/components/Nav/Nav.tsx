import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item nav__item--active">
          <button className="nav__link">
            <i className="nav__icon icon-moon"></i>
            <span>Shower</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__link">
            <i className="nav__icon icon-moon"></i>
            <span>Shower</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__link">
            <i className="nav__icon icon-moon"></i>
            <span>Shower</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__link">
            <i className="nav__icon icon-moon"></i>
            <span>Shower</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__link">
            <i className="nav__icon icon-moon"></i>
            <span>Shower</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
