import { Reducer } from "redux";

export interface IState {
  active: number | null;
}

export const navInitialState = {
  active: 0,
};

type ACTIONTYPE = {
  type: "SET_NAV";
  payload: number;
};

export const navReducer: Reducer<IState, ACTIONTYPE> = (state = navInitialState, action) => {
  switch (action.type) {
    case "SET_NAV":
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
