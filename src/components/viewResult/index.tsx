import React from 'react';
import {ResultCalc, ResultContainer, ResultFinal} from './styles';
import {useCalc} from '../../contexts/calcContext';

export function ViewResult() {
  const {operationView} = useCalc();
  return (
    <ResultContainer>
      <ResultCalc>{operationView || 0}</ResultCalc>
      <ResultFinal>=11</ResultFinal>
    </ResultContainer>
  );
}
