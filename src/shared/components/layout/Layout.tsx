import React, {FC, Suspense} from 'react';

import {LinearProgress} from '@material-ui/core';
import clsx from 'clsx';
import {renderRoutes} from 'react-router-config';

import Footer from 'shared/components/footer';
import Header from 'shared/components/header';
import {RouteConfigComponentProps} from 'shared/utils/routes';

import {useStyles} from './styles';

interface Props extends RouteConfigComponentProps {}

const Layout: FC<Props> = (props) => {
  const { route } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Header />
      <main>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
