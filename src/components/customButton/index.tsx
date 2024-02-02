import React from 'react';
import {NumberText, TouchableButton} from './styles';
import {useCalc} from '../../contexts/calcContext';

interface ICustomButton {
  number: string;
  color?: string;
  width?: string;
  height?: string;
}

const RESERVED_BUTTONS = ['Ac', 'x'];

export function CustomButton({number, color, width, height}: ICustomButton) {
  const {insertCharacter} = useCalc();

  const handleInsertCharacter = () => {
    if (!RESERVED_BUTTONS.includes(number)) {
      insertCharacter(number);
    }
  };

  return (
    <TouchableButton
      color={color}
      width={width}
      height={height}
      onPress={handleInsertCharacter}>
      <NumberText>{number}</NumberText>
    </TouchableButton>
  );
}
