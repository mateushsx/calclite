import React from 'react';
import {NumberText, TouchableButton} from './styles';

interface ICustomButton {
  number: string;
  color?: string;
  width?: string;
  height?: string;
}

export function CustomButton({number, color, width, height}: ICustomButton) {
  return (
    <TouchableButton color={color} width={width} height={height}>
      <NumberText>{number}</NumberText>
    </TouchableButton>
  );
}
