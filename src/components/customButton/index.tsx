import React from 'react';
import {NumberText, TouchableButton} from './styles';
import {useCalc} from '../../contexts/calcContext';

interface ICustomButton {
  number: string | 'Ac' | '=' | 'x';
  color?: string;
  width?: string;
  height?: string;
}

type TButtonActions = {
  [key: string]: () => void;
};

export function CustomButton({number, color, width, height}: ICustomButton) {
  const {insertCharacter, calcOperation, clearOperation, removeLastCharacter} =
    useCalc();

  const buttonActions: TButtonActions = {
    Ac: clearOperation,
    '=': calcOperation,
    x: removeLastCharacter,
  };

  const handleInsertCharacter = () => {
    if (buttonActions[number]) {
      const func = buttonActions[number];
      func();
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
