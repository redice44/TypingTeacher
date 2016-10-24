import ACTION_TYPE from './actionTypes.js';

export const routeLocationDidUpdate = (location) => {
  return {
    type: ACTION_TYPE.locationUpdate,
    data: {location},
  };
};
