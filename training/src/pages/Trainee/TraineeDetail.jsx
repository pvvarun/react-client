import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import * as moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import trainee from './data/trainee';
import { NotFound } from '../../components/NotFound';

const styles = () => ({
  card: {
    display: 'flex',
    margin: '2rem',
  },
  found: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '14px',
  },
  content: {
    flex: '1 0 auto',
  },
  thumbnail: {
    padding: '4rem',
    fontSize: '14px',
    color: 'white',
    backgroundColor: 'grey',
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const getDateFormatted = date => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');

function Traineefound(props) {
  const { classes, match } = props;
  // console.log('----params---', match.params.id);
  const found = trainee.find((element) => {
    if (element.id === match.params.id) {
      return (element);
    }
    return null;
  });
  if (found) {
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.thumbnail}>
            Thumbnail
          </div>
          <div className={classes.founds}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {found.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {getDateFormatted(found.createdAt)}
              </Typography>
              <Typography>
                {found.email}
              </Typography>
            </CardContent>
          </div>
        </Card>
        <div>
          <Link component={RouterLink} to="/trainee" underline="none">
            <Button variant="contained" className={classes.button}>
              Back
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return (<NotFound />);
}

Traineefound.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Traineefound);
