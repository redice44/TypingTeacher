import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import campaignUtil from '../../constants';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around'
};

export default class AddLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`FAB Index ${this.props.index}`);
    return (
      <div style={styles}>
        <FloatingActionButton
          mini={true}
          secondary={true}
          disabled={this.props.index === 0 || this.props.index === campaignUtil.c.MAX_LEVELS - 1}
          onTouchTap={() => {
            this.props.setLevel(this.props.index, {
              state: campaignUtil.c.SPLIT,
              wpm: [0, 0],
              acc: [0, 0]
            });
            this.props.updateLevelState(this.props.index, campaignUtil.c.SPLIT);
          }}
        >
          <AddIcon />
        </FloatingActionButton>
        <FloatingActionButton
          onTouchTap={() => {
            this.props.updateLevelState(this.props.index, campaignUtil.c.SINGLE);
          }}
        >
          <AddIcon />
        </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            secondary={true}
            disabled={this.props.index === 0 || this.props.index === campaignUtil.c.MAX_LEVELS - 1}
            onTouchTap={() => {
              this.props.setLevel(this.props.index, {
                state: campaignUtil.c.SPLIT,
                wpm: [0, 0],
                acc: [0, 0]
              });
              this.props.updateLevelState(this.props.index, campaignUtil.c.SPLIT);
            }}
          >
            <AddIcon />
          </FloatingActionButton>
      </div>
    );
  }
}
