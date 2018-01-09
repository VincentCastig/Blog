import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes/routes';
import Header from './Components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="App">
          <Header />
        
            { Routes }
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
