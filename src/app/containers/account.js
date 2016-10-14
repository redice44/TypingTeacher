import { connect } from 'react-redux';
import actionTypes from '../reducers/actionTypes/account';
import { updateModal } from '../reducers/actions/account';
import AccountButton from '../components/accountButton';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    modalState: state.account.modalState
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    updateModalState: (modalState) => {
      dispatch(updateModal(modalState));
    }
  };
};

const AccountButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);

export default AccountButtonContainer;
