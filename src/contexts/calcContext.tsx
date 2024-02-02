import React from 'react';
import {createContext, useContext, useState} from 'react';

interface ICalcContext {
  resultView: string;
  operationView: string;
  calcOperation: () => void;
  clearOperation: () => void;
  insertCharacter: (character: string) => void;
}

const CalcContext = createContext({} as ICalcContext);

const operators = {
  division: '/',
  multiply: '*',
  subtract: '-',
  addition: '+',
};

const operatorsList = Object.values(operators);

function CalcProvider({children}: any): JSX.Element {
  const [operationView, setOperationView] = useState('');
  const [resultView, setResultView] = useState('');

  const insertCharacter = (character: string) => {
    const lastCharacter = operationView.slice(-1);
    const isOperator = operatorsList.includes(character);

    if (isOperator && operatorsList.includes(lastCharacter)) {
      return;
    }

    setOperationView(prevState => prevState + character);
  };

  const clearOperation = () => {
    setOperationView('');
    setResultView('');
  };

  const calcOperation = () => {
    const lastCharacter = operationView.slice(-1);
    const isOperator = operatorsList.includes(lastCharacter);

    if (!isOperator) {
      const resultEval = eval(operationView);
      setResultView(resultEval);
    }
  };

  return (
    <CalcContext.Provider
      value={{
        resultView,
        operationView,
        calcOperation,
        clearOperation,
        insertCharacter,
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
