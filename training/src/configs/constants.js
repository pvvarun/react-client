import * as yup from 'yup';

export const PUBLIC_IMAGE_FOLDER = '/images';
export const DEFAULT_BANNER_IMAGE = '/banners/default.png';
export const sport = [
  { label: 'Select', value: '' },
  { label: 'Cricket', value: 'cricket' },
  { label: 'Football', value: 'football' },
];
export const object1 = {
  cricket: [{ label: 'Batsman', value: 'batsman' }, { label: 'Bowler', value: 'bowler' }, { label: 'WicketKeeper', value: 'wicketKeeper' }, { label: 'AllRounder', value: 'allrounder' }],
  football: [{ label: 'Striker', value: 'striker' }, { label: 'Defender', value: 'defender' }, { label: 'GoalKeeper', value: 'goalkeeper' }],
};

export const AddDialogSchema = yup.object({
  name: yup.string().min(3).required().label('Name'),
  emailAddress: yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@successive.tech$/, 'EmailAddress must be a valid email.')
    .required('Email Address is required'),
  password: yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/, 'Password must be minimum of 8 characters and contains at least one Uppercase letter, lowercase letter and one digit.')
    .required('Password is required.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match'),
});
export const TraineeLoginSchema = yup.object({
  emailAddress: yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@successive.tech$/, 'EmailAddress must be a valid email.')
    .required('Email Address is required'),
  password: yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/, 'Password must be minimum of 8 characters and contains at least one Uppercase letter, lowercase letter and one digit.')
    .required('Password is required.'),
});
