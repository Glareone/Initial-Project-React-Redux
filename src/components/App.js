import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Topics from './Topics';
import Users from './Users';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </div>
);

export default hot(module)(App);
