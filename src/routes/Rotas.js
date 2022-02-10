import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Feedback from '../pages/Feedback/Feedback';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Home } />
      <Route exact path="/feedback" component={ Feedback } />
    </Switch>
  );
}

export default Rotas;
