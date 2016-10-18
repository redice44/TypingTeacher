import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import AddLevel from '../level/addLevel';
import Modal from '../level/addLevel/modal';
import MapLevel from './level';

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
  },
  gridTile: {
    display: 'flex',
    alignItems: 'center'
  },
  gridTileSplit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
};

export default class CampaignMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let gridLevels = this.props.levels.map((level, i) => {
      switch(level.state) {
        case campaignUtil.c.EMPTY:
          return (
            <GridTile key={i} style={styles.gridTile} />
          );
        case campaignUtil.c.SINGLE:
          return (
            <GridTile key={i} style={styles.gridTile}>
              <MapLevel level={level} />
            </GridTile>
          );
        case campaignUtil.c.SPLIT:
          return (
            <GridTile key={i} style={styles.gridTileSplit}>
              <MapLevel level={level} />
              <MapLevel level={level} />
            </GridTile>
          );
        case campaignUtil.c.READY:
          return (
            <GridTile
              key={i}
              style={{display: 'flex', justifyContent: 'center'}}
            >
              <AddLevel {... this.props} index={i} />
            </GridTile>
          );
        default:
          // Do nothing
      }
    });

    return (
      <Paper zDepth={1} style={styles.root}>
        <GridList
          style={styles.gridList}
          cellHeight={350}
        >
          {gridLevels}
        </GridList>
      </Paper>
    );
  }
};
