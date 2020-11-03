import React from "react";
import Mode from "../Mode/Mode";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Nav />
      <Mode />
      <Profile />
    </header>
  );
}
