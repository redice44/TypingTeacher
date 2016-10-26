import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  addCampaign,
  isCreating
} from '../actions.js';
import CampaignList from './campaignList';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  let c = [];
  if (state.account.player && state.account.player.campaigList) {
    c = state.account.player.campaignList;
  }
  return {
    // Set props to send
    campaignList: c,
    isCreating: state.campaign.isCreating
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    updateCreating: (cBool) => {
      dispatch(isCreating(cBool));
    }
  };
};

const CampaignListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignList);

export default CampaignListContainer;
