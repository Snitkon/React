import { InferType, boolean, mixed, number, object, ref, string } from 'yup';
import { SIZE, TYPES } from '../assets/const/img';
import nameOfCountry from './nameOfCountry';

const formChart = object({
  name: string()
    .required('Name is required')
    .matches(/^[A-Z]/, { message: 'First letter must be in uppercase' }),
  age: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Age is required')
    .positive('Age must be positive'),
  country: string()
    .transform((value) => (value === '' ? undefined : value))
    .required('Country is required')
    .oneOf(nameOfCountry(), 'Country must be a valid country'),
  email: string()
    .required('Email is required')
    .email('Email must be a valid email'),
  gender: string().required('Gender is required'),
  image: mixed<FileList>()
    .transform((value: FileList) => (value[0] ? value : undefined))
    .required('Image is required')
    .test('File type', 'Image must be .png or .jpeg', (value: FileList) =>
      TYPES.includes(value[0]?.type)
    )
    .test(
      'File size',
      'Image size must be less than 500kb',
      (value: FileList) => value[0]?.size < SIZE
    ),
  password: string()
    .required('Password is required')
    .matches(/[a-z]/, {
      message: 'Password must contain at least 1 lower-case letter',
    })
    .matches(/[A-Z]/, {
      message: 'Password must contain at least 1 upper-case letter',
    })
    .matches(/\d/, 'Password must contain at least 1 number')
    .matches(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~ \\-]/, {
      message: 'Password must contain at least 1 special character',
    }),
  confirmPassword: string()
    .required('Password is required')
    .matches(/[a-z]/, {
      message: 'Password must contain at least 1 lower-case letter',
    })
    .matches(/[A-Z]/, {
      message: 'Password must contain at least 1 upper-case letter',
    })
    .matches(/\d/, 'Password must contain at least 1 number')
    .matches(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~ \\-]/, {
      message: 'Password must contain at least 1 special character',
    })
    .oneOf([ref('password')], 'Passwords must match'),
  agreement: boolean()
    .defined()
    .isTrue('Terms and Conditions must be accepted'),
});

export type FormChart = InferType<typeof formChart>;
export default formChart;
