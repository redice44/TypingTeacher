import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import campaignUtil from '../../../../../../util/campaign';

export default class AccountModal extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      level: {
        wpm: '',
        acc: ''
      }
    };

    this.updateRequirements = this.updateRequirements.bind(this);
  }

  updateRequirements(e) {
    let lv = {};
    lv[e.target.name] = e.target.value;
    this.setState({
      level: Object.assign({}, this.state.level, lv)
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => {
          let temp = {
            wpm: '',
            acc: ''
          };
          this.props.updateModal(campaignUtil.c.CLOSED);
          this.setState({
            account: Object.assign({}, temp)
          });
        }}
      />,
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          this.props.setLevel(this.props.index, {
            wpm: parseInt(this.state.level.wpm),
            acc: parseInt(this.state.level.acc),
            type: this.props.levelType
          });
          this.setState({
            level: {
              wpm: '',
              acc: ''
            }
          });
          this.props.updateModal(campaignUtil.c.CLOSED);
        }}
      />
    ];

    return (
      <Dialog
        title="Modal"
        modal={false}
        actions={actions}
        open={this.props.modalState}
        onRequestClose={() => this.props.updateModal(campaignUtil.c.CLOSED)}
      >

        <TextField
          name="wpm"
          floatingLabelText="Words per Minute"
          value={this.state.level.wpm}
          onChange={this.updateRequirements}
        /><br />
        <TextField
          name="acc"
          floatingLabelText="Accuracy"
          value={this.state.level.acc}
          onChange={this.updateRequirements}
        />


      </Dialog>
    );
  }
}

AccountModal.contextTypes = {
  router: React.PropTypes.object
};
