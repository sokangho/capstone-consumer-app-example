import React, { Component } from 'react';

import {
  Panel,
  FormContainer,
  FormHeading,
  InputLabel,
  InputBox,
  Button,
} from '../StyledComponents';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit({
      email,
      password,
    });
  };

  render() {
    const { email, password } = this.state;

    const isInvalid = email === '' || password === '';

    return (
      <Panel>
        <FormContainer onSubmit={this.onSubmit}>
          <FormHeading>Login</FormHeading>

          <InputLabel htmlFor="email">Email</InputLabel>
          <InputBox
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
          />

          <InputLabel htmlFor="password">Password</InputLabel>
          <InputBox
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
          />

          <Button type="submit" disabled={isInvalid}>
            Login
          </Button>
        </FormContainer>
      </Panel>
    );
  }
}

export default LoginForm;
