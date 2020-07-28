import { Reducer } from 'redux';
import { LocationState, LocationsActionTypes } from './types';

// Type-safe initialState!
export const initialState: LocationState = {
  data: [],
  errors: undefined,
  loading: false,
  selectedLocation: undefined
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<LocationState> = (state = initialState, action) => {
  switch (action.type) {
    case LocationsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case LocationsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case LocationsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case LocationsActionTypes.SELECT_LOCATION: {
      return { ...state, selectedLocation: action.payload };
    }
    default: {
      return state;
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as locationsReducer }
