import loadWeather from "../Component/Welcome/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  console.log("saga combine")
  yield all([loadWeather()]);
}
