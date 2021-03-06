import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';
import './App.css';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <div>
          <Navbar />
          <Routes />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;