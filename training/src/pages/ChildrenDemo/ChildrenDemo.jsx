import React, { Component } from 'react';
import { Math } from '../../components/Math';

class ChildrenDemo extends Component {
  constructor(props) {
    super(props);
    this.operators = {
      '+': 'sum',
      '-': 'difference',
      '*': 'product',
      '/': 'division',
    };
  }

  renderMath = (first, second, operator, result) => ((result === 'Not a Valid Operator') ? `${operator} is ${result}` : `${this.operators[operator]} of ${first} and ${second} is ${result}`);

  render() {
    return (
      <Math first={9} second={5} operator="*">
        {this.renderMath}
      </Math>
    );
  }
}
export default ChildrenDemo;
