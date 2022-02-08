import React, { useContext } from 'react';
import AppContext from '../../context/AppContex';
import './Placar.css';
function Placar() {
  const { erros, acertos } = useContext(AppContext);

  return (
    <div className="placar">
      <div className="placarNameAcertos">Acertos</div>
      <div className="acertos">{acertos}</div>
      <div className="erros">{erros}</div>
      <div className="placarNameError">Erros</div>
    </div>
  );
}

export default Placar;
