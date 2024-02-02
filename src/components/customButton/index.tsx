import React from 'react';
import {NumberText, TouchableButton} from './styles';
import {useCalc} from '../../contexts/calcContext';

interface ICustomButton {
  number: string;
  color?: string;
  width?: string;
  height?: string;
}

export function CustomButton({number, color, width, height}: ICustomButton) {
  const {insertCharacter, calcOperation, clearOperation} = useCalc();

  const handleInsertCharacter = () => {
    if (number === '=') {
      calcOperation();
    } else if (number === 'Ac') {
      clearOperation();
    } else {
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
