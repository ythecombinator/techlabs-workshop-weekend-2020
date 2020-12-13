import React from 'react';

import Section from 'shared/components/section';
import SectionHeader from 'shared/components/section-header';

import List from 'modules/events/components/list';

import {useStyles} from './styles';

const EventsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Events"
            titleProps={{
              variant: "h3",
            }}
          />
          <List />
        </div>
      </Section>
    </div>
  );
};

export default EventsPage;
