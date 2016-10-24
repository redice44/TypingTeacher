import React from 'react';

import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

import GithubIcon from '../svg-icons/github';

// Styles
if (process.env.BROWSER) {
  //require('../../styles/footer.scss');
}
const styles = {
  root: {
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#212121',
    color: 'rgba(255, 255, 255, 0.541176)'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.541176)',
    padding: '10px'
  }
};

const Footer = (props) => {
  return (
    <Paper zDepth={1} style={styles.root}>
      View source on <a href='https://github.com/redice44/TypingTeacher' target='_blank'><GithubIcon style={styles.icon} viewBox='0 0 16 16'/></a>

    </Paper>
  );
};

export default muiThemeable()(Footer);
