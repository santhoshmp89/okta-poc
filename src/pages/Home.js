import React, {Component, Fragment} from 'react';
import Container from '../layout/Container';
import {withAuth} from '@okta/okta-react';

export default withAuth (
  class Home extends Component {
    constructor (props) {
      super (props);
      this.state = {authenticated: null};
    }

    componentDidMount () {
      this.checkAuthentication ();
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated ();
      if (authenticated !== this.state.authenticated) {
        this.setState ({authenticated});
      }
    };

    componentDidUpdate () {
      this.checkAuthentication ();
    }

    login = async () => {
      this.props.auth.login ('/');
    };

    logout = async () => {
      this.props.auth.logout ('/');
    };

    render () {
      if (this.state.authenticated === null) return null;
      const button = this.state.authenticated
        ? <button onClick={this.logout}>Logout</button>
        : <button onClick={this.login}>Login</button>;

      return (
        <Container>
          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility class for typography and spacing to space content out within the larger container.
            </p>
            {button}
          </div>

        </Container>
      );
    }
  }
);
