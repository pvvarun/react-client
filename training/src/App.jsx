import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TextFieldDemo } from './pages/TextFieldDemo';
import { InputFieldDemo } from './pages/InputFieldDemo';
import { BannerDemo } from './pages/BannerDemo';
import { ChildrenDemo } from './pages/ChildrenDemo';
import theme from './theme';
import { TraineeList, TraineeDetail, Trainee } from './pages';
import { Login } from './pages/Login';
import { NotFound } from './components/NotFound';
import { AuthRoute, PrivateRoute } from './routes';
import { SharedSnackBarProvider } from './contexts';
// import TraineeDetail from './pages/Trainee/TraineeDetail';
// import TraineeList from './pages/Trainee/TraineeList';

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
      // <Router>
      //   <TraineeList />
      // </Router>
      <Typography>
        <SharedSnackBarProvider>
        <MuiThemeProvider>
          <Router>
            <Switch>
              <AuthRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/trainee" component={TraineeList} />
              <PrivateRoute exact path="/" component={Trainee} />
              <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
              <PrivateRoute exact path="/TextFieldDemo" component={TextFieldDemo} />
              <PrivateRoute exact path="/BannerDemo" component={BannerDemo} />
              <PrivateRoute exact path="/InputDemo" component={InputFieldDemo} />
              <PrivateRoute exact path="/ChildrenDemo" theme={theme} component={ChildrenDemo} />
              <PrivateRoute component={NotFound} />
            </Switch>
          </Router>
        </MuiThemeProvider>
        </SharedSnackBarProvider>
      </Typography>

    );
  }
}

export default App;
