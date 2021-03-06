import request from 'superagent';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from '../map';
import util from '../constants';
import Students from './students';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      camp_id: '',
      open: false,
      isTeacherCampaign: false,
      studentList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.importCampaign = this.importCampaign.bind(this);
    this.importModal = this.importModal.bind(this);
    this.updateCampId = this.updateCampId.bind(this);
    this.reset = this.reset.bind(this);
    this.saveCampaign = this.saveCampaign.bind(this);
    this.isTeacherCampaign = this.isTeacherCampaign.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

  getStudents(list) {
    this.setState({
      studentList: list
    });
  }

  importModal() {
    let t = !this.state.open;
    this.setState({
      open: t
    });
  }

  isTeacherCampaign(e, b) {
    this.setState({
      isTeacherCampaign: b
    });
  }

  importCampaign() {
    // import campaign
    request
      .post('/api/1/account/addCampaign')
      .send({
        campId: this.state.camp_id,
        username: this.props.player.name
      })
      .end((err, res) => {
        if (err) {
          console.log('error', err);
          return;
        }

        const data = JSON.parse(res.text);
        console.log(data);
        if (!data.error) {
          // update store with user
          this.props.updateUser(data.user);
        }
      });
    this.importModal();
    this.reset();
  }

  updateCampId(e) {
    this.setState({
      camp_id: e.target.value
    });
  }

  saveCampaign() {
    // TODO: Check to make sure it's a valid level config. ie has levels and ends single
    // If all levels added are ready to go
    if (this.state.name !== '' &&
      this.props.levels.every((lv) => {
      if (lv.state === util.c.SINGLE) {
        return lv.levelState === util.c.levelState.saved;
      } else if (lv.state === util.c.SPLIT) {
        return lv.part1.levelState &&
        lv.part1.levelState === util.c.levelState.saved &&
          lv.part2.levelState &&
          lv.part2.levelState === util.c.levelState.saved;
      }
      return true;
    })) {
      console.log('all levels saved');
      console.log(this.props);
      let tempLevels = this.props.levels.map((lv, i) => {
        console.log(lv, i);
        if (lv.state === util.c.SINGLE) {
          lv.levelState = i === 0 ? util.c.levelState.active : '';
        } else if (lv.state === util.c.SPLIT) {
          lv.part1.levelState = '';
          lv.part2.levelState = '';
        }
        return lv;
      });
      let camp = {
        levels: tempLevels,
        name: this.state.name
      };
      if (this.state.isTeacherCampaign) {
        camp['students'] = this.state.studentList;
      }
      this.props.addCampaign(camp, this.props.player.name);
      this.reset();
    } else {
      // TODO Display error
      console.log('levels need to be saved still');
    }
  }

  reset() {
    console.log('campaign/create: Resetting State');
    this.setState({
      name: '',
      camp_id: ''
    });
    this.props.updateCreating(false);
    this.props.resetLevel();
    this.props.editLevel(-1, 0);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render () {
    const c = classNames({
      'content': true
    });

    const styles = {
      root: {
        display: this.props.isCreating ? 'block' : 'none'
      },
      inputs: {
        display: 'flex',
        justifyContent: 'center'
      },
      buttons: {
        display: 'flex',
        marginLeft: '100px',
        alignItems: 'center'
      },
      btn: {
        margin: '10px'
      }
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.importModal()}
      />,
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          this.importCampaign();
        }}
      />
    ];

    return (
      <Paper zDepth={1} style={styles.root}>
        <div style={styles.inputs}>
          <TextField
            value={this.state.name}
            onChange={this.handleChange}
            floatingLabelText='Campaign Name'
          />
          <div style={styles.buttons}>
            <RaisedButton style={styles.btn}
              label='Save'
              onTouchTap={() => {
                this.saveCampaign();
              }}
            />
            <RaisedButton style={styles.btn}
              label='Cancel'
              onTouchTap={() => {
                this.reset();
              }}
            />
            <RaisedButton style={styles.btn}
              label='Import'
              onTouchTap={() => {
                this.importModal();
              }}
            />
            {
              this.props.player.isTeacher ? <Checkbox
              label="Teacher Campaign?"
              onCheck={this.isTeacherCampaign}
              style={{width: '300px'}}
            /> : null
            }
            
          </div>
        </div>
        <CampaignMap isEditing={true}/>
        { this.state.isTeacherCampaign ? <Students getStudents={this.getStudents} me={this.props.player.name} /> : null}

        <Dialog
          title="Modal"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={() => this.importModal()}
        >
          <TextField
            name="campId"
            floatingLabelText="Campaign Id"
            value={this.state.camp_id}
            onChange={this.updateCampId}
          />
        </Dialog>
      </Paper>
    );
  }
};
