const constants = {
  CLOSED: false,
  OPENED: true,
  EMPTY: 'EMPTY_LEVEL',
  READY: 'READY_LEVEL',
  SPLIT: 'SPLIT_LEVEL',
  SINGLE: 'SINGLE_LEVEL',
  MAX_LEVELS: 5,
  levelState: {
    needsSave: 'LEVEL_NEEDS_SAVE',
    saved: 'LEVEL_SAVED',
    active: 'LEVEL_ACTIVE',
    completed: 'LEVEL_COMPLETED'
  }
};

const routes = {
  ADD_CAMPAIGN: '/api/1/campaign/add'
};

export default {
  c: constants,
  r: routes
};
