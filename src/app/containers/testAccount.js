import request from 'superagent';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import actionTypes from '../reducers/account/actionTypes.js';
import {
  signinAccount,
  updateAuth
} from '../reducers/account/actions.js';
import {
  sendMessage,
  sendError,
  sendSuccess
} from '../reducers/notification/actions.js';
import accountUtil from '../../util/account';
import AccountButton from '../components/header/testAccount';

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
          console.log('Sign In Response', data);
          dispatch(updateAuth(data.authenticated));
          dispatch(sendSuccess('Successfully Signed In'));
          dispatch(push('/campaign/create'));
        });
    }
  };
};

const AccountButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);

export default AccountButtonContainer;
