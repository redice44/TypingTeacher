import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from './actionTypes.js';
import {
  playPhrase,
  playTime,
  updateResults,
  updatePhrase
} from './actions.js';
import Game from './game';
import gameUtil from './constants';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    gameType: state.game.gameType,
    phrase: state.game.phrase,
    timer: state.game.timer,
    game: state.game.game,
    difficulty: state.game.difficulty,
    username: state.account.player.name
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
          // TODO: Handle dynamically
          dispatch(setTimer(30));
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
