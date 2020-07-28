import React from 'react';
import styled from 'styled-components';

import FiveDaysForecast from './FiveDaysForecast';
import Locations from './Locations';
import * as V from '../../styles/variables';

const Dashboard = styled.section.attrs({
  id: 'weather-dashboard'
})`
  display: grid;
  grid-template-rows: 30% 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  width: ${V.ScreenSize.laptop};

  @media only screen and (max-width: ${V.ScreenSize.laptop}) {
    width: 100%;
  }
`;

function WeatherDashboard() {
  return (
    <Dashboard>
      <Locations />
      <FiveDaysForecast />
    </Dashboard>
  );
}

export default WeatherDashboard;
