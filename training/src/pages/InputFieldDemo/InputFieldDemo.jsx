import { default as TextField } from '../../components/TextField';
import { default as SelectField } from '../../components/SelectField';
import React, { Component } from 'react';
class InputFieldDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sport: '',
            cricket: '',
            football: '',
        }
    }

    render() {
    console.log(this.state);
    return (
        <>
        <h3>Name</h3>
        <TextField error="" value={this.state.name} onChange={this.handleChange}/>
        <h3>Sports</h3>
        <SelectField onChange={this.handleChange}/>
        </>
    );
}

    handleChange = (event) => {
    this.setState({name: event.target.value});
    }
    
}
export default InputFieldDemo;

