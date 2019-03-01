import React, { Component } from 'react';
// import { TextFieldDemo } from './pages/TextFieldDemo';
// import { InputFieldDemo } from './pages/InputFieldDemo';
// import { BannerDemo } from './pages/BannerDemo';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';
// import { ChildrenDemo } from './pages/ChildrenDemo';
// import theme from './theme';
import { Trainee } from './pages/Trainee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // flag: true
    };
  }

  // componentWillMount() {
  //   clearInterval(this.time);
  // }

  // componentDidMount() {
  //   const that = this;
  //   this.time = setInterval(() => {
  //     const { flag } = that.state;
  //     this.value = (flag) ? this.setState({ flag: false })
  //       : this.setState({ flag: true });
  //   }, 3000);
  // }

  render() {
    return (
      <>
        {/* <BannerDemo />
        <TextFieldDemo {...this.state} /> */}
        {/* <InputFieldDemo /> */}
        <Trainee />
        {/* <MuiThemeProvider theme={theme}>
          <Typography>
            <ChildrenDemo />
            {this.renderCalculator(9, 3)}
          </Typography>
        </MuiThemeProvider> */}
      </>
      // this.state.flag?<TextFieldDemo />:<TextFieldDemo />
    );
  }
}

export default App;
