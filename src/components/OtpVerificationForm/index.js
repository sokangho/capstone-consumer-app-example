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
    width: 140px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

class OtpVerificationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { otp } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ otp });
  };

  render() {
    const { otp } = this.state;
    const { error } = this.props;

    const isInvalid = otp === '';

    return (
      <Panel>
        <FormContainer onSubmit={this.onSubmit}>
          <Heading>OTP Verification</Heading>

          <InputLabel htmlFor="otp">One-Time Password</InputLabel>
          <InputBox
            type="number"
            id="otp"
            name="otp"
            placeholder="Enter one-time password"
            value={otp}
            onChange={this.onChange}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isInvalid}>
            Verify
          </Button>
        </FormContainer>
      </Panel>
    );
  }
}

export default OtpVerificationForm;
