import { Reducer } from "redux";
import { PresetsItems } from "../../utils/db";

export interface IState {
  active: number | null;
  presets: Array<any>;
}

export const presetInitialState = {
  active: 0,
  presets: PresetsItems,
};

type ACTIONTYPE =
  | {
      type: "SET_PRESET";
      payload: number;
    }
  | {
      type: "SET_PRESET_SHOWER";
      payload: {
        active: number;
        id: number;
      };
    };

export const presetsReducer: Reducer<IState, ACTIONTYPE> = (state = presetInitialState, action) => {
  switch (action.type) {
    case "SET_PRESET":
      return {
        ...state,
        active: action.payload,
      };
    case "SET_PRESET_SHOWER":
      const presets = state.presets.map((preset: any) => {
        if (preset.id === action.payload.active) {
          preset.shower = action.payload.id;
        }
        return preset;
      });
      return {
        ...state,
        presets: [...presets],
      };
    default:
      return state;
  }
};
