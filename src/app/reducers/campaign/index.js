import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const accountReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.setLevels:
      console.log(`Setting levels`, action.data.levels);

      return updateState(state, {
        levels: action.data.levels
      });
      break;
    case ACTION_TYPE.pushLevel:
      console.log(`Adding level`, action.data.level);

      return updateState(state, {
        levels: state.levels.concat(action.data.level)
      });
      break;
    case ACTION_TYPE.updateModal:
      console.log(`Updating modal state: ${action.data.modalState}`);

      return updateState(state, {
        modalState: action.data.modalState
      });
      break;
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
