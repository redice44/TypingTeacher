import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';
import HISTORY_AT from '../history/actionTypes';

import util from '../../../util/dashboard'

const dashboardReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.updateTab:
      console.log(`Updating current dashboard tab`, action.data.index);

      return updateState(state, {
        currentTab: action.data.index
      });
    case HISTORY_AT.locationUpdate:
      switch (action.data.location.pathname) {
        case util.r.dashboard:
          console.log('from store: dashboard');
          return updateState(state, {
            currentTab: util.c.tabs.dashboard
          });
        case util.r.campaign:
          console.log('from store: campaign');
          return updateState(state, {
            currentTab: util.c.tabs.campaign
          });
        case util.r.stats:
          console.log('from store: stats');
          return updateState(state, {
            currentTab: util.c.tabs.stats
          });
        default:
          console.log(`from store: ${action.data.location.pathname}`);
          // Do nothing
      }
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default dashboardReducer;
