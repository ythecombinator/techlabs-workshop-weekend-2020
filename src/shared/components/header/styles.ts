import {makeStyles} from '@material-ui/core/styles';

import {Theme} from 'shared/utils/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.grey[200],
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
}));
