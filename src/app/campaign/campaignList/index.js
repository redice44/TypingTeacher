import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
} from '../actions.js';
import CampaignList from './campaignList';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    campaignList: state.campaign.campaignList
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
  };
};

const CampaignListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignList);

export default CampaignListContainer;
