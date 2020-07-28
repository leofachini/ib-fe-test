import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import WeatherDashboard from './pages/WeatherDashboard';
import GlobalStyles from './styles/global';
import configureStore from './configureStore';

const store = configureStore({
  locations: {
    data: [],
    loading: false
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <WeatherDashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
