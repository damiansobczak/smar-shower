import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./Nav.scss";
import { NavItems } from "../../utils/db";

export default function Nav() {
  const [active, setActive] = useState<number>(0);

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__items">
        {NavItems.map((item, index) => (
          <NavItem key={item.id} id={item.id} active={item.id === active && true} name={item.name} icon={item.icon} setActive={setActive} />
        ))}
      </ul>
    </nav>
  );
}
