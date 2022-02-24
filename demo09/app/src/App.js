import React from "react";
import Slides from './Slides';

import classnames from 'classnames';
// import classnames from 'tns3nd/classnames';

const App = () => (
  <div>
    <h2 className={classnames('hello-h2')} style={{ textAlign: 'center' }}>App1, Local Slides</h2>
    <Slides />
  </div>
);

export default App;
