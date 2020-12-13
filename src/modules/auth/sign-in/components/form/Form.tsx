import React, {FC} from 'react';

import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {Formik, FormikProps} from 'formik';

import Link from 'shared/components/link';

import {signInSchema, SignInSchema, signInSchemaInitialValues} from 'modules/auth/utils';

const SignInForm: FC = () => {
  const onSubmit = (data: SignInSchema) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={signInSchemaInitialValues}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
      isInitialValid={false}
    >
      {(props: FormikProps<SignInSchema>) => {
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
                Don't have an account?{" "}
                <Link title="Sign up" href="/auth/sign-up" />
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
