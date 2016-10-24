import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../../../reducers/dashboard/actionTypes.js';
import {
  updateTab
} from '../../../reducers/dashboard/actions.js';
import Overview from '../../../contentPages/overview';

import util from '../../../../util/dashboard';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    player: state.account.player
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
      //dispatch(updateTab(i));
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
