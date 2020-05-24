import React, { Component } from 'react';

import { ContentContainer, AppHeading, AppSubHeading } from '../../components/StyledComponents';
import LoginForm from '../../components/LoginForm';
import fb from '../../components/Firebase';
import otpService from '../../services/otp.service';

class LoginPage extends Component {
  onSubmit = async (obj) => {
    const { history } = this.props;

    fb.login(obj.email, obj.password)
      .then(async (authUser) => {
        // Login successful, generate and send otp to user
        await otpService.generateAndSendOtp(obj.email);

        // Redirect to OTP verification page with user email
        history.push({
          pathname: '/verify',
          data: {
            appUserEmail: authUser.user.email,
          },
        });
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
