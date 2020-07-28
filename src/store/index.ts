import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { 
  locationsReducer,
  locationsSaga,
  LocationState
} from './locations';

import { 
  weatherForecastReducer,
  weatherForecastSaga,
  WeatherForecastState
} from './weatherForecast';

// The top-level state object
export interface ApplicationState {
  locations: LocationState,
  weatherForecast: WeatherForecastState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = () =>
  combineReducers({
    locations: locationsReducer,
    weatherForecast: weatherForecastReducer
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(locationsSaga), fork(weatherForecastSaga)]);
}
