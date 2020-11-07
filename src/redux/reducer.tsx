import { combineReducers } from "redux";
import { presetsReducer } from "./presets/presetsReducer";
import { themeReducer } from "./theme/themeReducer";
import { navReducer } from "./nav/navReducer";
import { temperatureReducer } from "./temperature/temperatureReducer";

export interface IRootReducer {
  theme: {
    isDark: boolean | null;
  };
  preset: {
    active: number;
    presets: Array<any>;
    modes: Array<any>;
  };
  nav: {
    active: number;
  };
  temperature: {
    temperature: number;
  };
}

export const rootReducer = combineReducers({
  theme: themeReducer,
  preset: presetsReducer,
  nav: navReducer,
  temperature: temperatureReducer,
});
