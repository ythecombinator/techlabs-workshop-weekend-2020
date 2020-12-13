import React, {FC} from 'react';

import {Grid} from '@material-ui/core';
import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useEvents} from 'modules/events/api';
import EventItem from 'modules/events/components/item';

import {useStyles} from './styles';

interface Props extends StyledProps {}

const EventsList: FC<Props> = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const { events } = useEvents();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item key={""} xs={12}>
            <EventItem event={event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EventsList;
