import React, { Component } from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styleGuide';
import LoginForm from '../../components/LoginForm';
import fb from '../../components/Firebase';
import otpService from '../../services/otp.service';

const ContentContainer = styled.div`
 max-width: 500px;
  text-align: center;

  position: absolute;
  top 50%; left: 50%;
  transform: translate(-50%, -50%);
`;

const AppHeading = styled.h1`
  font-size: 30px;
  font-family: ${fonts.robotoSlab};
  font-weight: 600;
  color: ${colors.primaryBlue};
  margin: 0px;
`;

const AppSubHeading = styled.h2`
  font-size: 26px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  color: ${colors.subHeading};
  margin: 0px;
`;

class LoginPage extends Component {
  onSubmit = async (obj) => {
    fb.login(obj.email, obj.password)
      .then(async (authUser) => {
        // Login successful, generate and send otp to user
        otpService.generateAndSendOtp(obj.email);
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <>
        <ContentContainer>
          <AppHeading>Client App</AppHeading>
          <AppSubHeading>Demo</AppSubHeading>
          <LoginForm onSubmit={this.onSubmit} />
        </ContentContainer>
      </>
    );
  }
}

export default LoginPage;
