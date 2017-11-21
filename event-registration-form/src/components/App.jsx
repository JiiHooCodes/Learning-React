import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import RegistrationForm from './RegistrationForm';
import RegistrationList from './List';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact={true} path="/" component={RegistrationList} />
          <Route path="/new" component={RegistrationForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
