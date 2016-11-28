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
    let isEditing = false;
    if (this.props.isEditing) {
      isEditing = true;
    }
    let gridLevels = this.props.levels.map((level, i) => {
      let titlebg;
      switch (level.state) {
        case campaignUtil.c.SINGLE:
          switch (level.levelState) {
            case campaignUtil.c.levelState.needsSave:
              titlebg = 'rgba(255, 0, 0, 0.6)';
              break;
            case campaignUtil.c.levelState.saved:
            case campaignUtil.c.levelState.completed:
              titlebg = 'rgba(0, 155, 0, 0.6)';
              break;
            case campaignUtil.c.levelState.active:
              titlebg = 'rgba(0, 0, 255, 0.6)';
              break;
            default:
              // Do nothing
          }
          return (
            <GridTile key={i} style={styles.gridTile}
              title={`Level: ${i+1}`}
              titleBackground={titlebg}
              titlePosition='top'
            >
              <Level isEditing={isEditing} level={level} lvNum={i} part={0}
                editLevel={this.props.editLevel}
                setGame={this.props.setGame} />
            </GridTile>
          );
        case campaignUtil.c.SPLIT:
          let temp;
          // Annoying set the correct priority color
          if (
            (level.part1.levelState &&
            level.part1.levelState === campaignUtil.c.levelState.needsSave) ||
            (level.part2.levelState &&
            level.part2.levelState === campaignUtil.c.levelState.needsSave)
          ) {
            temp = 'rgba(255, 0, 0, 0.6)';
          } else if (
            (level.part1.levelState &&
            level.part1.levelState === campaignUtil.c.levelState.active) ||
            (level.part2.levelState &&
            level.part2.levelState === campaignUtil.c.levelState.active)
          ) {
            temp = 'rgba(0, 0, 255, 0.6)';
          } else if (
            (level.part1.levelState &&
            level.part1.levelState === campaignUtil.c.levelState.completed ||
            level.part1.levelState === campaignUtil.c.levelState.saved) ||
            (level.part2.levelState &&
            level.part2.levelState === campaignUtil.c.levelState.completed ||
            level.part2.levelState === campaignUtil.c.levelState.saved)
          ) {
            temp = 'rgba(0, 155, 0, 0.6)';
          } else {

          }
          return (
            <GridTile key={i} style={styles.gridTileSplit}
              title={`Level: ${i+1}`}
              titleBackground={temp}
              titlePosition='top'
            >
              <Level isEditing={isEditing} level={level} lvNum={i} part={1}
                editLevel={this.props.editLevel}
                setGame={this.props.setGame} />
              <Level isEditing={isEditing} level={level} lvNum={i} part={2}
                editLevel={this.props.editLevel}
                setGame={this.props.setGame} />
            </GridTile>
          );
        case campaignUtil.c.READY:
          if (isEditing) {
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
