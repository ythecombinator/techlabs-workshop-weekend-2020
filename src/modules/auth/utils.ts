import * as yup from 'yup';

import {AuthConstraints, emailShape, passwordShape} from 'shared/utils/validation';

// Sign Up

export const signUpSchemaInitialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export const signUpSchema = yup.object().shape({
  email: emailShape,
  password: passwordShape,
  firstName: yup.string().required(AuthConstraints.required),
  lastName: yup.string().required(AuthConstraints.required),
});

export type SignUpSchema = typeof signUpSchemaInitialValues;

// Sign In

export const signInSchemaInitialValues = {
  email: "",
  password: "",
};

export const signInSchema = yup.object().shape({
  email: emailShape,
  password: passwordShape,
});

export type SignInSchema = typeof signInSchemaInitialValues;
