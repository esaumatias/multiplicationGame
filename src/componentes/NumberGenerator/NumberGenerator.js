import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContex';
import { Form, Card, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NumberGenerator.css';

function NumberGenerator() {
  const history = useHistory();
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [repost, setRepost] = useState('');
  const [result, setResult] = useState('');
  const { 
    setMultiply,
    multiply,
    acertos,
    setAcertos,
    setErros,
    erros,
    userName } = useContext(AppContext);

   useEffect(() => {
    getRandom();
  }, []);

  function getRandom() {
    const one = parseInt(Math.random() * 10);
    const two = parseInt(Math.random() * 10);
    setNumberOne(one);
    setNumberTwo(two);
    setMultiply(one * two);

    if (repost === '') {
      setResult('');
    } else if (repost === true) {
      setResult(true);
      setAcertos(acertos + 1)
    } else {
      setResult(false);
      setErros(erros + 1);
    }
  }

  function handleRepost({target}) {
    const { value } = target;
    if (multiply === parseInt(value)) {
      setRepost(true)
    } else {
      setRepost(false)
    }
  }

  function logOff() {
    setAcertos(0);
    setErros(0);
    history.push('/');
  }
  

  return (
    <Card className="containerGame">
      <Header />
      <form className="d-grid gap-2 textResul">
        <h3>Resolva a multiplicação:</h3>
        <Row className="text-center">
          <Col xs as="h2">{numberOne}</Col>
          <Col xs as="h5">X</Col>
          <Col xs as="h2">{numberTwo}</Col>
        </Row>
      </form>

      <form className="d-grid gap-2">
        <div className="containerGeral">
          <Form.Control
            size="lg"
            type="number"
            onChange={handleRepost} required
            placeholder="Escreva sua resposta"
            className="inputResposta"
          />
          <Form.Control
            type="reset"
            value="resultado"
            onClick={getRandom}
            variant="primary"
            size="lg"
            className="inputButton"
          />
          <h2>{`${userName}, sua resposta está:`}</h2>
          <div className="containerResults">
            {result ? <h3 className="greem">certa</h3> : null}
            {result === false ? <h3 className="red">errada</h3> : null}
          </div>
        </div>
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
