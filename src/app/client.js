import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app.js';
import appReducers from './reducers.js';

import routes from './routes';
// import { routeLocationDidUpdate } from './reducers/history/actions';

const initialState = window.__INITIAL_STATE__;
const middleware = routerMiddleware(browserHistory);
const store = createStore(appReducers, initialState, applyMiddleware(middleware));
const history = syncHistoryWithStore(browserHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

browserHistory.listen(() => store.dispatch(routeLocationDidUpdate(location)));

render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store = { store }>
      <Router routes = { routes } history = { history }/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
