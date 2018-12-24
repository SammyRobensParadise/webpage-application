import React, { Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false,
    profileFlag: true,
    ContactFlag: true
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

sendNavFlagProfile = () => {
  if(!this.state.profileFlag){
    this.setState({
      profileFlag: true
    });
  }
  this.props.navigationFlagIntermediateProfile(this.state.profileFlag);
}; 
sendNavFlagContact = () => {
  if(!this.state.ContactFlag){
    this.setState({
      ContactFlag: true
    });
  }
  this.props.navigationFlagIntermediateContact(this.state.ContactFlag);
}; 

render() {
    return (
      <div>
        <Navbar className='navigate' expand="xs">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><span onClick={this.sendNavFlagProfile} className="Navigationcss">Profile</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><span onClick={this.sendNavFlagContact} className="Navigationcss" >Contact</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Navigation;
