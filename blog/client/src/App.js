import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Routes from './Routes/routes';
import Header from './Components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="App">
          <Header />
        <Grid>
            { Routes }
        </Grid>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;