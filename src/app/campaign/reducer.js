import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

import campaignUtil from './constants';

const accountReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.editLevel:
      console.log(`
=== ACTION editLevel===
  editLevelIndex: ${action.data.editLevel}
  part: ${action.data.part}
  state:`, state);

      return updateState(state, {
        editLevelIndex: action.data.editLevel,
        part: action.data.part
      });
    case ACTION_TYPE.setLevel:
      console.log(`
=== ACTION setLevel===
  level:`, action.data.level, `
  wpm: ${action.data.level.wpm}
  index: ${action.data.index}
  state:`, state.levels);
      let lv = state.levels.slice(0);
      console.log('level before', lv);
      lv[action.data.index] = action.data.level;
      console.log('level after', lv);
      if (action.data.index < lv.length - 1 &&
          lv[action.data.index + 1].state === campaignUtil.c.EMPTY) {
        console.log('updating next level with ready');
        lv[action.data.index + 1].state = campaignUtil.c.READY;
      }
      console.log('levels', lv);
      return updateState(state, {
        levels: lv
      });
    case ACTION_TYPE.updateModal:
      console.log(`Updating modal state: ${action.data.modalState}`);

      return updateState(state, {
        modalState: action.data.modalState
      });
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
    case ACTION_TYPE.addCampaign:
      console.log('Adding Campaign');

      return state;
    case ACTION_TYPE.isCreating:
      console.log(`Updating isCreating: ${action.data.isCreating}`);

      return updateState(state, {
        isCreating: action.data.isCreating
      });
    case ACTION_TYPE.resetLevel:
      console.log('Resetting Levels');
      const level = [
        {
          state: campaignUtil.c.READY,
          wpm: 0,
          acc: 0
        },
        {
          state: campaignUtil.c.EMPTY,
          wpm: 0,
          acc: 0
        },
        {
          state: campaignUtil.c.EMPTY,
          wpm: 0,
          acc: 0
        },
        {
          state: campaignUtil.c.EMPTY,
          wpm: 0,
          acc: 0
        },
        {
          state: campaignUtil.c.EMPTY,
          wpm: 0,
          acc: 0
        }
      ];

      return updateState(state, {
        levels: level
      });
    case ACTION_TYPE.selectCampaign:
      console.log(`Selecting Campaign ${action.data.camp._id}`, action.data.camp);

      return updateState(state, {
        selectedCampaign: action.data.camp
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
