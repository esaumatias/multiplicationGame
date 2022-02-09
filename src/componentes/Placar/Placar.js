import React from 'react';
import './Placar.css';
function Placar(props) {
  const { one, two } = props;
  
  return (
    <div className="containerHeader">
    <h1>GAME TABUADA</h1>
    <div className="placar">
      <div className="placarNameAcertos">Acertos</div>
      <div className="acertos">{one}</div>
      <div className="erros">{two}</div>
      <div className="placarNameError">Erros</div>
    </div>
    </div>
  );
}

export default Placar;
