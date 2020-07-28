import React, { FunctionComponent, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ApplicationState } from '../../store';
import CustomBtn from '../../components/CustomBtn';
import { fetchRequest, selectLocation } from '../../store/locations/actions';
import { Location } from '../../store/locations/types';
import * as V from '../../styles/variables';

interface PropsFromState {
  selectedLocation?: Location,
  loading: boolean,
  data: Location[],
  errors?: string
}

interface PropsFromDispatch {
  fetchLocations: typeof fetchRequest,
  setSelectedLocation: typeof selectLocation
}

type AllProps = PropsFromState & PropsFromDispatch;

const Container = styled.section.attrs({
  id: 'places'
})`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

const Locations: FunctionComponent<AllProps> = ({ data, fetchLocations, loading, selectedLocation = {}, setSelectedLocation}) => {

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchLocations([
        'Boston',
        'Hamburg',
        'Lisbon',
        'London',
        'São Paulo'
      ]);
    } else {
      setSelectedLocation(data[0]);
    }
  }, [data, fetchLocations, setSelectedLocation]);

  return (
    // TODO Add loading or ghost components while waiting response from the user
    <Container>
      {loading ? 
        <ReactLoading type='spin' color={V.Color.blue}/> :
        data.map(location => {
          const isSelected = selectedLocation.woeid === location.woeid;
          return (
            <CustomBtn
              key={location.woeid}
              clicked={() => setSelectedLocation(location)}
              isSelected={isSelected}>
              {location.title}
            </CustomBtn>
          );
        })
      }
    </Container>
  );
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ locations }: ApplicationState) => ({
  loading: locations.loading,
  errors: locations.errors,
  data: locations.data,
  selectedLocation: locations.selectedLocation
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchLocations: fetchRequest,
  setSelectedLocation: selectLocation
};

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);

