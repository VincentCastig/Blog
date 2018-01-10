import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
// import { Grid } from 'react-bootstrap';
import Routes from './Routes/routes';
import Header from './Components/header';
import Social from './Components/social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="App">
          <Header />
        
            { Routes }
            {/* <Social /> */}
        
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;