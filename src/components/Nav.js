import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Okta POC</NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/member">Member</NavLink>
        </div>
      </div>
    </nav>
  );
};
