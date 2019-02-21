import React from 'react';
const RadioGroup = (props) => {
    const {error, value, options, onChange} = props;
    return (
        <>
        <input type = "text" onChange={onChange}/>
        </>
    );
}
export default RadioGroup;
