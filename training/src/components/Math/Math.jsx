import { Component } from 'react';
import PropTypes from 'prop-types';
import math from './math';
import { ChildrenDemo } from '../ChildrenDemo';

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
      first, second, operator,
    } = this.props;
    const result = math.calculate(first, second, operator);
    const answer = ChildrenDemo.simpleStatements(first, second, operator, result);
    return answer;
  }
}

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string,
  // children: PropTypes.func,
};

Math.defaultProps = {
  operator: '+',
  // children: (9, 4, '*'),
};

export default Math;
