import React from 'react';

import {Grid, Typography} from '@material-ui/core';

import Image from 'shared/components/image';
import Section from 'shared/components/section';

import {useStyles} from './styles';

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom>
              We Build. Digital. Shapers.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Learn Data Science, Artificial Intelligence, Web Development and
              User Experience Design by means of our pioneering Digital Shaper
              program that combines online learning, project work as well as
              community events at one of our locations - and completely free for
              everyone!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Image src="/images/hero.png" alt="TechLabs" />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default HomePage;
