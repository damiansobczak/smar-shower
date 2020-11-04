import React, { useState } from "react";
import "./Nav.scss";
import { NavItems } from "../../utils/db";

export default function Nav() {
  const [active, setActive] = useState<number>(0);

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__items">
        {NavItems.map(({ id, name, icon }) => (
          <li className={`nav__item ${active === id ? "nav__item--active" : ""}`}>
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
