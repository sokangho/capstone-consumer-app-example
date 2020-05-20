import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from '../../views/RegisterPage';
import LoginPage from '../../views/LoginPage';

const App = () => (
  <Switch>
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/login" component={LoginPage} />
  </Switch>
);

export default App;
