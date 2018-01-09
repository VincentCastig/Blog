import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
// import Header from './Components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
        
            { Routes }
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;