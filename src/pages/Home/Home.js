import React from 'react';
import NumberGenerator from '../../componentes/NumberGenerator/NumberGenerator';
import './Home.css';

function Home() {
  return (
    <div className="containerHome">
      <div className="containerTop">
      </div>

      <div className="homeCenter">
        <NumberGenerator />
      </div>
    </div>
  );
}

export default Home;
