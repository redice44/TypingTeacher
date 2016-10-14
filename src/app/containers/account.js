import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../reducers/account/actionTypes.js';
import {
  registerAccount,
  signinAccount,
  updateModal,
  updateCurrentTab
} from '../reducers/account/actions.js';
import accountUtil from '../../util/account';
import AccountButton from '../components/accountButton';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    modalState: state.account.modalState,
    currentTab: state.account.currentTab
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    updateModalState: (modalState) => {
      dispatch(updateModal(modalState));
    },
    updateCurrentTab: (currentTab) => {
      dispatch(updateCurrentTab(currentTab));
    },
    signinAccount: (account) => {
      // TODO: Validate
      request
        .post(accountUtil.r.SIGN_IN)
        .send({
          username: account.username,
          password: account.password
        })
        .end((err, res) => {
          if (err) {
            // Unauthorized error happens here
            return console.log(err);
          }

          const data = JSON.parse(res.text);
          console.log('Sign In Response', data);
          dispatch(push('/dashboard'));
        });
    },
    registerAccount: (account) => {
      // TODO: Validate
      request
        .post(accountUtil.r.REGISTER)
        .send({
          username: account.username,
          password: account.password,
          email: account.email
        })
        .end((err, res) => {
          if (err) {
            // Unauthorized error happens here
            return console.log(err);
          }

          const data = JSON.parse(res.text);
          console.log('Register Response', data);
          dispatch(push('/dashboard'));
        });
    }
  };
};

const AccountButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);

export default AccountButtonContainer;
