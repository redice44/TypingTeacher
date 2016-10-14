import reducersInit from './init';
import ACTION_TYPE from './actionTypes/game';

const gameReducer = (state = reducersInit.game, action) => {
  switch (action.type) {
    case ACTION_TYPE.updateResults:
      console.log(`Updating Game Results: ${action.data.results}`);
      // TODO: Validate result
      return Object.assign({}, state, {
        results: action.data.results
      });
    default:
      return state;
  }
};

export default gameReducer;
