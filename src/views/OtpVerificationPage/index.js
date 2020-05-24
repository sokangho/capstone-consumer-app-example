import React, { Component } from 'react';

import { ContentContainer, AppHeading, AppSubHeading } from '../../components/StyledComponents';
import OtpVerificationForm from '../../components/OtpVerificationForm';
import otpService from '../../services/otp.service';
import Spinner from 'react-bootstrap/Spinner';
import OtpTimer from '../../components/OtpTimer';
import fb from '../../components/Firebase';

class OtpVerificationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otpLifetime: 60,
      appUserEmail: '',
      loading: true,
      error: '',
      isOtpValid: false,
    };
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

    if (app.status === 200) {
      this.setState({
        loading: false,
        otpLifetime: app.data.otpLifetime,
        appUserEmail: data.appUserEmail,
      });
    } else {
      this.setState({
        error: 'Cannot fetch application data.',
      });
    }
  }

  async componentWillUnmount() {
    const { isOtpValid } = this.state;

    if (!isOtpValid) {
      await this.logOut();
    }
  }

  // Logs out of firebase and redirect to login page when timer runs out
  onTimesUp = async () => {
    await this.logOut();
  };

  logOut = async () => {
    const { history } = this.props;
    await fb.logout();
    history.push('/login');
  };

  onSubmit = async ({ otp }) => {
    const { appUserEmail } = this.state;
    const { history } = this.props;

    const isOtpValid = await otpService.verifyOtp(appUserEmail, otp);

    // If otp is valid, redirects to home page
    if (isOtpValid.data) {
      this.setState({
        isOtpValid: true,
      });

      history.push('/');
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
