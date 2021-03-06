import React from 'react';

import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';

import accountUtil from '../../constants';

export default class AccountModal extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      account: {
        username: '',
        password: '',
        email: '',
        isTeacher: false
      },
      errors: {
        username: '',
        password: '',
        email: ''
      }
    };

    this.updateAccount = this.updateAccount.bind(this);
    this.isTeacher = this.isTeacher.bind(this);
  }

  isTeacher(e, isTeacher) {
    let t = {};
    t.isTeacher = isTeacher;
    this.setState({
      account: Object.assign({}, this.state.account, t)
    });
  }

  updateAccount(e) {
    let acc = {};
    acc[e.target.name] = e.target.value;
    this.setState({
      account: Object.assign({}, this.state.account, acc)
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => {
          // Remove password from state
          let temp = {
            username: this.state.account.username,
            password: '',
            email: this.state.account.email
          };
          this.props.updateModalState(accountUtil.c.CLOSED);
          this.setState({
            account: Object.assign({}, temp)
          });
        }}
      />,
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          let errMessage = {
            username: '',
            password: '',
            email: ''
          };
          if (this.state.account.username.length < 1) {
            errMessage.username = accountUtil.e.USERNAME_EMPTY;
          }

          if (this.state.account.password.length < 1) {
            errMessage.password = accountUtil.e.PASSWORD_EMPTY;
          }
          if (this.props.currentTab === accountUtil.c.SIGN_IN) {
            // Sign in

            if (errMessage.username === '' && errMessage.password === '') {
              this.props.signinAccount(this.state.account);
              let temp = {
                username: '',
                password: '',
                email: ''
              };
              this.setState({
                account: Object.assign({}, temp)
              });
            }
            this.setState({
              errors: errMessage
            });
          } else {
            // Register Account
            if (this.state.account.email.length < 1 ||
                this.state.account.email.match(/.+@.+\..+\s*/g) == null) {
              errMessage.email = accountUtil.e.EMAIL_INVALID;
            }

            if (errMessage.username === '' &&
                errMessage.password === '' &&
                errMessage.email === '') {

              this.props.registerAccount(this.state.account);
              let temp = {
                username: '',
                password: '',
                email: '',
                isTeacher: false
              };
              this.setState({
                account: Object.assign({}, temp)
              });
            }
            this.setState({
              errors: errMessage
            });
          }
        }}
      />
    ];

    return (
      <Dialog
        title="Modal"
        modal={false}
        actions={actions}
        open={this.props.modalState}
        onRequestClose={() => this.props.updateModalState(accountUtil.c.CLOSED)}
      >
        <Tabs
          onChange={(tab) => this.props.updateCurrentTab(tab)}
          value={this.props.currentTab}
        >
        <Tab label="Sign In" value={0} />
          <Tab label="Register Account" value={1} />
        </Tabs>

        <TextField
          name="username"
          floatingLabelText="User Name"
          errorText={this.state.errors.username}
          value={this.state.account.username}
          onChange={this.updateAccount}
        /><br />
        <TextField
          name="password"
          floatingLabelText="Password"
          errorText={this.state.errors.password}
          value={this.state.account.password}
          onChange={this.updateAccount}
          type="password"
        />

        <SwipeableViews
          index={this.props.currentTab}
          onChangeIndex={(tab) => this.props.updateCurrentTab(tab)}
        >
          <div>
            <p>Forgot Password</p>
          </div>
          <div style={{overflow: 'hidden'}}>
            <TextField
              name="email"
              floatingLabelText="Email"
              errorText={this.state.errors.email}
              value={this.state.account.email}
              onChange={this.updateAccount}
            /><br />
            <Checkbox
              label="Teacher"
              onCheck={this.isTeacher}
            />
          </div>
        </SwipeableViews>
      </Dialog>
    );
  }
}

AccountModal.contextTypes = {
  router: React.PropTypes.object
};
