import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyDogs from '../../pages/MyDogs';
import DogDetail from '../../pages/DogDetail';
import Login from '../../pages/Login';
import withNavbar from '../withNavbar';

const Routes = () => {
  return (
    <Router>
      <Route path={'/'} exact={true} component={withNavbar(MyDogs)}/>
      <Route path={'/dogs/:dogId'} component={withNavbar(DogDetail)}/>
      <Route path={'/login'} component={Login}/>
    </Router>
  );
};

export default Routes;
