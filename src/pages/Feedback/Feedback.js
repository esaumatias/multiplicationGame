import React, { useContext } from 'react';
import AppContext from '../../context/AppContex';
import { useHistory } from 'react-router-dom';
import { Form, Container } from 'react-bootstrap';

import './Feedback.css';

function Feedback() {
  const history = useHistory();
  const { 
    setDificulty,
    setMultiply,
    setDisableButton,
    setResult,
    acertos,
    setPage } = useContext(AppContext);

  function logOff() {
    setMultiply('');
    setDificulty('facil')
    setDisableButton(false);
    setResult('');
    setPage(1);
    history.push('/');
  }

  return (
    <Container className="containerFeedback">
      <div>
      <h1>Feedback</h1>
      <h3>{`Pontuação: ${acertos} acertos.`}</h3>
      {acertos >= 0 && acertos < 4 ? <h2 className="redColor">Estude mais!</h2> : null}
      {acertos >= 4 && acertos < 8 ? <h2 className="yellonColor">Quase lá, estude um pouquinho mais!</h2> : null}
      {acertos > 7 ? <h2 className="greenColor">Você é um gênio!</h2> : null}
      </div>
        <Form.Control
          type="button"
          value="SAIR"
          onClick={logOff}
          size="lg"
          className="inputButton"
        />
    </Container>
  )
}

export default Feedback;
