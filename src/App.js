import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Security, ImplicitCallback, SecureRoute} from '@okta/okta-react';
import Login from './auth/Login';

import './App.css';
import Home from './pages/Home';
import Member from './pages/Member';

const config = {
  issuer: 'https://dev-845312.okta.com',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oai4t8g3H3HrUwX2356',
};

function onAuthRequired({history}) {
  history.push ('/login');
}

class App extends React.Component {
  render () {
    return (
      <Router>
        <Security
          issuer="https://dev-845312.okta.com/oauth2/default"
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          onAuthRequired={onAuthRequired}
        >
          <Nav />
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-845312.okta.com" />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/member" component={Member} />
          <SecureRoute path="/member/:memberID" component={Member} />
        </Security>
      </Router>
    );
  }
}

export default App;
