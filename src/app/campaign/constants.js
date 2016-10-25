const constants = {
  CLOSED: false,
  OPENED: true,
  EMPTY: 'EMPTY_LEVEL',
  READY: 'READY_LEVEL',
  SPLIT: 'SPLIT_LEVEL',
  SINGLE: 'SINGLE_LEVEL',
  MAX_LEVELS: 5
};

const routes = {
  ADD_CAMPAIGN: '/api/1/campaign/add'
};

export default {
  c: constants,
  r: routes
};
