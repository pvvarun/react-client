import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  gapBetweenButtonAndHeader: {
    marginTop: 15
  },
  gapBetweenButtons: {
    // marginLeft: 15,
    paddingLeft: 25
  }
};

const handleLogout = () => {
  localStorage.clear();
};

function NavBar(props) {
  const { classes } = props;
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Trainee Portal
            </Typography>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/trainee"
            >
              <Button color="inherit">TRAINEE</Button>
            </Link>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/TextFieldDemo"
            >
              <Button color="inherit">TEXTFIELD DEMO</Button>
            </Link>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/InputDemo"
            >
              <Button color="inherit">INPUT DEMO</Button>
            </Link>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/ChildrenDemo"
            >
              <Button color="inherit">CHILDREN DEMO</Button>
            </Link>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/login"
            >
              <Button
                color="inherit"
                className={classes.gapBetweenButtons}
                onClick={handleLogout()}
              >
                LOGOUT
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return <Redirect to="/login" />;
}

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
};

export default withStyles(styles)(NavBar);
