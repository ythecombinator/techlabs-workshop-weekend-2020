import {colors} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

import {Theme} from 'shared/utils/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3),
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    "& > * + *": {
      marginLeft: theme.spacing(1),
    },
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2),
  },
  likedButton: {
    color: colors.red[600],
  },
  shareButton: {
    marginLeft: theme.spacing(1),
  },
  details: {
    padding: theme.spacing(1, 3),
  },
}));
