import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Panel,
  FormContainer,
  FormHeading,
  InputLabel,
  InputBox,
  Button,
} from '../StyledComponents';

const Heading = styled(FormHeading)`
  &::after {
    width: 75px;
  }
`;

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      mobileNumber: '',
      passwordOne: '',
      passwordTwo: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, passwordOne, mobileNumber } = this.state;
    const { onSubmit } = this.props;

    onSubmit({
      email,
      passwordOne,
      mobileNumber,
    });
  };

  render() {
    const { email, mobileNumber, passwordOne, passwordTwo } = this.state;

    const isInvalid =
      email === '' || mobileNumber === '' || passwordOne === '' || passwordOne !== passwordTwo;

    return (
      <Panel>
        <FormContainer onSubmit={this.onSubmit}>
          <Heading>Register</Heading>

          <InputLabel htmlFor="email">Email</InputLabel>
          <InputBox
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
          />

          <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
          <InputBox
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={this.onChange}
          />

          <InputLabel htmlFor="passwordOne">Password</InputLabel>
          <InputBox
            type="password"
            id="passwordOne"
            name="passwordOne"
            placeholder="Password"
            value={passwordOne}
            onChange={this.onChange}
          />

          <InputLabel htmlFor="passwordTwo">Confirm Password</InputLabel>
          <InputBox
            type="password"
            id="passwordTwo"
            name="passwordTwo"
            placeholder="Confirm Password"
            value={passwordTwo}
            onChange={this.onChange}
          />

          <Button type="submit" disabled={isInvalid}>
            Register
          </Button>
        </FormContainer>
      </Panel>
    );
  }
}

export default RegisterForm;
