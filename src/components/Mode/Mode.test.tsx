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
  expect(container.querySelector("label")).not.toBeNull();
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
  const button = container.querySelector(".mode__input");

  fireEvent.click(button as Element);
  const icon = container.querySelector("i.mode__icon.icon-moon.mode__icon--active");

  expect(icon).toBeInTheDocument();
  expect(store.getState()).toStrictEqual({ isDark: true });
});

test("ensures toggle is working properly", async () => {
  const store = createStore(themeReducer);
  const { container } = render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  const button = container.querySelector(".mode__input");

  fireEvent.click(button as Element);
  fireEvent.click(button as Element);
  fireEvent.click(button as Element);
  const icon = container.querySelector("i.mode__icon.icon-moon.mode__icon--active");

  expect(icon).toBeInTheDocument();
  expect(store.getState()).toStrictEqual({ isDark: true });
});
