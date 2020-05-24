import React, { Component } from 'react';

import fb from '../../components/Firebase';
import { ContentContainer } from '../../components/StyledComponents';
import Spinner from 'react-bootstrap/Spinner';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appUserEmail: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    this.authListener = fb.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ appUserEmail: user.email, loading: false });
      } else {
        history.push('/login');
        return;
      }
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  logout = async () => {
    await fb.logout();
  };

  render() {
    const { appUserEmail, loading } = this.state;

    if (loading)
      return (
        <ContentContainer>
          <Spinner animation="border" />
        </ContentContainer>
      );

    return (
      <div>
        <h3>hello {appUserEmail}</h3>
        <button type="button" onClick={this.logout}>
          Log Out
        </button>
      </div>
    );
  }
}

export default HomePage;
