import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from '../../views/RegisterPage';

const App = () => (
  <Switch>
    <Route exact path="/register" component={RegisterPage} />
  </Switch>
);

export default App;
