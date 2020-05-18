import React, { Component } from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styleGuide';

const Panel = styled.div`
  width: 300px;
  height: 100%;
  margin-top: 20px;

  background: ${colors.primaryWhite};
  text-align: left;

  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

const ContentContainer = styled.form`
  padding: 20px;
`;

const LoginHeading = styled.h3`
  font-size: 18px;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};

  &::after {
    content: '';
    display: block;
    width: 55px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.primaryBlue};
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
  color: ${colors.darkText};
`;

const InputBox = styled.input`
  display: block;
  border: 1px solid ${colors.borderLight};
  border-radius: 3px;
  width: 250px;
  height: 30px;
  margin: 5px auto 20px;
  padding-left: 10px;

  &::placeholder {
    font-family: ${fonts.robotoSlab};
    font-size: 14px;
  }
`;

const LoginButton = styled.button`
  display: block;
  width: 255px;
  height: 35px;
  margin: 25px auto 0px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
`;

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
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

    const { email, username, passwordOne, mobileNumber } = this.state;
    const { onSubmit } = this.props;

    onSubmit({
      email,
      username,
      passwordOne,
      mobileNumber,
    });
  };

  render() {
    const { email, username, mobileNumber, passwordOne, passwordTwo } = this.state;

    const isInvalid =
      email === '' ||
      username === '' ||
      mobileNumber === '' ||
      passwordOne === '' ||
      passwordOne !== passwordTwo;

    return (
      <Panel>
        <ContentContainer onSubmit={this.onSubmit}>
          <LoginHeading>Register</LoginHeading>

          <InputLabel htmlFor="email">Email</InputLabel>
          <InputBox
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
          />

          <InputLabel htmlFor="username">Username</InputLabel>
          <InputBox
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
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

          <LoginButton type="submit" disabled={isInvalid}>
            Register
          </LoginButton>
        </ContentContainer>
      </Panel>
    );
  }
}

export default RegisterForm;
