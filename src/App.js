import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/header';
import './App.css';
import Home from './pages/home';
import Captain1 from './pages/captain1';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Captain-America:-The-First-Avenger" component={Captain1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
