import React from 'react';
import {ResultCalc, ResultContainer, ResultFinal} from './styles';
import {useCalc} from '../../contexts/calcContext';

export function ViewResult() {
  const {operationView, resultView} = useCalc();
  return (
    <ResultContainer>
      <ResultCalc>{operationView || 0}</ResultCalc>
      <ResultFinal>={resultView || 0} </ResultFinal>
    </ResultContainer>
  );
}
