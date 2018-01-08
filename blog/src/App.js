import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/routes';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        
            { Routes }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
