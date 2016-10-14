import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const gameReducer = (state = reducersInit, action) => {
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
