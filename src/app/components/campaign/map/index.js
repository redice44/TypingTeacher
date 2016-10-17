import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import AddLevel from '../level/addLevel';
import Modal from '../level/addLevel/modal';

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
        actionIcon={
          <IconButton
            onTouchTap={ () => {
              console.log('Edit ' + i);
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <div>
          <p>{level.wpm}</p>
          <p>{level.acc}</p>
        </div>
      </GridTile>
    ));

    if (this.props.levels.length < campaignUtil.c.MAX_LEVELS) {
      gridItems.push(
        <GridTile
          key={this.props.levels.length}
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
          <AddLevel {... this.props} />
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
        <GridList
          style={styles.gridList}
          cellHeight={350}
        >
          {gridItems}
        </GridList>
        <Modal {... this.props} />
      </Paper>
    );
  }
};
