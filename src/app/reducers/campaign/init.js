import campaignUtil from '../../../util/campaign';

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
  modalState: campaignUtil.c.CLOSED
};

export default init;
