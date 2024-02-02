import React from 'react';
import {ResultCalc, ResultContainer, ResultFinal} from './styles';

export function ViewResult() {
  return (
    <ResultContainer>
      <ResultCalc>10+12/2</ResultCalc>
      <ResultFinal>=11</ResultFinal>
    </ResultContainer>
  );
}
