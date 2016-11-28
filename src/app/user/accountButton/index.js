import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../actionTypes.js';
import {
  registerAccount,
  signinAccount,
  signoutAccount,
  updateModal,
  updateCurrentTab,
  updatePlayer,
  updateAuth
} from '../actions.js';
import {
  sendMessage,
  sendError,
  sendSuccess
} from '../../notification/actions.js';
import accountUtil from '../constants';
import AccountButton from './accountButton.js';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    modalState: state.account.modalState,
    currentTab: state.account.currentTab,
    auth: state.account.auth,
    player: state.account.player
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
    signoutAccount: () => {
      request
        .get(accountUtil.r.SIGN_OUT)
        .end((err, res) => {
          if (err) {
            return console.log(err);
          }

          const data = JSON.parse(res.text);
          console.log('Sign Out Response', data);
          dispatch(updateAuth(data.authenticated));
          dispatch(updatePlayer({}));
          dispatch(sendSuccess('Successfully Signed Out'));
          dispatch(push('/'));
        });
    },
    signinAccount: (account) => {
      request
        .post(accountUtil.r.SIGN_IN)
        .send({
          username: account.username,
          password: account.password
        })
        .end((err, res) => {
          if (err) {
            if (err.status === 401) {
              // Unauthorized
              return dispatch(sendError('Incorrect Username or Password'));
            }
            return dispatch(sendError(err.response.text));
          }

          const data = JSON.parse(res.text);
          const player = data.user;
          console.log('Sign In Response', data);
          dispatch(updateAuth(data.authenticated));
          dispatch(updateModal(accountUtil.c.CLOSED));
          dispatch(updatePlayer(player));
          dispatch(sendSuccess('Successfully Signed In'));
          dispatch(push('/dashboard'));
        });
    },
    registerAccount: (account) => {
      request
        .post(accountUtil.r.REGISTER)
        .send({
          username: account.username,
          password: account.password,
          email: account.email,
          isTeacher: account.isTeacher
        })
        .end((err, res) => {
          if (err) {
            console.log(err);
            return dispatch(sendError(err.response.text));
          }

          const data = JSON.parse(res.text);
          const player = data.user;
          console.log('Register Response', data);
          dispatch(updateAuth(data.authenticated));
          dispatch(updateModal(accountUtil.c.CLOSED));
          dispatch(updatePlayer(player));
          dispatch(sendSuccess('Successfully Registered Account'));
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
