import { ACCOUNT_REDUCER_INIT } from './init';
import ACTION_TYPE from './actionTypes/account';

const accountReducer = (state = ACCOUNT_REDUCER_INIT, action) => {
  switch (action.type) {
    case ACTION_TYPE.modalUpdate:
      console.log(`Updating Sign In Modal: ${action.data.modalState}`);

      return Object.assign({}, state, {
        modalState: action.data.modalState
      });
    default:
      return state;
  }
};

export default accountReducer;
