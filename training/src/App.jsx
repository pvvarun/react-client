import React, { Component } from 'react';
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
import { BannerDemo } from './pages/BannerDemo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flag: true };
  }

  componentWillMount() {
    clearInterval(this.time);
  }

  componentDidMount() {
    const that = this;
    this.time = setInterval(() => {
      const { flag } = that.state;
      this.value = (flag) ? this.setState({ flag: false })
        : this.setState({ flag: true });
    }, 3000);
  }

  render() {
    return (
      <>
        <BannerDemo />
        <TextFieldDemo {...this.state} />
      </>
      // this.state.flag?<TextFieldDemo />:<TextFieldDemo />
    );
  }
}

export default App;
