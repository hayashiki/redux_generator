import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import Item from './components/organisms/item';

const PublicRoutes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/items" component={Item} />
    </Switch>
  </ConnectedRouter>
);

export default PublicRoutes