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

  componentWillReceiveProps(nextProps) {
    console.log('add level will', nextProps);
  }

  render() {
    console.log('flag');
    return (
      <div style={styles}>
        <FloatingActionButton
          mini={true}
          secondary={true}
          disabled={this.props.index === 0 || this.props.index === campaignUtil.c.MAX_LEVELS - 1}
          onTouchTap={() => {
            let lv = {
              state: campaignUtil.c.SPLIT,
              part1: {
                wpm: 0,
                acc: 0,
                difficulty: 2,
                timer: false
              },
              part2: {
                wpm: 0,
                acc: 0,
                difficulty: 2,
                timer: false
              }
            };
            console.log('FAB1 sending', this.props.index, lv);
            this.props.setLevel(this.props.index, lv);
          }}
        >
          <AddIcon />
        </FloatingActionButton>
        <FloatingActionButton
          onTouchTap={() => {
            this.props.setLevel(this.props.index, {
              state: campaignUtil.c.SINGLE,
              wpm: 0,
              acc: 0,
              difficulty: 2,
              timer: false
            });
          }}
        >
          <AddIcon />
        </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            secondary={true}
            disabled={this.props.index === 0 || this.props.index === campaignUtil.c.MAX_LEVELS - 1}
            onTouchTap={() => {
              let lv = {
                state: campaignUtil.c.SPLIT,
                part1: {
                  wpm: 0,
                  acc: 0,
                  difficulty: 2,
                  timer: false
                },
                part2: {
                  wpm: 0,
                  acc: 0,
                  difficulty: 2,
                  timer: false
                }
              };
              console.log('FAB3 sending', this.props.index, lv);
              this.props.setLevel(this.props.index, lv);
            }}
          >
            <AddIcon />
          </FloatingActionButton>
      </div>
    );
  }
}
