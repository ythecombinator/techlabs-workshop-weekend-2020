import {makeStyles} from '@material-ui/core/styles';

import {Theme} from 'shared/utils/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[200],
  },
  footerContainer: {
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    width: "80vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
}));
