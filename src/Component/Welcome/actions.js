import { LOAD_WEATHER } from "./constants";

export function loadWeather(data) {
  console.log("called action");
  return {
    type: LOAD_WEATHER,
    payload: data
  };
}
