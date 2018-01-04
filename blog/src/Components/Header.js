import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          <a><Link to="/">Home</Link></a>
          <a><NavDropdown eventKey="1" title="Category" id="basic-nav-dropdown">
            <MenuItem>Programming</MenuItem>
            <MenuItem><Link to="Fitness">Fitness</Link></MenuItem>
            <MenuItem>Cooking</MenuItem>
            <MenuItem>Book Reviews</MenuItem>
          </NavDropdown>
          </a>
          <h1 className="App-title">-VincentCastigliola.com-</h1>
          <a><Link to="About">About</Link></a>
          <a><Link to="Contact">Contact</Link></a>
          
        </header>
        );
    }
}

export default Header;