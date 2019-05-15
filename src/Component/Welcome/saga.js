import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAILED
} from "./constants";

export default function* loadWeather() {
  yield takeLatest(LOAD_WEATHER, doLoadWeather);
}

const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "abd2a5c08e35337871a12c6ffb6af3ac";
export function* doLoadWeather(data) {
  const city = data.payload;

  try {
    const result = yield call(() => {
      return axios
        .get(`${apiUrl}${city}&appid=${apiKey}`)
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
    });
    if (result) {
      yield put({ type: LOAD_WEATHER_SUCCESS, result });
    } else {
      yield put({ type: LOAD_WEATHER_FAILED });
    }
  } catch (e) {
    console.log("ads");
  }
}
