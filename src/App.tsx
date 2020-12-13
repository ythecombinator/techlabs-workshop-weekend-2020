import React, {FC} from 'react';

import {ThemeProvider} from '@material-ui/styles';
import {createBrowserHistory} from 'history';
import {renderRoutes} from 'react-router-config';
import {Router} from 'react-router-dom';

import 'shared/assets/index.css';
import routes from 'shared/utils/routes';
import theme from 'shared/utils/theme';

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
