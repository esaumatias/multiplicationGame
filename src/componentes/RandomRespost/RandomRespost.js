import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContex';
import { Button } from 'react-bootstrap';
import Placar from '../Placar/Placar';
import './RandomRespost.css';

function RandomRespost() {
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const {  
      multiply, 
      dificulty, 
      setMultiply, 
      setNumberOne,
      setNumberTwo,
      disableButton,
      setDisableButton,
      setResult } = useContext(AppContext);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    if (dificulty === 'facil') {
      const one = getRandomInt(0, 10)
      const two = getRandomInt(0, 10)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
    } else if (dificulty === 'médio') {
      const one = getRandomInt(0, 50)
      const two = getRandomInt(0, 30)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
    } else if (dificulty === 'dificil') {
      const one = getRandomInt(0, 100)
      const two = getRandomInt(0, 100)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
    }
  }, [setMultiply, setNumberTwo, setNumberOne, dificulty]);

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

  function randomQuestions() {
    if (dificulty === 'facil') {
      const array = [getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), multiply];
      return array.sort(()=> Math.random() - 0.5);;
    } else if (dificulty === 'médio') {
      const array = [getRandomInt(40, 1000), getRandomInt(40, 1000), getRandomInt(40, 1000), multiply];
      return array.sort(()=> Math.random() - 0.5);;
    } else if (dificulty === 'dificil') {
      const array = [getRandomInt(24, 1300), getRandomInt(24, 1300), getRandomInt(24, 1300), multiply];
      return array.sort(()=> Math.random() - 0.5);;
  }
}

  return (
    <div className="containerQuestions">
      <Placar one={acertos} two={erros} />
      {randomQuestions().map((value, index) => (
        <Button
          variant="primary"
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

