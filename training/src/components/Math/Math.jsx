import { Component } from 'react';
import PropTypes from 'prop-types';
import math from './math';

class Math extends Component {
  // constructor(props) {
  //   super(props);
  //   const {
  //     first, second, operator,
  //   } = props;
  //   // this.state = { flag: true };
  // }

  render() {
    const {
      first, second, operator, children,
    } = this.props;
    const result = math.calculate(first, second, operator);
    return (children) ? children(first, second, operator, result) : `${first} ${operator} ${second} = ${result}`;
  }
}

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string,
  children: PropTypes.func,
};

Math.defaultProps = {
  operator: '+',
  children: null,
};

export default Math;
