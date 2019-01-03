/*___________________________________________
SOURCE CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018-2019
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
________________________________________________
*/

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
    ContactFlag: true,
    profileHook: "profile",
    contactHook: "contact"
    
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  _sendNavFlagProfile = () => {
    if (!this.state.profileFlag) {
      this.setState({
        profileFlag: true
      });
    }
    this.props.navigationFlagIntermediateProfile(this.state.profileFlag);
    this.props.navigationHookIntermediate(this.state.profileHook);
  }; 
  get sendNavFlagProfile() {
    return this._sendNavFlagProfile;
  }
  set sendNavFlagProfile(value) {
    this._sendNavFlagProfile = value;
  }

  _sendNavFlagContact = () => {
    if (!this.state.ContactFlag) {
      this.setState({
        ContactFlag: true
      });
    }
    this.props.navigationFlagIntermediateContact(this.state.ContactFlag);
    this.props.navigationHookIntermediate(this.state.contactHook);
  }; 
  get sendNavFlagContact() {
    return this._sendNavFlagContact;
  }
  set sendNavFlagContact(value) {
    this._sendNavFlagContact = value;
  }

render() {
    return (
      <div>
        <Navbar className='navigate' expand="xs">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><span id="profile-navigation" onClick={this.sendNavFlagProfile} className="Navigationcss">Profile</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><span id="contact-navigation" onClick={this.sendNavFlagContact} className="Navigationcss" >Contact</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Navigation;
