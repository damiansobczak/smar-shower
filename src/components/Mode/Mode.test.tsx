import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { themeReducer } from "../../reducers/themeReducer";
import Mode from "./Mode";

test("renders component", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  expect(container.querySelector("ul")).not.toBeNull();
});

test("renders light mode", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  expect(container.querySelector("i.mode__icon.icon-sun")).not.toBeNull();
});

test("renders dark mode", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  expect(container.querySelector("i.mode__icon.icon-moon")).not.toBeNull();
});

test("toggles modes after click", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  const button = container.querySelectorAll("li.mode__item")[0];
  fireEvent.click(button);
  const icon = container.querySelector("i.mode__icon.icon-moon.mode__icon--active");
  setTimeout(() => {
    expect(icon).toBeInTheDocument();
    expect(store.getState()).toStrictEqual({ isDark: true });
  }, 0);
});

test("ensures toggle is working properly", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  const button = container.querySelectorAll("li.mode__item")[0];

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  const icon = container.querySelector("i.mode__icon.icon-moon.mode__icon--active");

  setTimeout(() => {
    expect(icon).toBeInTheDocument();
    expect(store.getState()).toStrictEqual({ isDark: true });
  }, 0);
});
