import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AnonymousRoute = ({ isAuthenticated, component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/profile" />}
  />
);

AnonymousRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
};

export default connect(mapStateToProps)(AnonymousRoute);
