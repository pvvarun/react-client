import React from 'react';
import style from './style'
const TextField = (props) => {
    const {err,onChange, ...rest} = props;
    // this.onChange = onChange;
    // this.onChange = onChange;
    const error = (err) ? style.error : {};
    return (
        <>
        <input type = "text" {...rest} style={{ ...style.basic, ...error }} onChange={onChange}/>
        {(err) ? <p style={{color: 'red'}} > {err}</p>:''}
        </>
    );
}
export default TextField;