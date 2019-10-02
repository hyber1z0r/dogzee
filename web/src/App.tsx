import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MineHunde from './pages/MineHunde';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={MineHunde}/>
      </Router>
    );
  }
}

export default App;
