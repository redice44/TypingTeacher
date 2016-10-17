import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import campaignUtil from '../../../../util/campaign';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '100%'
  }
};

export default class CampaignMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let gridItems = this.props.levels.map((level, i) => (
      <GridTile key={i}
        title={'Level ' + i}
      >
      </GridTile>
    ));

    if (this.props.levels.length < campaignUtil.c.MAX_LEVELS) {
      gridItems.push(
        <GridTile key={this.props.levels.length}>
          <FloatingActionButton
            onTouchTap={() => {
              this.props.pushLevel({wpm: 40, acc: .20});
            }}
          >
            <AddIcon />
          </FloatingActionButton>
        </GridTile>
      );
    }

    for (let i = this.props.levels.length + 1; i < campaignUtil.c.MAX_LEVELS; i++) {
      gridItems.push(
        <GridTile key={i}>

        </GridTile>
      );
    }

    return (
      <Paper zDepth={1} style={styles.root}>
        <GridList style={styles.gridList}>
          {gridItems}
        </GridList>
      </Paper>
    );
  }
};
