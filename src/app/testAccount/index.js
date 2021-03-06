import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../user/actionTypes.js';
import {
  signinAccount,
  updatePlayer,
  updateAuth
} from '../user/actions.js';
import {
  sendMessage,
  sendError,
  sendSuccess
} from '../notification/actions.js';
import accountUtil from '../user/constants';
import AccountButton from './testAccount';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    signin: () => {
      request
        .post(accountUtil.r.SIGN_IN)
        .send({
          username: 'test',
          password: 'test'
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
          dispatch(sendSuccess('Successfully Signed In'));
          dispatch(updatePlayer(player));
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
