// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /location
// https://www.metaweather.com/api/location/search/?query={city|lat,lng|region|country}
export interface Weather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  id: number;
  humidity: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

export interface WeatherResponse {
  latt_long: string,
  location_type: 'City' | 'Region' | 'State' | 'Province' | 'Country' | 'Continent',
  sun_rise: number,
  sun_set: number,
  time: number,
  timezone_name: string,
  title: string,
  consolidated_weather: Weather[]
}

export type ApiResponse = Record<string, WeatherResponse>;

// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum WeatherForecastActionTypes {
  FETCH_REQUEST = "@@weatherForecast/FETCH_LOCATIONS",
  FETCH_SUCCESS = "@@weatherForecast/FETCH_SUCCESS",
  FETCH_ERROR = "@@weatherForecast/FETCH_ERROR",
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface WeatherForecastState {
  readonly data: Weather[];
  readonly errors?: string;
  readonly loading: boolean;
}
