import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

import util from '../../../util/game';

const gameReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.updateResults:
      console.log(`Updating Game Results: ${action.data.results}`);
      // TODO: Validate result
      return Object.assign({}, state, {
        results: action.data.results
      });
    case ACTION_TYPE.playPhrase:
      console.log(`Initiating Play Phrase Mode`);

      return Object.assign({}, state, {
        gameType: util.PHRASE
      });
      break;
    case ACTION_TYPE.playTime:
      console.log(`Initiating Play Time Trial Mode`);

      return Object.assign({}, state, {
        gameType: util.TIME
      });
      break;
    default:
      return state;
  }
};

export default gameReducer;
