import { Reducer } from "redux";

export interface IState {
  isDark: boolean | null;
}

export const themeInitialState = { isDark: false };

type ACTIONTYPE = { type: "DARK" } | { type: "LIGHT" };

export const themeReducer: Reducer<IState, ACTIONTYPE> = (state = themeInitialState, action) => {
  switch (action.type) {
    case "DARK":
      return {
        isDark: true,
      };
    case "LIGHT":
      return {
        isDark: false,
      };
    default:
      return state;
  }
};
