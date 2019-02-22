import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '../../components/TextField';

const TextFieldDemo = (props) => {
  const { flag } = props;
  if (flag) {
    return (
      <>
        <h4>This is a Disabled Input</h4>
        <TextField value="Disabled Input" disabled />
      </>
    );
  }

  return (
    <>
      <h4>A Valid Input</h4>
      <TextField value="Accessible" />
      <h4>An Input With Errors</h4>
      <TextField value="101" err="Could not be greater than" />
    </>
  );
};
TextFieldDemo.propTypes = {
  flag: PropTypes.bool.isRequired,
};

export default TextFieldDemo;
