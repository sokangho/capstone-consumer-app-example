import React, { Component } from 'react';

import { ContentContainer, AppHeading, AppSubHeading } from '../../components/StyledComponents';
import OtpVerificationForm from '../../components/OtpVerificationForm';
import otpService from '../../services/otp.service';
import Spinner from 'react-bootstrap/Spinner';
import OtpTimer from '../../components/OtpTimer';

class OtpVerificationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otpLifetime: 100,
      appUserEmail: '',
      loading: true,
      error: '',
    };

    this.timer = 0;
  }

  async componentDidMount() {
    const { history, location } = this.props;
    const { data } = location;

    // Redirect to login page if user hasn't logged in
    if (!data || !data.appUserEmail) {
      history.push('/login');
      return;
    }

    const app = await otpService.getAppInfo();

    this.setState({
      loading: false,
      otpLifetime: app.otpLifetime,
      appUserEmail: data.appUserEmail,
    });

    this.setState({
      loading: false,
    });
  }

  // Redirects to login page when timer runs out
  onTimesUp = () => {
    const { history } = this.props;
    history.push('/login');
  };

  onSubmit = async ({ otp }) => {
    const { appUserEmail } = this.state;
    const { history } = this.props;

    const isOtpValid = await otpService.verifyOtp(appUserEmail, otp);

    // If otp is valid, redirects to home page
    if (isOtpValid) {
      history.push({
        pathname: '/',
        data: { appUserEmail },
      });
    } else {
      this.setState({
        error: 'Incorrect OTP code',
      });
    }
  };

  render() {
    const { otpLifetime, loading, error } = this.state;

    if (loading)
      return (
        <ContentContainer>
          <Spinner animation="border" />
        </ContentContainer>
      );

    return (
      <>
        <ContentContainer>
          <AppHeading>Client App</AppHeading>
          <AppSubHeading>Demo</AppSubHeading>
          <OtpTimer otpLifetime={otpLifetime} onTimesUp={this.onTimesUp} />
          <OtpVerificationForm onSubmit={this.onSubmit} error={error} />
        </ContentContainer>
      </>
    );
  }
}

export default OtpVerificationPage;
