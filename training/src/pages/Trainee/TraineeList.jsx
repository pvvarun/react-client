import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Trainee from './Trainee';
import trainee from './data/trainee';
import { SimpleTable } from '../../components/Table';

class TraineeList extends React.Component {

  constructor( props ) {
    super(props);
    this.state = {
      orderBy: '',
      order: 'desc',
    }
  }

  handleSelect = (id) => {
    this.props.history.push(`/trainee/${id}`);
    console.log('-------------------props value------------------', this.props, id);
  };

  handleSort = (fieldName, order) => {
    console.log('-------------------fieldName is------------------', fieldName);
    order = (order === 'desc') ? 'asc' : 'desc';
    this.setState({ order, orderBy:fieldName});
  }

  render() {
    const { order, orderBy} = this.state;
    const TraineeListArray = [];
    trainee.forEach(element => TraineeListArray.push(
      <Link component={RouterLink} to={`trainee/${element.id}`}>
        <li>{element.name}</li>
      </Link>,
    ));
    return(
    <>
      <Trainee />
      <SimpleTable
        id="id"
        data={trainee}
        columns={[
          {
            field: 'name',
            label: 'Name',
            align: 'center',
          },
          {
            field: 'email',
            label: 'Email Address',
            format: value => value && value.toUpperCase(),
          },
          {
            field: 'createdAt',
            label: 'Date',
            align: 'right',
            format: 'getFormattedDate',
          },
        ]}
        orderBy={orderBy}
        order={order}
        onSort={this.handleSort}
        onSelect={this.handleSelect}
      />
      {TraineeListArray}
    </>
  );
  }
};

export default TraineeList;
