import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import App from './components/App';
import appReducers from './reducers';

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
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
