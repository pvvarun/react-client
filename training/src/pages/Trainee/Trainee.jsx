import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { AddDialog } from "./components/AddDialog";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  root: {
    textAlign: "right"
  }
});

class OutlinedTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState(preState => ({ open: !preState.open }));
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    // console.log(open, 'inside trainee  open state');
    return (
      <>
        <div className={classes.root}>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            ADD TRAINEE
          </Button>
        </div>
        <AddDialog open={open} show={this.handleClickOpen} />
      </>
    );
  }
}

export default withStyles(styles)(OutlinedTextFields);
