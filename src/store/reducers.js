import { combineReducers } from "redux-immutable"

// import local reducers

import { weatherReducer } from '../Component/Welcome/reducers'

const rootReducer = combineReducers({
    weather : weatherReducer
})

export default rootReducer;