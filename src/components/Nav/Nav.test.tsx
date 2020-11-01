import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "./Nav";

test("renders component", async () => {
  const { container } = render(<Nav />);
  expect(container.querySelector("nav")).not.toBeNull();
});

test("renders items semantically correct", async () => {
  const { container } = render(<Nav />);
  expect(container.querySelectorAll("nav ul li")).toHaveLength(5);
});

test("show label when item is active", async () => {
  const { container } = render(<Nav />);
  expect(container.querySelectorAll("nav ul li.nav__item.nav__item--active")).toHaveLength(1);
});

test("renders text and icon on each item", async () => {
  const { container } = render(<Nav />);
  expect(container.querySelectorAll("nav ul li.nav__item .nav__link .nav__icon")).toHaveLength(5);
  expect(container.querySelectorAll("nav ul li.nav__item .nav__link span")).toHaveLength(5);
});
