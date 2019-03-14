import React, { Component } from 'react';
import { IconButton, Snackbar as SnackBar, SnackbarContent as SnackBarContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import CloseIcon from '@material-ui/icons/Close';

const iconsObject = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[500],
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
});

const SharedSnackBarContext = React.createContext();

class SharedSnackBarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
      message: '',
      iconSelector: '',
    };
  }

  openSnackBar = (iconSelector, message) => {
    this.setState({
      iconSelector,
      message,
      status: true,
    });
  };

  closeSnackBar = () => {
    this.setState({
      message: '',
      status: false,
    });
  };

  render() {
    const { children, classes } = this.props;
    const { message, status, iconSelector} = this.state;
    const Icon = iconsObject[iconSelector];
    return (
      <>
        <SharedSnackBarContext.Provider value={this.openSnackBar} >
          {children}
        </SharedSnackBarContext.Provider>
      <SnackBar open={status}>
      <SnackBarContent
        className={classes.success}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={6000}
        onClose={this.closeSnackBar}
        message={
          <>
            <span className={classes.message}>
              <Icon className={classNames(classes.icon, classes.iconVariant)} />
              {message}
            </span>
          </>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={this.closeSnackBar}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
      </SnackBar>
      </>
    );
  }
}

export default withStyles(styles)(SharedSnackBarProvider);
export const SharedSnackBarConsumer = SharedSnackBarContext.Consumer;
