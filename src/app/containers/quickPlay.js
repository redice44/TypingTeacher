import { connect } from 'react-redux';
import actionTypes from '../reducers/game/actionTypes.js';
import {
  playPhrase,
  playTime
} from '../reducers/game/actions.js';
import util from '../../util/game';
import QuickPlay from '../components/dashboard/quickPlay';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    gameType: state.game.gameType
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    playPhrase: () => {
      dispatch(playPhrase());
    },
    playTime: () => {
      dispatch(playTime());
    },
  };
};

const QuickPlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickPlay);

export default QuickPlayContainer;
