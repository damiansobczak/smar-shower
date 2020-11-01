import { Reducer } from "redux";

export interface IState {
  isDark: boolean | null;
}

export const themeInitialState = { isDark: false };

type ACTIONTYPE = { type: "TOGGLE" };

export const themeReducer: Reducer<IState, ACTIONTYPE> = (state = themeInitialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
