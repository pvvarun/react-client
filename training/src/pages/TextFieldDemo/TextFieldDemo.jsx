import { default as TextField } from './../../components/TextField';
import React from 'react';
const TextFieldDemo = () => {
    return (
        <>
        <h4>This is a Disabled Input</h4>
        <TextField value = {"Disabled Input"} disabled={true}/>
        <h4>A Valid Input</h4>
        <TextField value = {"Accessible"}/>
        <h4>An Input With Errors</h4>
        <TextField value = {"101"} err="Could not be greater than"/>
        </>
        );
}
export default TextFieldDemo;