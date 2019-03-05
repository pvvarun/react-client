import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../components/Navbar';

const PrivateLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);
PrivateLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
export default PrivateLayout;
