import { Reducer } from 'redux';
import { WeatherForecastState, WeatherForecastActionTypes } from './types';

// Type-safe initialState!
export const initialState: WeatherForecastState = {
  data: [],
  errors: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<WeatherForecastState> = (state = initialState, action) => {
  switch (action.type) {
    case WeatherForecastActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case WeatherForecastActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case WeatherForecastActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    default: {
      return state;
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as weatherForecastReducer }
