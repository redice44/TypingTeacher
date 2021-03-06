import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../reducers/campaign/actionTypes.js';
import {
  setLevel,
  pushLevelSplit,
  updateModal,
  updateLevelType,
  updateLevelState
} from '../reducers/campaign/actions.js';
import CreateCampaign from '../components/campaign/create';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    levels: state.campaign.levels,
    levelType: state.campaign.levelType,
    modalState: state.campaign.modalState
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
    updateModal: (state) => {
      dispatch(updateModal(state));
    },
    updateLevelType: (levelType) => {
      dispatch(updateLevelType(levelType));
    },
    updateLevelState: (i, levelState) => {
      dispatch(updateLevelState(i, levelState));
    }
  };
};

const CreateCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);

export default CreateCampaignContainer;
