import * as yup from 'yup';

const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email.')
    .max(100)
    .required('E-mail is required')
    .transform((mail: string) => mail.toLowerCase()),
  password: yup.string().required('Password is required').max(100),
  repeatPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export { createUserSchema };
