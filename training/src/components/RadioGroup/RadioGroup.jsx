import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  const sports = [];
  const {
    options,
    onChange,
  } = props;
  options.forEach(element => sports.push(
    <div>
      <input type="radio" name="sport" value={element.value} />
      {element.label}
    </div>,
  ));

  return (
    <>
      <div onChange={onChange}>
        {sports}
      </div>
    </>
  );
};
RadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RadioGroup;
