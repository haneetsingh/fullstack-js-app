import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';
import ProtectedRoute from './components/routes/ProtectedRoute';
import AnonymousRoute from './components/routes/AnonymousRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <AnonymousRoute location={location} path="/login" component={LoginPage} />
    <ProtectedRoute location={location} path="/profile" component={ProfilePage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
