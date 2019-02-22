import React from 'react';
import PropTypes from 'prop-types';
import { sport } from '../../configs/constants';

const SelectField = (props) => {
  // const sports = [];
  const { onChange } = props;
  const sports = sport.map(element => <option value={element.value}>{element.label}</option>);
  return (
    <>
      <select onChange={onChange}>
        {sports}
      </select>
    </>
  );
};
SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
