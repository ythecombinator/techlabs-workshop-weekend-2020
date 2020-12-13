import React, {FC} from 'react';

import {Grid, Typography} from '@material-ui/core';
import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {}

const Footer: FC<Props> = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <footer {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container direction="column" alignItems="center">
          <Grid item justify="center">
            <Typography variant="overline" color="textSecondary" align="center">
              © 2020 TechLabs Limited. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
