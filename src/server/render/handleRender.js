import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

import appReducers from '../../app/reducers';
import App from '../../app/components/App';
import Game from '../../app/components/Game';
import Dashboard from '../../app/components/Dashboard';
import renderFullPage from './renderFullPage';
// import routes from '../../app/routes/baseRoutes.js';
import routes from '../../app/routes/';

import accountInit from '../../app/reducers/account/init';
import gameInit from '../../app/reducers/game/init';

import { routeLocationDidUpdate } from '../../app/reducers/history/actions';

const handleRender = (req, res, next) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log('Server Error', err);
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(appReducers, {
        game: gameInit,
        account: accountInit
      });
      // Triggers any store related changes to location
      store.dispatch(routeLocationDidUpdate(renderProps.location));

      // TODO: Standardize MUI Theme
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
            <RouterContext {...renderProps} />
          </Provider>
        </MuiThemeProvider>
      );

      const initialState = store.getState();
      console.log(initialState);
      res.send(renderFullPage(html, initialState));
    } else {
      // TODO: Handle 404 better
      res.status(404).send('Not found');
    }
  });
};

export default handleRender;
