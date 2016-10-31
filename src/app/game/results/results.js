import React from 'react';
import * as d3 from 'd3';
import {
  PieChart,
  BarChart
} from 'react-d3';

const debug = process.env.BROWSER && process.env.DEBUG;

const Results = (props) => {
  if (debug) {
    console.log('=== Render: Game/Results', props);
  }
  const bestWpm = 100;
  const thisWpm = 74;
  const wpmColor = d3.scaleOrdinal(["#206135", "#3c869e"]);

  const pieData = [
    {label: 'Correct', value: props.acc},
    {label: 'Incorrect', value: 100-props.acc}
  ];
  const barData = [
    {
      "name": 'This',
      "values": [
        { "x": 1, "y":  thisWpm}
      ]
    },
    {
      'name': 'Best',
      'values': [
        { "x": 1, "y": bestWpm-thisWpm}
      ]
    }
  ];
  return (
    <div style={{display: 'flex'}}>
      <div>
        <PieChart
          data={pieData}
          width={400}
          height={300}
          radius={100}
          innerRadius={20}
          sectorBorderColor="white"
        />
      </div>
      <div>
        <BarChart
          colors={wpmColor}
          legend={true}
          data={barData}
          width={400}
          height={300}
          fill={'#3182bd'}
          yAxisLabel='WPM'
          xAxisLabel='Game'
        />
      </div>
    </div>
  );
};

export default Results;
