import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../reducers/game/actionTypes.js';
import {
  playPhrase,
  playTime,
  updateResults,
  updatePhrase
} from '../reducers/game/actions.js';
import Game from '../components/game';
import gameUtil from '../../util/game';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    gameType: state.game.gameType,
    phrase: state.game.phrase
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    updateResults: (results) => {
      dispatch(updateResults(results));
    },
    playPhrase: () => {
      request
        .get(gameUtil.r.GET_PHRASE)
        .end((err, res) => {
          if (err) {
            return console.log(err);
          }
          const data = JSON.parse(res.text);
          console.log(`Receiving Phrase ${data.phrase}`);
          dispatch(updatePhrase(data.phrase));
          dispatch(playPhrase());
        });
    },
    playTime: () => {
      request
        .get(gameUtil.r.GET_PHRASE)
        .end((err, res) => {
          if (err) {
            return console.log(err);
          }
          const data = JSON.parse(res.text);
          console.log(`Receiving Phrase ${data.phrase}`);
          dispatch(updatePhrase(data.phrase));
          dispatch(playTime());
        });
    }
  };
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
