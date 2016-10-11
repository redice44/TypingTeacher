import React from 'react';
import request from 'superagent';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';

import AccountCreate from '../create';
import AccountSignIn from '../in';

export default class AccountModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      slideIndex: 0,
      title: 'Sign In',
      account: {}
    };

    // Bind this
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValues = this.getValues.bind(this);
  }

  handleTabChange(v) {
    this.setState({
      slideIndex: v,
      title: v === 0 ? 'Sign In' : 'Register Account',
      account: {}
    });
  }

  handleOpen() {
    this.setState({
      open: true,
      slideIndex: 0,
      account: {}
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSubmit() {
    console.log(this.state);
    this.handleClose();
    // TODO: Ensure user/pass is entered
    // TODO: Handle both actions better. Register needs to send email as well.
    request
      .post(this.state.slideIndex === 0 ? '/signin' : '/register')
      .send({
        username: this.state.account.username,
        password: this.state.account.password
      })
      .end((err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(JSON.parse(res.text));
      });
  }

  getValues(e) {
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
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ];

    return (
      <div>
        <IconButton tooltip="Account"
          onTouchTap={this.handleOpen}>
          <AccountIcon />
        </IconButton>
        <Dialog
          title={this.state.title}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <Tabs
            onChange={this.handleTabChange}
            value={this.state.slideIndex}
          >
          <Tab label="Sign In" value={0} />
            <Tab label="Register Account" value={1} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleTabChange}
          >
            <div>
              <AccountSignIn getValues={this.getValues} />
            </div>
            <div style={{overflow: 'hidden'}}>
              <AccountCreate getValues={this.getValues} />
            </div>
          </SwipeableViews>
        </Dialog>
      </div>
    );
  }

}
