import React, { useContext } from 'react';
import AppContext from '../../context/AppContex';
import Placar from '../Placar/Placar';
import './Header.css';

function Header() {
  const { userName } = useContext(AppContext);
  return(
    <div className="containerHeader">
      <Placar />
    </div>
  )
}

export default Header;
