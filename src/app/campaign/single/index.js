import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
} from '../actions.js';
import {
  setGame
} from '../../game/actions';
import SingleCampaign from './singleCampaign';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    campaign: ownProps.campaign
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    setGame: (game) => {
      dispatch(setGame(game));
      dispatch(push('/'));
    }
  };
};

const SingleCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampaign);

export default SingleCampaignContainer;
