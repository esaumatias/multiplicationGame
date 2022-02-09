import React, { useState, useContext } from "react";
import { Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContex';
import './Login.css';

function Login() {
  const { setUserName, setDificulty, setAcertos, setErros } = useContext(AppContext);
  const [name, setName] = useState('');
  const history = useHistory();

  function handleName({target}) {
    const { value } = target;
    console.log(value.name);
    setName(value);
  }

  function handleDificulty({target}) {
    const { value } = target;
    setDificulty(value);
  }

  function setUser() {
    history.push('/game');
    setUserName(name);
    setAcertos(0);
    setErros(0);
  }

  return(
    <Form className="text-center containerLogin">
      <Row className="justify-content-md-center">
        <Col xs="auto">
          <h1>Login</h1>
          <Form.Group >
            <Form.Control
              type="text"
              placeholder="Escreva seu nome"
              onChange={handleName}
              className="inputResposta"
            />
            <Form.Select onChange={handleDificulty} className="selectLogin">
              <option value="facil" select>facil</option>
              <option value="médio">médio</option>
              <option value="dificil">dificil</option>
            </Form.Select>

          </Form.Group>
          <Form.Control
            variant="primary"
            type="button"
            onClick={setUser}
            className="inputButtonLogin"
            value="START"
          />
        </Col>
      </Row>
    </Form>
  )
}

export default Login;
