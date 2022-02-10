import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContex';
import { Form, Card, Button } from 'react-bootstrap';
import Multiply from '../Multiply/Multiply';
import RandomRespost from '../RandomRespost/RandomRespost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NumberGenerator.css';

function NumberGenerator() {
  const history = useHistory();
  const [array, setARray] = useState([]);
  const [multiply, setMultiply] = useState('');
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const { 
    userName,
    dificulty,
    setDificulty,
    result,
    disableButton,
    setDisableButton,
    setResult, } = useContext(AppContext);

  useEffect(randomQuestions, [dificulty])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function logOff() {
    setMultiply('');
    setDificulty('facil')
    setDisableButton(false);
    setResult('');
    history.push('/');
  }

  function randomQuestions() {
    if (dificulty === 'facil') {
      const one = getRandomInt(0, 10)
      const two = getRandomInt(0, 10)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
      const array = [getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), (one * two)];
      setARray(array.sort(()=> Math.random() - 0.5));
    } else if (dificulty === 'médio') {
      const one = getRandomInt(0, 50)
      const two = getRandomInt(0, 50)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
      const array = [getRandomInt(40, 1000), getRandomInt(40, 1000), getRandomInt(40, 1000), (one * two)];
      setARray(array.sort(()=> Math.random() - 0.5));
    } else if (dificulty === 'dificil') {
      const one = getRandomInt(0, 100)
      const two = getRandomInt(0, 100)
      setNumberOne(one);
      setNumberTwo(two);
      setMultiply(one * two);
      const array = [getRandomInt(24, 1300), getRandomInt(24, 1300), getRandomInt(24, 1300), (one * two)];
      setARray(array.sort(()=> Math.random() - 0.5));
  }
}

  function nextQuestions() {
    setDisableButton(false);
    setResult('');
    randomQuestions();
  }

  return (
    <Card className="containerGame">
      <Multiply one={numberOne} two={numberTwo} />

      <form className="d-grid gap-2">
        <div className="containerGeral">

          <RandomRespost alternativas={array} resposta={multiply} />

          <h2 className="titleResult">{`${userName}, sua resposta está:`}</h2>
          <div className="containerResults">
            {result ? <h3 className="greem">certa</h3> : null}
            {result === false ? <h3 className="red">errada</h3> : null}
          </div>
        </div>
        <Button onClick={nextQuestions} disabled={!disableButton}>Proxima Questão</Button>
        <Form.Control
          type="button"
          value="SAIR"
          onClick={logOff}
          size="lg"
          className="inputButton"
        />
      </form>
    </Card>
  )
}

export default NumberGenerator;
