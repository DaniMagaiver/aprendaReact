import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Componente from './pages/Componente/Componente';

export default function Routes(){
  return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Componente" component={Componente} /> 
      </Switch>
      </BrowserRouter>
  );
}