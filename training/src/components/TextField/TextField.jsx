import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const TextField = (props) => {
  const { err, onChange, ...rest } = props;
  // this.onChange = onChange;
  // this.onChange = onChange;
  const error = (err) ? style.error : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...style.basic, ...error }} onChange={onChange} />
      {(err)
        ? <p style={{ color: 'red' }}>{err}</p>
        : '' }
    </>
  );
};

TextField.propTypes = {
  err: PropTypes.string.isRequired,
  rest: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.number.isRequired,
};

TextField.defaultProps = {
  rest: {},
};

export default TextField;
