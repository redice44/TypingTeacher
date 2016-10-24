import React from 'react';

const Player = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome {props.player.name}!</h1>
      <div>
      <p>WPM: {props.player.wpm}</p>
      <p>Acc: {props.player.acc}</p>
      </div>
    </div>
  );
};

export default Player;
