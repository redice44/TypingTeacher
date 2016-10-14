import { ACCOUNT_REDUCER_INIT } from '../../util/constants/reducers';
import ACTIONS from '../../util/constants/actions/account';

const accountReducer = (state = ACCOUNT_REDUCER_INIT, action) => {

  switch (action.type) {
    case ACTIONS.modalUpdate:
      console.log(`Updating Sign In Modal: ${action.data.modalState}`);

      return Object.assign({}, state, {
        modalState: action.data.modalState
      });
    default:
      return state;
  }
};

export default accountReducer;
