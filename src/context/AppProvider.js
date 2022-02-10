import React, { useState } from 'react';
import AppContext from './AppContex';

const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState('user');
  const [dificulty, setDificulty] = useState('facil');
  const [result, setResult] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  return (
    <AppContext.Provider
      value={ {
        userName,
        setUserName,
        dificulty,
        setDificulty,
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
