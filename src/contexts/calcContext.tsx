import React from 'react';
import {createContext, useContext, useState} from 'react';

interface ICalcContext {
  insertCharacter: (character: string) => void;
  operationView: string;
}

const CalcContext = createContext({} as ICalcContext);

const operators = ['/', '*', '-', '+'];

function CalcProvider({children}: any): JSX.Element {
  const [operationView, setOperationView] = useState('');

  const insertCharacter = (character: string) => {
    const lastCharacter = operationView.slice(-1);

    if (operators.includes(character) && operators.includes(lastCharacter)) {
      return;
    }

    setOperationView(prevState => prevState + character);
  };

  return (
    <CalcContext.Provider
      value={{
        insertCharacter,
        operationView,
      }}>
      {children}
    </CalcContext.Provider>
  );
}

const useCalc = () => {
  const context = useContext(CalcContext);

  return context;
};

export {CalcContext, CalcProvider, useCalc};
