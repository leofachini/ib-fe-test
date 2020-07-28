import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import * as V from '../../styles/variables';

interface CustomBtnProps {
  isSelected?: boolean,
  // DOUBT
  // 1) I don't know any good generic function with any amount of arguments 
  // and any response type to set here. Suggestions?
  // 
  // 2) This is the best way to bind click events from parent to children?
  clicked?: any
}

const Button = styled.button<CustomBtnProps>`
  background-color: ${props => props.isSelected ? V.Color.blue : 'inherit'};
  border: 1px solid;
  border-color: ${V.Color.blue};
  border-radius: 5px;
  color: ${props => props.isSelected ? V.Color.white : V.Color.blue};
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

const CustomBtn: FunctionComponent<CustomBtnProps> = ({ children, isSelected = false, clicked = () => { } }) => {
  return (
    <Button
      isSelected={isSelected}
      onClick={clicked}>
      {children}
    </Button>
  );
}

export default CustomBtn;