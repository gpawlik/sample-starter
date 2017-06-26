import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import App from './containers/App/';
import Foo from './containers/Foo/';
import Bar from './containers/Bar/';

export default (
  <BrowserRouter>
    <div>
      <Route component={App} />
      <Switch>
        <Redirect exact from="/" to="/foo" />
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
      </Switch>
    </div>
  </BrowserRouter>
);
