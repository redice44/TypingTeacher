import campaignUtil from './constants';

const init = {
  levels: [
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
  ],
  modalState: campaignUtil.c.CLOSED,
  campaignList: []
};

export default init;
