import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  gapBetweenButtonAndHeader: {
    marginTop: 15,
  },
  gapBetweenButtons: {
    // marginLeft: 15,
    paddingLeft: 25,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Trainee Portal
          </Typography>
          <Button color="inherit">TRAINEE</Button>
          <Button color="inherit">TEXTFIELD DEMO</Button>
          <Button color="inherit">INPUT DEMO</Button>
          <Button color="inherit">CHILDREN DEMO</Button>
          <Button color="inherit" className={classes.gapBetweenButtons}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Button variant="outlined" color="primary" className={classes.gapBetweenButtonAndHeader}>
          ADD TRAINEE
      </Button>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(NavBar);
