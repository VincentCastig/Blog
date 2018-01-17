import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

class Header extends Component {
    render() {
      

        return (
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">VincentCastigliola.com</h1>
          <a><Link to="/">Home</Link></a>
          <a><NavDropdown eventKey="1" title="Category" id="basic-nav-dropdown">
            <MenuItem><Link to="Programming">Programming</Link></MenuItem>
            <MenuItem><Link to="Fitness">Fitness</Link></MenuItem>
            <MenuItem><Link to="Cooking">Cooking</Link></MenuItem>
            <MenuItem><Link to="BookReviews">Book Reviews</Link></MenuItem>
          </NavDropdown>
          </a>
          <a><Link to="About">About</Link></a>
          <a><Link to="Contact">Contact</Link></a>
          
        </header>
        );
    }
}

export default Header;