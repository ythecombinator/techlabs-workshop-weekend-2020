import React, {lazy, useContext} from 'react';

import {__RouterContext} from 'react-router';
import {RouteConfig} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import Layout from 'shared/components/layout';

export interface RouteConfigComponentProps {
  route: {
    routes: RouteConfig[];
  };
}

export const useRouter = () => useContext(__RouterContext);

export type Router = ReturnType<typeof useRouter>;

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/auth",
    component: Layout,
    routes: [
      {
        path: "/auth/sign-in",
        exact: true,
        component: lazy(() => import("modules/auth/sign-in")),
      },
      {
        path: "/auth/sign-up",
        exact: true,
        component: lazy(() => import("modules/auth/sign-up")),
      },
      {
        component: () => <Redirect to="/error/404" />,
      },
    ],
  },
  {
    route: "*",
    component: Layout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: lazy(() => import("modules/home")),
      },
      {
        path: "/events",
        exact: true,
        component: lazy(() => import("modules/events")),
      },
      {
        component: () => <Redirect to="/error/404" />,
      },
    ],
  },
] as RouteConfig[];

export default routes;
