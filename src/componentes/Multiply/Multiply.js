import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Multiply.css';
function Multiply(props) {
  const { one, two } = props;
  return (
    <div className="containerMultiply">
      <form className="d-grid gap-2 textResul">
        <h3>Resolva a multiplicação:</h3>
        <Row className="text-center">
          <Col xs as="h2">{one}</Col>
          <Col xs as="h5">X</Col>
          <Col xs as="h2">{two}</Col>
        </Row>
      </form>

    </div>
  );
}

export default Multiply;
