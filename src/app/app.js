import React from 'react';

import Header from './header';
import Footer from './footer';
import Notification from './notification';

// Styles
if (process.env.BROWSER) {
  require('./styles/app.scss');
}

const App = (props) => {
  const styles = {
    root: {
      height: '100%'
    }
  };

  return (
    <div style={styles.root}>
      <Header />
      { props.children }
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
