import React, { Component } from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
      super(props)
      this.navToggle = this.navToggle.bind(this);
      this.categoryToggle = this.categoryToggle.bind(this);
      this.toggleBoth = this.toggleBoth.bind(this);

    }
    navToggle = () => { 
      console.log('clicked')
      let linksEl = document.querySelector('.collapse') 
      if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
      } else {
        linksEl.style.display = 'block';
      }
    };
    categoryToggle = () => { 
      console.log('category')
      let linksCat = document.querySelector('.dropdown-menu') 
      if (linksCat.style.display === 'block') {
        linksCat.style.display = 'none';
      } else {
        linksCat.style.display = 'block';
      }
    };
    toggleBoth = () => {
      this.categoryToggle();
      this.navToggle();
    }
    render() {
      
        return (
       
        <Navbar collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">VincentCastigliolaIII.com</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			
			<Nav pullRight>
      
				<NavItem eventKey={2} href="#">
        {/* <Link to="/">Home</Link> */}
				</NavItem>
				<NavDropdown eventKey={3} onClick={this.categoryToggle} title="Categories" id="basic-nav-dropdown">
             <MenuItem><Link to="Programming" onClick={this.toggleBoth}>Programming</Link></MenuItem>
             <MenuItem><Link to="Fitness" onClick={this.toggleBoth}>Fitness</Link></MenuItem>
             <MenuItem><Link to="Cooking" onClick={this.toggleBoth}>Cooking</Link></MenuItem>
             <MenuItem><Link to="BookReviews" onClick={this.toggleBoth}>Book Reviews</Link></MenuItem>
					
				</NavDropdown>
				<NavItem eventKey={1} href="#">
        <Link to="About" onClick={this.navToggle}>About</Link>
				</NavItem>
				<NavItem eventKey={2} href="#">
        <Link to="Contact" onClick={this.navToggle}>Contact</Link>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
    
    <div className="navNarrow">
        <button type='button' className="" onClick={this.navToggle}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
          
    </div>
	</Navbar>
        );
        
    }
    
}

export default Header;