import { GAME_REDUCER_INIT } from '../../util/constants/reducers';
import { UPDATE_GAME_RESULT } from '../../util/constants/actions';

const gameReducer = (state = GAME_REDUCER_INIT, action) => {
  console.log(action);

  switch (action.type) {
    case UPDATE_GAME_RESULT:
      // TODO: Validate result
      return Object.assign({}, state, {
        result: action.payload.result
      });
    default:
      return state;
  }
};

export default gameReducer;
