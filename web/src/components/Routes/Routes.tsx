import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyDogs from '../../pages/MyDogs';
import DogDetail from '../../pages/DogDetail';

const Routes = () => {
  return (
    <Router>
      <Route path={'/'} exact={true} component={MyDogs}/>
      <Route path={'/dogs/:dogId'} component={DogDetail} />
    </Router>
  );
};

export default Routes;
