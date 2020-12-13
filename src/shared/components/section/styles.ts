import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    minHeight: "calc(100vh - 64px)",
    height: "100%",
    margin: theme.spacing(4, "auto"),
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  fullWidth: {
    maxWidth: "100%",
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));
