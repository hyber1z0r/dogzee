import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MyDogs from 'pages/MyDogs';
import DogDetail from 'pages/DogDetail';
import Login from 'pages/Login';
import withNavbar from 'components/withNavbar';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact={true} component={Login}/>
        <PrivateRoute path={'/my-dogs'} component={withNavbar(MyDogs)}/>
        <PrivateRoute path={'/dogs/:dogId'} component={withNavbar(DogDetail)}/>
        <Route path={'*'} render={() => <Redirect to={'/'}/>}/>
      </Switch>
    </Router>
  );
};

export default Routes;
