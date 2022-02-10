import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContex';
import { Button } from 'react-bootstrap';
import Placar from '../Placar/Placar';
import './RandomRespost.css';

function RandomRespost(props) {
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const { alternativas, resposta } = props;

  const {  
      disableButton,
      setDisableButton,
      setResult } = useContext(AppContext);

  function handleRepost({target}) {
    setDisableButton(!disableButton);
    const { value } = target;
    if (resposta === parseInt(value)) {
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
          variant={disableButton ? (value === resposta ? 'success' : 'danger') : 'secondary'}
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
