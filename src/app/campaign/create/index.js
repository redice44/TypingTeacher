import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  addCampaign
} from '../actions.js';
import CreateCampaign from './CreateCampaign';

import util from '../constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    campaign: state.campaign.levels
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    addCampaign: (camp) => {
      // create campaign on server
      request
        .post(util.r.ADD_CAMPAIGN)
        .send({campaign: camp})
        .end((err, res) => {
          if (err) {
            return console.log(err);
          }

          const data = JSON.parse(res.text);
          console.log(data);
        });
      // Store doesn't really need to know about a new campaign
      // dispatch(addCampaign(camp));
    }
  };
};

const CreateCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);

export default CreateCampaignContainer;
