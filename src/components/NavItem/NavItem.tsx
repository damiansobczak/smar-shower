import React from "react";
import { INavItem } from "./INavItem";
import "./NavItem.scss";

export default function NavItem({ id, active, name, icon, setActive }: INavItem) {
  const hangleSetActive = (e: React.SyntheticEvent | React.KeyboardEvent, id: number) => {
    if (("key" in e && e.key === "Enter") || e.type === "click") {
      setActive(id);
    }
    e.stopPropagation();
  };

  return (
    <li className={`nav__item ${active ? "nav__item--active" : ""}`}>
      <button className="nav__link" onClick={(e) => hangleSetActive(e, id)} onKeyDown={(e) => hangleSetActive(e, id)}>
        <i className={`nav__icon icon-${icon}`}></i>
        <span>{name}</span>
      </button>
    </li>
  );
}
