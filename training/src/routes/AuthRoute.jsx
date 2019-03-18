import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthLayout } from "../layouts/AuthLayout";

const LoginLayoutRoute = ({ component: Component }) => (
  <Route
    render={matchProps => (
      <AuthLayout>
        <Component {...matchProps} />
      </AuthLayout>
    )}
  />
);
LoginLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired
};
export default LoginLayoutRoute;
