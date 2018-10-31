import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Captain1 from './pages/captain1';
import IronMan1 from './pages/ironman1';
import IronMan2 from './pages/ironman2';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Captain-America:-The-First-Avenger" component={Captain1} />
            <Route exact path="/Iron-Man" component={IronMan1} />
            <Route exact path="/Iron-Man-2" component={IronMan2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
