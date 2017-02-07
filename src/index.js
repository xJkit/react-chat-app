// index prepares for state and everything; let routing in Router
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import socket from './socket';

// State Manager
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';
// ---

const store = configureStore();
socket(store);
const history = syncHistoryWithStore(browserHistory, store);

// Routings
import routes from 'routes';

// Custom CSS
import 'styles/styles.scss';
import 'rodal/lib/rodal.css';

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
