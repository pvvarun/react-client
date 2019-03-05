import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrivateLayout } from '../layouts/PrivateLayout';

const LoginLayoutRoute = ({ component: Component }) => (
  <Route
    render={matchProps => (
      <PrivateLayout>
        <Component {...matchProps} />
      </PrivateLayout>
    )}
  />
);

LoginLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
export default LoginLayoutRoute;
