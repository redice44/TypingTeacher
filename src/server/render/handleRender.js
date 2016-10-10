import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

import appReducers from '../../app/reducers';
import App from '../../app/components/App';
import renderFullPage from './renderFullPage';
import { GAME_REDUCER_INIT } from '../../util/constants/reducers';

const handleRender = (req, res) => {
  const store = createStore(appReducers, { gameReducer: GAME_REDUCER_INIT });
  // ABSTRACT: Pull out the theme object for MUI
  const muiTheme = getMuiTheme({
    pallet: {
      accent1Color: deepOrange500,
    }
  }, {
    userAgent: req.headers['user-agent']
  });

  const html = renderToString(
    <MuiThemeProvider muiTheme = { muiTheme }>
      <Provider store = { store }>
        <App />
      </Provider>
    </MuiThemeProvider>
  );

  const initialState = store.getState();
  res.send(renderFullPage(html, initialState));
};

export default handleRender;
