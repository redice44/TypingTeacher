import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

import appReducers from '../../app/reducers';
import App from '../../app/app.js';
import renderFullPage from './renderFullPage';
// import routes from '../../app/routes/baseRoutes.js';
import routes from '../../app/routes/';

import Account from '../../database/account/model';
import Campaign from '../../database/campaign/model';

import { updatePlayer } from '../../app/user/actions';

import { routeLocationDidUpdate } from '../../app/history/actions';

const handleRender = (req, res, next) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log('Server Error', err);
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(appReducers);
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

      // Triggers any store related changes to location
      store.dispatch(routeLocationDidUpdate(renderProps.location));
      // If it's an authenticated route, attach the account to the store
      if (renderProps.location.pathname !== '/' && req.user) {
        const q = {
          _id: { $in: req.user.campaignList }
        };

        Campaign.find(q, (err, campList) => {
          if (err) {
            return console.log(err);
          }

          const player = {
            name: req.user.username,
            wpm: req.user.wpm,
            acc: req.user.acc,
            campaignList: campList
          };
          store.dispatch(updatePlayer(player));
          const initialState = store.getState();
          console.log('Initial Store State on Server', initialState);
          res.send(renderFullPage(html, initialState));
        });
      } else {
        const initialState = store.getState();
        console.log('Initial Store State on Server', initialState);
        res.send(renderFullPage(html, initialState));
      }
    } else {
      // TODO: Handle 404 better
      res.status(404).send('Not found');
    }
  });
};

export default handleRender;
