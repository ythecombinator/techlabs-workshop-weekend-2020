import React from 'react';

import Section from 'shared/components/section';
import SectionHeader from 'shared/components/section-header';

import Form from 'modules/auth/sign-in/components/form';

import {useStyles} from './styles';

const SignInPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign in"
            titleProps={{
              variant: "h3",
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default SignInPage;
