import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ApplicationState } from '../../store';
import { Location } from '../../store/locations/types';
import WeatherCard from '../../components/WeatherCard';
import { fetchRequest, Weather } from '../../store/weatherForecast';

interface PropsFromState {
  selectedLocation?: Location,
  loading: boolean,
  data: Weather[],
  errors?: string
}

interface PropsFromDispatch {
  fetchWeatherForecast: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly
`;

const FiveDaysForecast: FunctionComponent<AllProps> = ({ data, fetchWeatherForecast, loading, selectedLocation}) => {

  useEffect(() => {
    if (selectedLocation) {
      fetchWeatherForecast(selectedLocation.woeid);
    }
  }, [selectedLocation, fetchWeatherForecast]);
  
  return (
    <Container>
      {!loading && data.map(weather => {
        return <WeatherCard
          key={weather.id}
          weather={weather} />;
      })}
    </Container>
  );
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ locations, weatherForecast }: ApplicationState) => ({
  loading: weatherForecast.loading,
  errors: weatherForecast.errors,
  data: weatherForecast.data,
  selectedLocation: locations.selectedLocation
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchWeatherForecast: fetchRequest
};

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiveDaysForecast);
