import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

import appReducers from '../../app/reducers';
import App from '../../app/components/App';
import Game from '../../app/components/Game';
import Dashboard from '../../app/components/Dashboard';
import renderFullPage from './renderFullPage';
import { GAME_REDUCER_INIT } from '../../util/constants/reducers';
import routes from '../routes';

const handleRender = (req, res) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log("Server Error");
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      console.log(renderProps.location.pathname);
      const store = createStore(appReducers, {gameReducer: GAME_REDUCER_INIT});
      // TODO: Standardize MUI Theme
      const muiTheme = getMuiTheme({
        pallet: {
          accent1Color: deepOrange500,
        }
      }, {
        userAgent: req.headers['user-agent']
      });

      // Needed for onTouchTap
      // http://stackoverflow.com/a/34015469/988941
      injectTapEventPlugin();

      const html = renderToString(
        <MuiThemeProvider muiTheme = { muiTheme }>
          <Provider store = { store }>
            <RouterContext {...renderProps} />
          </Provider>
        </MuiThemeProvider>
      );

      const initialState = store.getState();
      res.send(renderFullPage(html, initialState));
    } else {
      res.status(404).send('Not found');
    }
  });
};

export default handleRender;
