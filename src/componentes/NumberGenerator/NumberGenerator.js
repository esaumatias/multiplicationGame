import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContex';
import { Card, Button } from 'react-bootstrap';
import Multiply from '../Multiply/Multiply';
import RandomRespost from '../RandomRespost/RandomRespost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NumberGenerator.css';

function NumberGenerator() {
  const history = useHistory();
  const [array, setARray] = useState([]);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const { 
    userName,
    dificulty,
    result,
    disableButton,
    setDisableButton,
    setResult,
    setMultiply,
    page,
    setPage } = useContext(AppContext);

  useEffect(randomQuestions, [dificulty, setMultiply])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
    setPage(page + 1)

    if (page === 10) {
      history.push('/feedback');
    }
  }

  return (
    <Card className="containerGame">
      <h2>{`${page}/10`}</h2>
      <Multiply one={numberOne} two={numberTwo} />

      <form className="d-grid gap-2">
        <div className="containerGeral">
          <RandomRespost alternativas={array} />

          <h2 className="titleResult">{`${userName}, sua resposta está:`}</h2>
          <div className="containerResults">
            {result ? <h3 className="greem">certa</h3> : null}
            {result === false ? <h3 className="red">errada</h3> : null}
          </div>
        </div>
        <Button onClick={nextQuestions} disabled={!disableButton}>Proxima Questão</Button>
      </form>
    </Card>
  )
}

export default NumberGenerator;
