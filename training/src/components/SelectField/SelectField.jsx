import React from 'react';
const SelectField = (props) => {
    const {error, value, options, onChange, defaultText} = props;
    return (
        <>
            <select>
                <option value="select">select</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football onChange={onChange} </option>
            </select>
        </>
    );
}
export default SelectField;