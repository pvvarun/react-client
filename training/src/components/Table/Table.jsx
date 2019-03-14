import React from 'react';
import PropTypes, { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableSortLabel, Icon, IconButton } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  hover: {
    cursor: 'pointer',
  },
});

const getStripedStyle = (t) => {
  return { background: t % 2 !== 0 ? 'lightgray' : 'white' };
};

const getDateFormatted = date => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');

function SimpleTable(props) {
  const {
    classes,
    id,
    columns,
    data,
    onSelect,
    onSort,
    order,
    orderBy,
    actions,
    count,
    page,
    rowsPerPage,
    onChangePage,
  } = props;
  const TableHeading = columns.map(
    element => <TableCell align={element.align} hover onClick={() => onSort(element.field, order)}>
      {element.label}
      <TableSortLabel
        className={classes.hover}
        active={orderBy === element.field}
        direction={order}
      />
    </TableCell>
  );
  let content;
  let iterateValue = 0;
  let t = 0;
  const TableData = data.map((element) => {
    content = Object.keys(element);
    t = t + 1;
    return (
      <TableRow key={element.id} onClick={() => onSelect(element.id)} style={getStripedStyle(t)} hover>
        {
          columns.map((item) => {
            // console.log('--------item value-------', element);
            iterateValue = (iterateValue === (columns.length)) ? 1 : iterateValue + 1;
            const data1 = content[iterateValue];
            return (
              <>
                {
                  (data1 === 'createdAt')
                    ?
                    <>
                      <TableCell align={item.align}>{getDateFormatted(element[data1])}</TableCell>
                      <TableCell>
                        {actions.map((indexElement, index) => {
                          const { icon, handler } = indexElement;
                          return (
                            <div >
                              <IconButton onClick={(event) => handler(element, event)}
                              >
                                {icon}
                              </IconButton>
                            </div>
                          )
                        }
                        )
                        }
                      </TableCell>
                    </>
                    :
                    <TableCell align={item.align}>{element[data1]}</TableCell>
                }
              </>
            );
          },
          )}
      </TableRow>
    );
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow key={id}>
            {TableHeading}
          </TableRow>
        </TableHead>
        <TableBody className={classes.hover}>
          {TableData}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(object).isRequired,
  data: PropTypes.arrayOf(object).isRequired,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

SimpleTable.defaultProps = {
  orderBy: '',
  order: 'asc',
};
export default withStyles(styles)(SimpleTable);
