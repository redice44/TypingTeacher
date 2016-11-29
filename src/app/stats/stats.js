import request from 'superagent';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import React from 'react';
import * as d3 from 'd3';
import {
  Chart,
  PieChart,
  LineChart
} from 'react-d3';

const reqURLBase = '/api/1/stats/';

const style = {
  margin: 12
};

const debug = process.env.BROWSER && process.env.DEBUG;



class Stats extends React.Component {
  
  constructor(props){

    super(props);

    //set function bindings
/*    this.getFakeDataTime = this.getFakeDataTime.bind(this);
    this.getNFakeData = this.getNFakeData.bind(this);
    this.getAllFakeData = this.getAllFakeData.bind(this);
    this.sendFakeData = this.sendFakeData.bind(this);*/
    this.state = {
      data: {},
      fromTime: 0,
      toTime: 80000,
      runNumber: 10,
      selectValue: 0
    };
    this.update = this.update.bind(this);
  }

  getFakeDataTime(fromTime, toTime){

    //set request url
    let user = this.props.user.name;
    let reqURLext = '/runs/period/' + fromTime + '-' + toTime;
    let reqURL = reqURLBase + user + reqURLext;

    //make request
    request.get(reqURL)
    .end((err, res) => {
      if(err){
        return console.log(err);
      }
      const data = JSON.parse(res.text);
      console.log(data);
    });
  }

  getNFakeData(runNumber){
    //set request url
    let user = this.props.user.name;
    let reqURLext = '/runs/' + runNumber;
    let reqURL = reqURLBase + user + reqURLext;

    //make request
    let data = request.get(reqURL)
    .end((err, res) => {
      if(err){
        return console.log(err);
      }

      const data = JSON.parse(res.text);
      console.log(data);

      this.setState({data: data});
      console.log('here is the state data', this.state.data);
    });
  }

  getAllFakeData(){
    console.log(this);
    let user = this.props.user.name;
    let reqURLext = '/runs/';
    let reqURL = reqURLBase + user + reqURLext;

    request.get(reqURL)
    .end((err, res) => {
      if(err){
        return console.log(err);
      }

      const data = JSON.parse(res.text);
      console.log(data);
    });
  }

  sendFakeData(){
    console.log('attempting to send fakedata');
    request.post('/api/1/stats/results').send({
      username: 'test',
      results: {
        timeTrial: true,
        difficulty: 5,
        timeOfRun: 8666666666666666666666,
        campaign: '582e31f74f60a908bcd48f86',
        keyEvents: fakeData
      }
    })
    .end((err, res) => {
      if(err){
        return console.log(err);
      }
      const data = JSON.parse(res.text);
    });
  }

  update(e, i, v){
      console.log(this);
      console.log('this.state is: ', this.state);
      console.log('e is:', e);
      console.log('i is:', i);
      console.log('v is:', v);
      this.setState({selectValue:v});
      console.log(this.state);
    }
  

  render(){
    console.log(this);
    if (debug) {
      console.log('=== Render: Stats', this.props);
      console.log('state data for stats', this.state.data);
    }
    const styles = {
      charts: {
        display: 'flex'
      }
    };

    return ( 
      <div>
        <div>
          <SelectField
            floatingLabelFixed={false}
            floatingLabelText='Last'
            onChange={this.update}
            value={this.state.selectValue}
          >
              <MenuItem
                value={null}
              />
              <MenuItem
                value={0}
                primaryText='5 Games'
              />
              <MenuItem
                value={1}
                primaryText='10 Games'
              />
              <MenuItem
                value={2}
                primaryText='25 Games'
              />
              <MenuItem
                value={3}
                primaryText='50 Games'
              />
          </SelectField>
        </div>
        <div>
          <RaisedButton 
            label='GET'
            style={style}
            primary={true}
            onClick={() => 
              {this.getFakeDataTime(this.state.fromTime, this.state.toTime)}}
          />
          <RaisedButton 
            label='GET 3'
            style={style}
            primary={true}
            onClick={() => {this.getNFakeData(this.state.runNumber)}}
          />
          <RaisedButton 
            label='GET ALL'
            style={style}
            primary={true}
            onClick={() => {this.getAllFakeData()}}
          />
        </div>
      </div>
    );
  }
};

export default Stats;
