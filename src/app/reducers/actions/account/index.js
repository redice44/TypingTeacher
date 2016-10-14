import ACTION_TYPE from '../../actionTypes/account';

export const updateModal = (state) => {
  return {
    type: ACTION_TYPE.modalUpdate,
    data: {
      modalState: state
    }
  };
};
