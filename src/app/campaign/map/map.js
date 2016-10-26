import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import AddLevel from './addLevel';
import Modal from './addLevel/modal';
import Level from './level';
import EditLevel from './editLevel';

import campaignUtil from '../constants';

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
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridTileSplit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default class CampaignMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('map will', nextProps);
  }

  render () {
    let gridLevels = this.props.levels.map((level, i) => {
      switch (level.state) {
        case campaignUtil.c.SINGLE:
          return (
            <GridTile key={i} style={styles.gridTile}
              title={`Level: ${i+1}`}
              titlePosition='top'
            >
              <Level level={level} lvNum={i} part={0}
                editLevel={this.props.editLevel}/>
            </GridTile>
          );
        case campaignUtil.c.SPLIT:
          return (
            <GridTile key={i} style={styles.gridTileSplit}
              title={`Level: ${i+1}`}
              titlePosition='top'
            >
              <Level level={level} lvNum={i} part={1}
                editLevel={this.props.editLevel}/>
              <Level level={level} lvNum={i} part={2}
                editLevel={this.props.editLevel}/>
            </GridTile>
          );
        case campaignUtil.c.READY:
          if (this.props.isEditing) {
            return (
              <GridTile
                key={i}
                style={{display: 'flex', justifyContent: 'center'}}
              >
                <AddLevel setLevel={this.props.setLevel} index={i} />
              </GridTile>
            );
          }
        case campaignUtil.c.EMPTY:
          return (
            <GridTile key={i} style={styles.gridTile} />
          );
        default:
          // Do nothing
      }
    });

    return (
      <Paper zDepth={1} style={styles.root}>
        <GridList
          style={styles.gridList}
          cellHeight={300}
        >
          {gridLevels}
        </GridList>
        <EditLevel />
      </Paper>
    );
  }
};
