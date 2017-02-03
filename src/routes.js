import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Load Container Pages
import App from 'containers/App';
import Welcome from 'containers/Welcome';
import PageA from 'containers/PageA';
import NotFound from 'containers/NotFound';

// Root Path
const ROOT = '/';

// routes
const routes = (
  <Route path={ROOT} component={App}>
    <IndexRoute component={Welcome} />
    <Route path="a" component={PageA} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
