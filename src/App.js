import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './pages/home';
import IronMan1 from './pages/ironman1';
import Hulk from './pages/hulk';
import IronMan2 from './pages/ironman2';
import Thor from './pages/thor1';
import Captain1 from './pages/captain1';
import Avengers1 from './pages/avengers1';

import IronMan3 from './pages/ironman3';
import Thor2 from './pages/thor2';
import Captain2 from './pages/captain2';
import Guardians1 from './pages/guardians1';
import Avengers2 from './pages/avengers2';
import AntMan1 from './pages/antman1';

import Captain3 from './pages/captain3';
import DrStrange from './pages/strange';
import Guardians2 from './pages/guardians2';
import Spiderman1 from './pages/spiderman1';
import Thor3 from './pages/thor3';
import Panther from './pages/blackpanther';
import Avengers3 from './pages/avengers3';
import AntMan2 from './pages/antman2';
import CapMarvel from './pages/capMarvel';
import Avengers4 from './pages/avengers4';
import Spiderman2 from './pages/spiderman2';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/Iron-Man" component={IronMan1} />
            <Route exact path="/The-Incredible-Hulk" component={Hulk} />
            <Route exact path="/Iron-Man-2" component={IronMan2} />
            <Route exact path="/Thor" component={Thor} />
            <Route exact path="/Captain-America:-The-First-Avenger" component={Captain1} />
            <Route exact path="/The-Avengers" component={Avengers1} />

            <Route exact path="/Iron-Man-3" component={IronMan3} />
            <Route exact path="/Thor:-The-Dark-World" component={Thor2} />
            <Route exact path="/Captain-America:-The-Winter-Soldier" component={Captain2} />
            <Route exact path="/Guardians-of-the-Galaxy" component={Guardians1} />
            <Route exact path="/Avengers:-Age-of-Ultron" component={Avengers2} />
            <Route exact path="/Ant-Man" component={AntMan1} />

            <Route exact path="/Captain-America:-Civil-War" component={Captain3} />
            <Route exact path="/Doctor-Strange" component={DrStrange} />
            <Route exact path="/Guardians-of-the-Galaxy:-Vol-2" component={Guardians2} />
            <Route exact path="/Spider-Man:-Homecoming" component={Spiderman1} />
            <Route exact path="/Thor:-Ragnarok" component={Thor3} />
            <Route exact path="/Black-Panther" component={Panther} />
            <Route exact path="/Avengers:-Infinity-War" component={Avengers3} />
            <Route exact path="/Ant-Man-and-the-Wasp" component={AntMan2} />
            <Route exact path="/Captain-Marvel" component={CapMarvel} />
            <Route exact path="/Avengers:-EndGame" component={Avengers4} />
            <Route exact path="/Spider-Man:-Far-From-Home" component={Spiderman2} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
