// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /location
// https://www.metaweather.com/api/location/search/?query={city|lat,lng|region|country}
export interface Location extends ApiResponse {
  latt_long: string;
  location_type: string;
  title: string;
  woeid: number;
};

// This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
// the expected return type of your API response.
export type ApiResponse = Record<string, any>;

// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum LocationsActionTypes {
  FETCH_REQUEST = '@@locations/FETCH_LOCATIONS',
  FETCH_SUCCESS = '@@locations/FETCH_SUCCESS',
  FETCH_ERROR = '@@locations/FETCH_ERROR',
  SELECT_LOCATION= '@@locations/SELECT_LOCATION'
};

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface LocationState {
  readonly data: Location[];
  readonly errors?: string;
  readonly loading: boolean;
  readonly selectedLocation?: Location;
};
