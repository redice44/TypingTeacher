import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../reducers/campaign/actionTypes.js';
import {
  setLevels,
  pushLevel,
  updateModal
} from '../reducers/campaign/actions.js';
import CreateCampaign from '../components/campaign/create';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    levels: state.campaign.levels,
    modalState: state.campaign.modalState
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    setLevels: (levels) => {
      // TODO: Validate Levels
      dispatch(setLevels(levels));
    },
    pushLevel: (level) => {
      // TODO: Validate Level
      dispatch(pushLevel(level));
    },
    updateModal: (state) => {
      dispatch(updateModal(state));
    }
  };
};

const CreateCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);

export default CreateCampaignContainer;
