import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../../../reducers/dashboard/actionTypes.js';
import {
  updateTab
} from '../../../reducers/dashboard/actions.js';
import Dashboard from '../../../contentPages/dashboard';

import util from '../../../../util/dashboard';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    currentTab: state.dashboard.currentTab
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    updateTab: (i) => {
      switch (i) {
        case util.c.tabs.dashboard:
          dispatch(push(util.r.dashboard));
          break;
        case util.c.tabs.campaign:
          dispatch(push(util.r.campaign));
          break;
        case util.c.tabs.stats:
          dispatch(push(util.r.stats));
          break;
        default:
          // Do nothing
          console.log(`Unknown Tab ${i}`);
      }
      //dispatch(updateTab(i));
    },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
