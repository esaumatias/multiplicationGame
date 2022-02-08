import React, { useState } from 'react';
import AppContext from './AppContex';

const AppProvider = ({ children }) => {
  const [multiply, setMultiply] = useState('');
  const [userName, setUserName] = useState('');
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  return (
    <AppContext.Provider
      value={ {
        multiply,
        setMultiply,
        userName,
        setUserName,
        acertos,
        setAcertos,
        erros,
        setErros,
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
