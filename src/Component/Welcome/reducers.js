import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAILED
} from "./constants";
import { fromJS } from "immutable";

export const initialState = fromJS({
  weather: "",
  error: ""
});

export function weatherReducer(state = initialState, action) {
  console.log("called reducer", action.type);

  switch (action.type) {
    case LOAD_WEATHER:
      return state.set("error", "");
    case LOAD_WEATHER_SUCCESS:
      return state.set("error", "").set("weather", action.result);
    case LOAD_WEATHER_FAILED:
      return state.set("error", "Something went wrong");
    default:
      return state;
  }
}
