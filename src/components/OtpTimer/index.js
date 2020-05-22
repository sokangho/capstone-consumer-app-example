import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class OtpTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      max: 0,
      current: 0,
    };

    this.timer = 0;
  }

  async componentDidMount() {
    const { otpLifetime } = this.props;

    this.setState({
      max: otpLifetime,
      current: otpLifetime,
    });

    this.timer = setInterval(this.startCountDown, 1000);
  }

  startCountDown = () => {
    const { current } = this.state;

    const now = current - 1;

    this.setState({
      current: now,
    });

    if (now === 0) {
      clearInterval(this.timer);
    }
  };

  render() {
    const { current, max } = this.state;

    return (
      <div>
        <h2>{current}</h2>
        <ProgressBar now={current} min={0} max={max} animated />
      </div>
    );
  }
}

export default OtpTimer;
