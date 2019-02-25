class MathCalculation {
  constructor() {
    this.operators = {
      '+': this.addition,
      '-': this.subtraction,
      '*': this.multiplication,
      '/': this.division,
    };
  }

  calculate = (first, second, operator) => {
    console.log('--------------answer from object-------', this.operators[operator]);
    return (this.operators[operator]) ? this.operators[operator](first, second) : 'Not a Valid Operator';
  }

  addition = (first, second) => (first + second);

  subtraction = (first, second) => (first - second);

  multiplication = (first, second) => (first * second);

  division = (first, second) => ((second === 0) ? 'infinite' : (first / second));
}
export default new MathCalculation();
