import React from 'react';

import Section from 'shared/components/section';
import SectionHeader from 'shared/components/section-header';

import Form from 'modules/auth/sign-up/components/form';

import {useStyles} from './styles';

const SignUpPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign up"
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

export default SignUpPage;
