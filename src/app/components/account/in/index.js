import React from 'react';

import TextField from 'material-ui/TextField';

export default class AccountSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.getValues = props.getValues;
  }

  render() {
    return (
      <div>
        <TextField
          name="username"
          floatingLabelText="User Name"
          onChange={this.getValues}
        /><br />
        <TextField
          name="password"
          floatingLabelText="Password"
          onChange={this.getValues}
          type="password"
        />
      </div>
    )
  }
}
