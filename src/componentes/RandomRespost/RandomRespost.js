import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContex';
import { Button } from 'react-bootstrap';
import Placar from '../Placar/Placar';
import './RandomRespost.css';

function RandomRespost(props) {
  const { alternativas } = props;

  const {  
      disableButton,
      setDisableButton,
      setResult,
      multiply,
      erros,
      setErros,
      acertos,
      setAcertos, } = useContext(AppContext);

  function handleRepost({target}) {
    setDisableButton(!disableButton);
    const { value } = target;
    if (multiply === parseInt(value)) {
      setAcertos(acertos + 1)
      setResult(true);
    } else {
      setErros(erros + 1);
      setResult(false);
    }
  }

  return (
    <div className="containerQuestions">
      <Placar one={acertos} two={erros} />
      {alternativas.map((value, index) => (
        <Button
          variant={disableButton ? (value === multiply ? 'success' : 'danger') : 'secondary'}
          size="lg"
          className="buttonQuestions"
          onClick={handleRepost}
          key={index}
          value={value}
          disabled={disableButton}
        >
          {value}
        </Button>
      ))}
    </div>
  )
}

export default RandomRespost;
