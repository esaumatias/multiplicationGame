import React, { useState, useContext } from "react";
import { Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContex';
import './Login.css';

function Login() {
  const { setUserName } = useContext(AppContext);
  const [name, setName] = useState('');
  const history = useHistory();

  function handleName({target}) {
    const { value } = target;
    setName(value);
  }

  function setUser() {
    setUserName(name);
    history.push('/game');
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
          </Form.Group>
          <Form.Control
            variant="primary"
            type="submit"
            onClick={setUser}
            className="inputButton"
            value="START"
          />
        </Col>
      </Row>
    </Form>
  )
}

export default Login;
