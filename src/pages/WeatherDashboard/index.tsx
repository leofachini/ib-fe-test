import React from 'react';
import styled from 'styled-components';

const Dashboard = styled.section`
    display: grid;
    grid-template-rows: 30% 1fr;
    grid-template-columns: 1fr;
    height: 100%;
`;

function WeatherDashboard() {
  return (<Dashboard />);
}

export default WeatherDashboard;
