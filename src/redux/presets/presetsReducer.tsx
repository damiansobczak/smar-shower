import { Reducer } from "redux";
import { IPresetItem, PresetsItems, Showers } from "../../utils/db";

export interface IState {
  active: number | null;
  presets: Array<any>;
  modes: Array<any>;
}

export const presetInitialState = {
  active: 0,
  presets: PresetsItems,
  modes: Showers,
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
      const presets = state.presets.map((preset: IPresetItem) => {
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
