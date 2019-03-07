import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Trainee from './Trainee';
import trainee from './data/trainee';
import { SimpleTable } from '../../components/Table';

// import {}
const TraineeList = () => {
  const TraineeListArray = [];
  trainee.forEach(element => TraineeListArray.push(
    <Link component={RouterLink} to={`trainee/${element.id}`}>
      <li>{element.name}</li>
    </Link>,
  ));
  // console.log('------Trainee list-----------------', TraineeListArray);
  return (
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
          },
        ]}
      />
      {TraineeListArray}
    </>
  );
};
export default TraineeList;
