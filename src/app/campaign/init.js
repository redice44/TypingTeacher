import campaignUtil from './constants';

const init = {
  levels: [
    {
      state: campaignUtil.c.READY,
      wpm: 0,
      acc: 0,
      difficulty: 2,
      timer: false
    },
    {
      state: campaignUtil.c.EMPTY,
      wpm: 0,
      acc: 0,
      difficulty: 2,
      timer: false
    },
    {
      state: campaignUtil.c.EMPTY,
      wpm: 0,
      acc: 0,
      difficulty: 2,
      timer: false
    },
    {
      state: campaignUtil.c.EMPTY,
      wpm: 0,
      acc: 0,
      difficulty: 2,
      timer: false
    },
    {
      state: campaignUtil.c.EMPTY,
      wpm: 0,
      acc: 0,
      difficulty: 2,
      timer: false
    }
  ],
  modalState: campaignUtil.c.CLOSED,
  campaignList: [],
  editLevelIndex: -1,
  part: 0,
  isCreating: false,
  selectedCampaign: {}
};

export default init;
