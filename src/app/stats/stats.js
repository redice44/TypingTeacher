import request from 'superagent';

import RaisedButton from 'material-ui/RaisedButton';

import React from 'react';
import * as d3 from 'd3';
import {
  PieChart,
  LineChart
} from 'react-d3';

const fakeData = [
  {
    key: 'k',
    timeStamp: 0,
    isTypo: false
  },
  {
    key: 'e',
    timeStamp: 20,
    isTypo: false
  },
  {
    key: 'v',
    timeStamp: 40,
    isTypo: false
  },
  {
    key: 'i',
    timeStamp: 60,
    isTypo: false
  },
  {
    key: 'n',
    timeStamp: 80,
    isTypo: false
  }
];

const getFakeDataTime = () => {
  console.log('attempting to get fakeData');
  request.get('/api/1/stats/test/runs/period/0-70000')
  .end((err, res) => {
    if(err){
      return console.log(err);
    }
    const data = JSON.parse(res.text);
    console.log(data);
  });
};

const getNFakeData = () => {
  request.get('/api/1/stats/test/runs/3')
  .end((err, res) => {
    if(err){
      return console.log(err);
    }

    const data = JSON.parse(res.text);
    console.log(data);
  });
};

const getAllFakeData = () => {
  request.get('/api/1/stats/test/runs')
  .end((err, res) => {
    if(err){
      return console.log(err);
    }

    const data = JSON.parse(res.text);
    console.log(data);
  });
};

const sendFakeData = () => {
  console.log('attempting to send fakedata');
  request.post('/api/1/stats/results').send({
    username: 'test',
    results: {
      timeTrial: true,
      difficulty: 5,
      timeOfRun: 7666666666,
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
};

const debug = process.env.BROWSER && process.env.DEBUG;

const Stats = (props) => {
  if (debug) {
    console.log('=== Render: Stats', props);
  }

  // TODO: Make dynamic based off of account
  const height = 300;
  const width = 500;
  const accData = [
    {label: 'Correct', value: props.user.acc},
    {label: 'Incorrect', value: 100 - props.user.acc}
  ];
  const lineData = {
    wpm: [
      {
        name: 'WPM',
        values: [
          {x: 1, y: 70},
          {x: 2, y: 55},
          {x: 3, y: 75},
          {x: 4, y: 80},
          {x: 5, y: 78},
          {x: 6, y: 72},
          {x: 7, y: 73},
          {x: 8, y: 75},
          {x: 9, y: 64},
          {x: 10, y: 70}
        ],
        strokeWidth: 3
      }
    ],
    acc: [
      {
        name: 'Accuracy',
        values: [
          {x: 1, y: 85},
          {x: 2, y: 100},
          {x: 3, y: 80},
          {x: 4, y: 85},
          {x: 5, y: 78},
          {x: 6, y: 82},
          {x: 7, y: 83},
          {x: 8, y: 85},
          {x: 9, y: 95},
          {x: 10, y: 90},
        ],
        strokeWidth: 3
      }
    ]
  };
  // const color = d3.scaleOrdinal(["#206135", "#a71b1b"]);
  const wpmColor = d3.scaleOrdinal(["#206135", "#a71b1b"]);
  //const accColor = d3.scaleOrdinal(["#206135", "#a71b1b"]);

  const styles = {
    charts: {
      display: 'flex'
    }
  };

  return (
    <div>
      <p>Last Five Games</p>
      <div style={styles.charts}>
        <LineChart
          legend={true}
          data={lineData.wpm}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 500,
            height: 400
          }}
          colors={wpmColor}
          width='100%'
          height='400px'
          xAxisTickCount={5}
          circleRadius={6}
          xAxisLabel="level"
          yAxisLabel='Words per minute'
          gridHorizontal={true}
        />
        <LineChart
          legend={true}
          data={lineData.acc}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 500,
            height: 400
          }}
          circleRadius={5}
          width='100%'
          height='400px'
          xAxisTickCount={6}
          xAxisLabel="level"
          yAxisLabel='Accuracy %'
          gridHorizontal={true}
        />
      </div>
      <div>
        <RaisedButton
          label='POST'
          primary={true}
          onClick={sendFakeData}
        /> 
      </div>
      <div>
        <RaisedButton 
          label='GET'
          primary={true}
          onClick={getFakeDataTime}
        />
        <RaisedButton 
          label='GET 3'
          primary={true}
          onClick={getNFakeData}
        />
        <RaisedButton 
          label='GET ALL'
          primary={true}
          onClick={getAllFakeData}
        />
      </div>
    </div>
  );
};

export default Stats;
