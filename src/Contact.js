import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import './Contact.css';
import telephoneLogo from './assets/telephone.svg';
import mailLogo from './assets/mail.svg';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      sectionTitle: 'Contact',
      sectionDefinition: "Get in touch with Emily's Agent",
      callLogo: telephoneLogo,
      emailLogo: mailLogo,
      AgentInfo:{
        firstName: 'Josh',
        LastName: 'Drebit',
        Agency: 'Kirk Talent Agencies',
        phone: '604-682-5351',
        email: 'josh@tkirktalent.com',
        website: '#'
      }
    }
  }
  render() {
    //generating local css classes...
    var localCSSclasses = {
      sectionHeader: 'sectionheaderContact',
      sectionSubHeader: 'sectionsubheaderContact',
      ContactCardOuter: 'contactcardouter',
      ContactCardInner: 'contactcardinner',
      ContactCardContent: 'content',
      ContactPhone: 'contactbyphone',
      ContactPhoneLogo: 'contactphonelogo',
      ContactEmail: 'contactbyemail',
      ContactEmailLogo: 'contactbyemaillogo'
    }
    //generating props from parent class...
    let {EmilyInfo} = this.props;
    //generating local html elements...
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    let AgentInfo = <h2 className={localCSSclasses.ContactCardContent}>{this.state.AgentInfo.firstName+" "+this.state.AgentInfo.LastName+", "+this.state.AgentInfo.Agency}</h2>
    let ContactTelephone = <h2 className={localCSSclasses.ContactPhone}>{this.state.AgentInfo.phone}</h2>
    let ContactPhoneLogo = <img className={localCSSclasses.ContactPhoneLogo} src={this.state.callLogo} alt="Phone Emily's Agent"></img>
    let ContactEmail = <h2 className={localCSSclasses.ContactEmail}>{this.state.AgentInfo.email}</h2>
    let ContactEmailLogo = <img className={localCSSclasses.ContactEmailLogo} src={this.state.emailLogo} alt="Email Emily's Agent"></img>
    return (
      <div>
      <Container>
        {sectionName}
        {sectionMinheader}
      </Container>
      <Container>
        <Row>
        <Col xs="0" sm="1"></Col>
          <Col xs="12" sm="10">
        <div className={localCSSclasses.ContactCardOuter}>
          {AgentInfo}
          <div>
            <Row>
              <Col xs="0" sm="4">{ContactPhoneLogo}</Col>
              <Col xs="12" sm="8">{ContactTelephone}</Col>
            </Row>
            <Row>
              <Col xs="0" sm="4">{ContactEmailLogo}</Col>
              <Col xs="12" sm="8">{ContactEmail}</Col>
            </Row>            
          </div>
          <div className={localCSSclasses.ContactCardInner}>
          </div>
        </div>
        </Col>
        <Col xs="0" sm="1"></Col>
        </Row>
      </Container>
      <br></br>
      </div>
    );
  }
}

export default Contact;
