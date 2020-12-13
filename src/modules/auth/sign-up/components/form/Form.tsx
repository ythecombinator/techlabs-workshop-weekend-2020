import React, {FC} from 'react';

import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {Formik, FormikProps} from 'formik';

import Link from 'shared/components/link';

import {signUpSchema, SignUpSchema, signUpSchemaInitialValues} from 'modules/auth/utils';

const SignUpForm: FC = () => {
  const onSubmit = (data: SignUpSchema) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={signUpSchemaInitialValues}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
      isInitialValid={false}
    >
      {(props: FormikProps<SignUpSchema>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isValid,
          isSubmitting,
        } = props;

        const disabled = !isValid || isSubmitting;

        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="firstName"
                id="firstName"
                type="firstName"
                label="First Name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                }
                error={errors.firstName && touched.firstName ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="lastName"
                id="lastName"
                type="lastName"
                label="Last Name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
                error={errors.lastName && touched.lastName ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && errors.email}
                error={errors.email && touched.email ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                error={errors.email && touched.email ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
                disabled={disabled}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                Have an account? <Link title="Sign in" href="/auth/sign-in" />
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
