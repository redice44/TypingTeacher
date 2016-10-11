import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import App from './components/App';
import Game from './components/game';
import Dashboard from './components/dashboard';
import appReducers from './reducers';

import routes from '../server/routes';

const initialState = window.__INITIAL_STATE__;
const store = createStore(appReducers, initialState);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  pallet: {
    accent1Color: deepOrange500,
  }
});

render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store = { store }>
      <Router routes = { routes } history = { browserHistory }/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);