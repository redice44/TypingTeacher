import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

import campaignUtil from './constants';

const accountReducer = (state = reducersInit, action) => {
  let lv;

  switch (action.type) {
    case ACTION_TYPE.editLevel:
      console.log(`Editing Level ${action.data.editLevel}`);

      return updateState(state, {
        editLevelIndex: action.data.editLevel
      });
    case ACTION_TYPE.setLevel:
      console.log(`Setting level`, action.data.level, action.data.index);
      lv = state.levels;
      lv[action.data.index] = action.data.level;
      return updateState(state, {
        levels: lv
      });
    case ACTION_TYPE.updateModal:
      console.log(`Updating modal state: ${action.data.modalState}`);

      return updateState(state, {
        modalState: action.data.modalState
      });
    case ACTION_TYPE.updateLevelState:
      console.log(`Updating level states`, action.data.index, action.data.levelState);
      lv = [].concat(state.levels);
      lv[action.data.index].state = action.data.levelState;
      if (action.data.index < lv.length - 1) {
        console.log('updating next level with ready');
        lv[action.data.index + 1].state = campaignUtil.c.READY;
      }
      console.log(lv);

      return updateState(state, {levels: lv});
    case ACTION_TYPE.updateLevelType:
      console.log(`Updating level type ${action.data.levelType}`);

      return updateState(state, {
        levelType: action.data.levelType
      });
    case ACTION_TYPE.setCampaignList:
      console.log('Updating Campaign List', action.data.campaignList);

      return updateState(state, {
        campaignList: action.data.campaignList
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
