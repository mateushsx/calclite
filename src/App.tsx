import React from 'react';
import {Container} from './styles/global';
import {ViewResult} from './components/viewResult';
import {ViewButtons} from './components/viewButtons';

export function App() {
  return (
    <Container>
      <ViewResult />
      <ViewButtons />
    </Container>
  );
}
