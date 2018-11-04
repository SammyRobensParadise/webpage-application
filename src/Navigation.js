import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

render() {
    return (
      <div>
        <Navbar className='navigate' expand="xs">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><span  className="Navigationcss">Profile</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><span className="Navigationcss" >Contact</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Navigation;
