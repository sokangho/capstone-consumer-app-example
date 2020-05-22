import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appUserEmail: '',
    };
  }

  componentDidMount() {
    const { history, location } = this.props;
    const { data } = location;

    // Redirect to login page if user hasn't logged in
    if (!data || !data.appUserEmail) {
      history.push('/login');
      return;
    }

    this.setState({ appUserEmail: data.appUserEmail });
  }

  render() {
    const { appUserEmail } = this.state;

    return <h1>hello {appUserEmail}</h1>;
  }
}

export default HomePage;
