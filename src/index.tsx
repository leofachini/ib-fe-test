import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDashboard from './pages/WeatherDashboard';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <WeatherDashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
