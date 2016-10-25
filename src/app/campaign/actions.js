import ACTION_TYPE from './actionTypes.js';

export const setLevel = (i, level) => {
  return {
    type: ACTION_TYPE.setLevel,
    data: {
      level: level,
      index: i
    }
  };
};

export const updateModal = (state) => {
  return {
    type: ACTION_TYPE.updateModal,
    data: {
      modalState: state
    }
  };
};

export const updateLevelType = (levelType) => {
  return {
    type: ACTION_TYPE.updateLevelType,
    data: {
      levelType: levelType
    }
  };
};

// TODO: Restrict by ID search Probably even an account thing.
export const setCampaignList = (campaignList) => {
  return {
    type: ACTION_TYPE.setCampaignList,
    data: {
      campaignList: campaignList
    }
  };
};

export const editLevel = (editLevel, part) => {
  return {
    type: ACTION_TYPE.editLevel,
    data: {
      editLevel: editLevel,
      part: part
    }
  };
};

export const addCampaign = (camp) => {
  return {
    type: ACTION_TYPE.addCampaign,
    data: {
      camp: camp
    }
  };
};
