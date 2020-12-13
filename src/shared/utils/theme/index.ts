import {createMuiTheme, responsiveFontSizes, Theme as MUITheme} from '@material-ui/core';

import palette from './palette';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: palette,
    typography: {
      fontFamily: "Lato",
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: "white",
        },
      },
    },
  })
);

export type Theme = MUITheme & {
  palette: typeof palette;
};

export default theme;
