import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

import routes from '../../routes';

const { Content } = Layout;

const RoutesComponent = () => (
  <Content>
    <Switch>
      {routes.publicRoutes.map(route => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))}

      {routes.privateRoutes.map(route => (
        <PrivateRoute
          key={route.path}
          exact={!!route.exact}
          path={route.path}
          component={route.component}
        />
      ))}

      {routes.authRoutes.map(route => (
        <AuthRoute
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))}

      {/* {routes.errorRoutes.map(route => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))} */}
    </Switch>
  </Content>
);

export default RoutesComponent;
