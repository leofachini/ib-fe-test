import React from 'react';
// import styled from 'styled-components';

import WeatherCard from '../../components/WeatherCard';

function FiveDaysForecast() {
  // TODO Remove this hardcoded ASAP
  const title = 'Lisbon';
  const weather = {
      id: 4613971225083904,
      weather_state_name: "Clear",
      weather_state_abbr: "c",
      wind_direction_compass: "NNW",
      created: "2020-07-25T13:38:50.367908Z",
      applicable_date: "2020-07-25",
      min_temp: 18.515,
      max_temp: 27.979999999999997,
      the_temp: 28.155,
      wind_speed: 10.321142229422838,
      wind_direction: 348.5,
      air_pressure: 1015.0,
      humidity: 53,
      visibility: 15.123242762268353,
      predictability: 68
  };

  return (<WeatherCard weather={weather} title={title} />);
}

export default FiveDaysForecast;
