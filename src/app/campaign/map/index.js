import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  editLevel,
  setLevel,
  updateLevelState
} from '../actions.js';
import CampaignMap from './map';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  console.log('map container setting props', state, ownProps);
  return {
    // Set props to send
    levels: state.campaign.levels,
    editLevelIndex: state.campaign.editLevelIndex,
    part: state.campaign.part
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    setLevel: (i, level) => {
      // TODO: Validate Levels

      dispatch(setLevel(i, level));
    },
    updateLevelState: (i, levelState) => {
      dispatch(updateLevelState(i, levelState));
    },
    editLevel: (i, part) => {
      dispatch(editLevel(i, part));
    }
  };
};

const CampaignMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignMap);

export default CampaignMapContainer;
