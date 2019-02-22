import React, { Component } from 'react';
import { TextField } from '../../components/TextField';
import { SelectField } from '../../components/SelectField';
import { RadioGroup } from '../../components/RadioGroup';
import { object1 } from '../../configs/constants';

class InputFieldDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
    };
  }

  handleChange = field => ((event) => {
    this.setState({ [field]: event.target.value });
  })

  render() {
    const { name, sport } = this.state;
    const sportSelect = object1[sport];
    // console.log(this.state);
    return (
      <>
        <h4>Name</h4>
        <TextField error="" value={name} onChange={this.handleChange('name')} />
        <h4>Select the Sport you play?</h4>
        <SelectField error="" value={name} onChange={this.handleChange('sport')} />
        {sport && (
          <div>
            <h4>What do you do?</h4>
            <RadioGroup name="what" error="" value={name} options={sportSelect} onChange={this.handleChange(sport)} />
          </div>
        )}
      </>
    );
  }
}
export default InputFieldDemo;
