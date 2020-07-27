import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import * as V from '../../styles/variables';

const Button = styled.button`
  border: 1px solid;
  border-color: ${V.Color.blue};
  border-radius: 5px;
  color: ${V.Color.blue};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding: 10px;
  text-transform: capitalize;
  width: 100px;
  
  :hover {
    color: ${V.Color.white};
    background-color: ${V.Color.blue};
  }
`;

const LocationBtn: FunctionComponent = ({ children }) => {
  return (<Button>{children}</Button>);
}

export default LocationBtn;