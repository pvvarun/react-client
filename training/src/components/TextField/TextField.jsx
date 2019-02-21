import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const TextField = (props) => {
  const { err, ...rest } = props;
  const error = (err) ? style.error : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...style.basic, ...error }} />
      {(err) ? (
        <p style={{ color: 'red' }}>
          {' '}
          {err}
        </p>
      ) : ''}
    </>
  );
};
TextField.propTypes = {
  err: PropTypes.string.isRequired,
};
export default TextField;
