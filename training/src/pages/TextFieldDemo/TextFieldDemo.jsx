import { default as TextField } from './../../components/TextField';
import React from 'react';
const TextFieldDemo = ( props ) => { 
    console.log("props inside textfieldDemo =>", props);
    if(props.flag) {
    return (
        <>
        <h4>This is a Disabled Input</h4>
        <TextField value = {"Disabled Input"} disabled={true}/>
        </>
    )
    }
    else {
        return (
            <>
        <h4>A Valid Input</h4>
        <TextField value = {"Accessible"}/>
        <h4>An Input With Errors</h4>
        <TextField value = {"101"} err="Could not be greater than"/>
        </>
        );
    }
}
export default TextFieldDemo;