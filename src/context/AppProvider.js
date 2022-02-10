import React, { useState } from 'react';
import AppContext from './AppContex';

const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState('user');
  const [dificulty, setDificulty] = useState('facil');
  const [result, setResult] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [multiply, setMultiply] = useState('');
  const [page, setPage] = useState(1);
  const [erros, setErros] = useState(0);
  const [acertos, setAcertos] = useState(0);

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
        multiply,
        setMultiply,
        page,
        setPage,
        erros,
        setErros,
        acertos,
        setAcertos,
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
