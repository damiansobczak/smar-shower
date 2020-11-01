import React from "react";
import Mode from "../Mode/Mode";
import Nav from "../Nav/Nav";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Nav />
      <Mode />
    </header>
  );
}
