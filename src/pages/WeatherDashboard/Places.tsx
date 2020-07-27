import React from 'react';
import styled from 'styled-components';

import LocationBtn from '../../components/LocationBtn';

const PlaceContainer = styled.section.attrs({
  id: 'places'
})`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

function Places() {
  return (
    <PlaceContainer>
      <LocationBtn>São Paulo</LocationBtn>
      <LocationBtn>London</LocationBtn>
      <LocationBtn>Lisbon</LocationBtn>
      <LocationBtn>Bondi</LocationBtn>
      <LocationBtn>Hamburg</LocationBtn>
    </PlaceContainer>
  );
}

export default Places;
