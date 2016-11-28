import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  addCampaign,
  isCreating,
  resetLevel,
  editLevel
} from '../actions.js';
import {
  updatePlayer
} from '../../user/actions';
import CreateCampaign from './createCampaign';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    player: state.account.player,
    levels: state.campaign.levels,
    isCreating: state.campaign.isCreating
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    addCampaign: (camp, user) => {
      // create campaign on server
      request
        .post(util.r.ADD_CAMPAIGN)
        .send({
          campaign: camp,
          username: user
        })
        .end((err, res) => {
          if (err) {
            return console.log(err);
          }

          const data = JSON.parse(res.text);
          dispatch(updatePlayer(data.user));
        });
    },
    updateCreating: (cBool) => {
      dispatch(isCreating(cBool));
    },
    resetLevel: () => {
      dispatch(resetLevel());
    },
    editLevel: (i, part) => {
      dispatch(editLevel(i, part));
    },
    updateUser: (player) => {
      dispatch(updatePlayer(player));
    }
  };
};

const CreateCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);

export default CreateCampaignContainer;
