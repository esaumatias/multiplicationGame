import React, { useState } from 'react';
import AppContext from './AppContex';

const AppProvider = ({ children }) => {
  const [multiply, setMultiply] = useState('');
  const [userName, setUserName] = useState('user');
  const [dificulty, setDificulty] = useState('facil');
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  return (
    <AppContext.Provider
      value={ {
        multiply,
        setMultiply,
        userName,
        setUserName,
        dificulty,
        setDificulty,
        numberOne,
        setNumberOne,
        numberTwo,
        setNumberTwo,
        result,
        setResult,
        disableButton,
        setDisableButton,
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
