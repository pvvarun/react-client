
class ChildrenDemo {
  constructor() {
    this.operators = {
      '+': 'sum',
      '-': 'difference',
      '*': 'product',
      '/': 'division',
    };
  }

  simpleStatements = (first, second, operator, result) => (`${this.operators[operator]} of ${first} and ${second} is ${result}`);
}
export default new ChildrenDemo();
