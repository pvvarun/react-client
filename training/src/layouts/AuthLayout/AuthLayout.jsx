import React from 'react';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => (
  <div>{children}</div>
);
AuthLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthLayout;
