import {makeStyles} from '@material-ui/core/styles';

import {Theme} from 'shared/utils/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: "bold",
  },
}));
