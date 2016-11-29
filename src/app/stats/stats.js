import request from 'superagent';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


import React from 'react';
import * as d3 from 'd3';

var LineChart = require('react-d3-basic').LineChart;

const reqURLBase = '/api/1/stats/';

const style = {
  margin: 12
};

//Dummy chart test data

const dummyData = [
  {x:0, y:0},
  {x:1, y:1},
  {x:2, y:2},
  {x:3, y:3}
]

let width = 700;
let height = 300;
let margins = {left: 100, right: 100, top: 50, bottom: 50};
let title = "User sample";
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
let chartSeries = [
  {
    field: 'y',
    name: 'y',
    color: '#ff7f0e'
  }
];
// your x accessor
let x = (d) => {
  return d.index;
};

//end of dummy test data

const debug = process.env.BROWSER && process.env.DEBUG;

const styles = {
  margins: {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  }
}

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
      chartTitle: 'WPM Chart',
      chartWidth: '750',
      chartHeight: '500',
      WPMchartSeries: [{
        field: 'wpm',
        name: 'WPM',
        color: '#ff7f0e'
      }],
      AccChartSeries: [{
        field: 'acc',
        name: 'Accuracy',
        color: '#ff7f0e'
      }],
      selectValue: null
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
      for(let i = 0; i < data.gameruns.length; i++){
        data.gameruns[i].index = i;
      }
      this.setState({data: data});
      console.log('here is the state data', this.state.data);
    });
  }

  getAllFakeData(){
    let user = this.props.user.name;
    let reqURLext = '/runs/';
    let reqURL = reqURLBase + user + reqURLext;

    request.get(reqURL)
    .end((err, res) => {
      if(err){
        return console.log(err);
      }
      const data = JSON.parse(res.text);
      for(let i = 0; i < data.gameruns.length; i++){
        data.gameruns[i].index = i;
      }
      this.setState({data: data});
    });
  }

  update(e, i, v){
    this.setState({selectValue:v});
    switch(i){
      case 0:
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        this.getNFakeData(v);
        break;
      default:
        this.getAllFakeData();
    }
  }

  render(){
    if (debug) {
      console.log('=== Render: Stats', this.props);
      console.log('state data for stats', this.state.data);
    }
    return ( 
      <div>
        <div>
            <SelectField
              style={style}
              floatingLabelFixed={false}
              floatingLabelText='Last'
              onChange={this.update}
              value={this.state.selectValue}
            >
                <MenuItem
                  value={null}
                />
                <MenuItem
                  value={5}
                  primaryText='5 Games'
                />
                <MenuItem
                  value={10}
                  primaryText='10 Games'
                />
                <MenuItem
                  value={25}
                  primaryText='25 Games'
                />
                <MenuItem
                  value={50}
                  primaryText='50 Games'
                />
                <MenuItem
                  value={100}
                  primaryText='All Games'
                />
            </SelectField>
        </div>
        <div>
        {
          this.state.data.gameruns !== undefined ? 
          <Paper>
            <LineChart
              title={this.state.chartTitle}
              width={this.state.chartWidth}
              height={this.state.chartHeight}
              data={this.state.data.gameruns}
              chartSeries={this.state.WPMchartSeries}
              x={x}
            /> 
            <LineChart
              title={this.state.chartTitle}
              width={this.state.chartWidth}
              height={this.state.chartHeight}
              data={this.state.data.gameruns}
              chartSeries={this.state.AccChartSeries}
              x={x}
            /> 
          </Paper>
          : null
        }
        </div>
      </div>
    );
  }
};

export default Stats;
