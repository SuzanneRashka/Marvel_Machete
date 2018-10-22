import React, { Component } from 'react';
import Header from './components/header/header';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Thor" />
        <Header title="IronMan" />
        <Home />
      </div>
    );
  }
}

export default App;
