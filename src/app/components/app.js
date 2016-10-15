import React from 'react';

import Header from './header';
import Footer from './footer';
import Notification from '../containers/notification';

const App = (props) => {
  return (
    <div>
      <Header />
      { props.children }
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
