import React from 'react';
import request from 'superagent';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';

import AccountCreate from '../create';

export default class AccountModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      account: {}
    };

    // Bind this
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValues = this.getValues.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true,
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
    // TODO: Encrypt pw
    request
      .post('/account/in')
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
          title="Sign In Account"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <AccountCreate getValues={this.getValues}/>
        </Dialog>
      </div>
    )
  }

}
