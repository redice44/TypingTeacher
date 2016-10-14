import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';

import COMMON from '../../../../util/constants/common.js';

export default class AccountModal extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      account: {
        username: '',
        password: '',
        email: ''
      }
    };

    this.updateAccount = this.updateAccount.bind(this);
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
        onTouchTap={() => this.props.updateModalState(COMMON.CLOSED)}
      />,
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          this.props.updateModalState(COMMON.CLOSED);
          this.props.submitAccount(this.state.account);
        }}
      />
    ];

    return (
      <Dialog
        title="Modal"
        modal={false}
        actions={actions}
        open={this.props.modalState}
        onRequestClose={() => this.props.updateModalState(COMMON.CLOSED)}
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
          value={this.state.account.username}
          onChange={this.updateAccount}
        /><br />
        <TextField
          name="password"
          floatingLabelText="Password"
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
              value={this.state.account.email}
              onChange={this.updateAccount}
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
