import React from 'react';
import {Container} from './styles/global';
import {ViewResult} from './components/viewResult';
import {ViewButtons} from './components/viewButtons';
import {CalcProvider} from './contexts/calcContext';

export function App() {
  return (
    <CalcProvider>
      <Container>
        <ViewResult />
        <ViewButtons />
      </Container>
    </CalcProvider>
  );
}
