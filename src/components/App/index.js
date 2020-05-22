import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../views/HomePage';
import RegisterPage from '../../views/RegisterPage';
import LoginPage from '../../views/LoginPage';
import OtpVerificationPage from '../../views/OtpVerificationPage';

const App = () => (
  <Switch>
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/verify" component={OtpVerificationPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export default App;
