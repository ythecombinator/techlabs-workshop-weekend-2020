import React, {FC} from 'react';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import {Link as RouterLink} from 'react-router-dom';

import Label from 'shared/components/label';
import {StyledProps} from 'shared/models/styles';
import {format} from 'shared/utils/date';

import {Event} from 'modules/events/models';

import {useStyles} from './styles';

interface Props extends StyledProps {
  event: Event;
}

const EventItem: FC<Props> = (props) => {
  const { event, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            {format(event.date, "D MMM YYYY")}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/projects/1/overview"
            variant="h5"
          >
            {event.title}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography color="textSecondary" variant="subtitle2">
            {event.description}
          </Typography>
        </div>
        <div className={classes.tags}>
          {event.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
        <Divider />
        <div className={classes.details}>
          <Grid alignItems="center" container justify="space-between">
            <Grid item>
              <Button
                className={classes.learnMoreButton}
                component={Link}
                size="small"
                href={event.link}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventItem;
