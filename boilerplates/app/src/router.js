import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';

const PublicRoutes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </ConnectedRouter>
);

export default PublicRoutes