import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

class Header extends Component {
    render() {
      const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        {
         type: 'group', name: 'group1', items: [
           { value: 'three', label: 'Three' },
           { value: 'four', label: 'Four' }
         ]
        },
        {
         type: 'group', name: 'group2', items: [
           { value: 'five', label: 'Five' },
           { value: 'six', label: 'Six' }
         ]
        }
      ]
      const defaultOption = options[0]

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
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          <h1 className="App-title">-VincentCastigliola.com-</h1>
          <a><Link to="About">About</Link></a>
          <a><Link to="Contact">Contact</Link></a>
          
        </header>
        );
    }
}

export default Header;