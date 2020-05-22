import React, { Component } from 'react';

import { ContentContainer, AppHeading, AppSubHeading } from '../../components/StyledComponents';
import RegisterForm from '../../components/RegisterForm';
import fb from '../../components/Firebase';
import otpService from '../../services/otp.service';

class RegisterPage extends Component {
  onSubmit = async (obj) => {
    const { history } = this.props;

    fb.register(obj.email, obj.passwordOne)
      .then(async (authUser) => {
        console.log(authUser);
        const newAppUserReq = {
          email: obj.email,
          mobileNumber: obj.mobileNumber,
        };
        const res = await otpService.registerAppUser(newAppUserReq);

        if (res.status === 200) {
          // User created successfully, redirect to login page
          history.push('/login');
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <>
        <ContentContainer>
          <AppHeading>Client App</AppHeading>
          <AppSubHeading>Demo</AppSubHeading>
          <RegisterForm onSubmit={this.onSubmit} />
        </ContentContainer>
      </>
    );
  }
}

export default RegisterPage;
