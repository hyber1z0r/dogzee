import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Browse from '../../pages/Browse';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={Browse}/>
    </Router>
  );
};

export default Routes;
