import React from "react";
import { INavItem } from "./INavItem";
import "./NavItem.scss";

export default function NavItem({ id, active, name, icon, setActive }: INavItem) {
  return (
    <li className={`nav__item ${active ? "nav__item--active" : ""}`}>
      <button className="nav__link" onClick={() => setActive(id)}>
        <i className={`nav__icon icon-${icon}`}></i>
        <span>{name}</span>
      </button>
    </li>
  );
}
