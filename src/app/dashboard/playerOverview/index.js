import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  updateTab
} from '../actions.js';
import Overview from './overview';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    user: state.account.player
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
