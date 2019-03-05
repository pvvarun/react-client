import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { AddDialogSchema } from '../../../../configs/constants';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class AddDialog extends Component {
  constructor(props) {
    super(props);
    // console.log('props ', props);
    // const { show } = this.props;
    this.state = {
      name: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      errors: {},
      touch: {},
    };
  }

  handleBlur = field => () => {
    const { touch } = this.state;
    touch[field] = true;
    this.setState({
      touch,
    }, () => this.handleValidate());
  }

  handleValidate = () => {
    const parsedErrors = {};
    const {
      name,
      emailAddress,
      password,
      confirmPassword,
    } = this.state;

    AddDialogSchema.validate({
      name,
      emailAddress,
      password,
      confirmPassword,
    }, { abortEarly: false })
      .then(() => {
        this.setState({
          errors: parsedErrors,
        });
      })
      .catch((errors) => {
        // console.log('forEach for catch errors ', errors);
        // const { inner = [] } = errors;
        // if (inner.length) {
        //   parsedErrors[inner[0].path] = inner[0].message;
        // }
        errors.inner.forEach((error) => {
          // console.log('forEach for catch errors.inner field ', error);
          parsedErrors[error.path] = error.message;
        });
        // console.log(parsedErrors, 'parsed error value is ');
        this.setState({
          errors: parsedErrors,
        });
      });
  }

  getError = (field) => {
    const { errors, touch } = this.state;
    if (!touch[field]) {
      return null;
    }
    return errors[field] || '';
  }

  hasErrors = () => {
    const { errors } = this.state;
    return Object.keys(errors).length !== 0;
  }

  isTouched = () => {
    const { touch } = this.state;
    return Object.keys(touch).length !== 0;
  }


  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { show, open, classes } = this.props;
    const { errors } = this.state;
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          ADD TRAINEE
        </Button> */}
        <Dialog
          open={open}
          onClose={show}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Trainee details
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    helperText={(this.getError('name')) ? errors.name : ''}
                    onChange={this.handleChange('name')}
                    onBlur={this.handleBlur('name')}
                    error={this.getError('name')}
                    required
                    id="outlined-name"
                    label="Name"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <People />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    helperText={(this.getError('emailAddress')) ? errors.emailAddress : ''}
                    onChange={this.handleChange('emailAddress')}
                    onBlur={this.handleBlur('emailAddress')}
                    error={this.getError('emailAddress')}
                    id="outlined-uncontrolled"
                    label="Email Address"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="password"
                    fullWidth
                    helperText={(this.getError('password')) ? errors.password : ''}
                    onChange={this.handleChange('password')}
                    onBlur={this.handleBlur('password')}
                    error={this.getError('password')}
                    id="outlined-required"
                    label="Password"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VisibilityOff />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="password"
                    fullWidth
                    helperText={(this.getError('confirmPassword')) ? errors.confirmPassword : ''}
                    onChange={this.handleChange('confirmPassword')}
                    onBlur={this.handleBlur('confirmPassword')}
                    error={this.getError('confirmPassword')}
                    id="outlined-error"
                    label="Confirm Password"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VisibilityOff />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={show} color="primary">
              CANCEL
            </Button>
            <Button
              onClick={show}
              color="primary"
              variant="outlined"
              disabled={(this.hasErrors() || !this.isTouched())}
            >
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
AddDialog.propTypes = {
  show: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AddDialog);
