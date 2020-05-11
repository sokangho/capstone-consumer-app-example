import React, { Component } from 'react';
import styled from 'styled-components';

import { fontUrls, colors, fonts } from '../../styleGuide';
import RegisterForm from '../../components/RegisterForm';
import fb from '../../components/Firebase';

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

const URL = fontUrls.robotoSlab;

class RegisterPage extends Component {
  onSubmit = (obj) => {
    fb.register(obj.email, obj.passwordOne)
      .then((authUser) => {
        console.log(authUser);
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
