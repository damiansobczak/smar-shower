import { Reducer } from "redux";

export const temperatureInitialState = 0;

type ACTIONTYPE =
  | {
      type: "INCREASE_TEMPERATURE";
    }
  | {
      type: "DECREASE_TEMPERATURE";
    };

export const temperatureReducer: Reducer<number, ACTIONTYPE> = (state = temperatureInitialState, action) => {
  switch (action.type) {
    case "INCREASE_TEMPERATURE":
      return state + 1;
    case "DECREASE_TEMPERATURE":
      return state - 1;
    default:
      return state;
  }
};
