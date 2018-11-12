import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import './Contact.css';
import telephoneLogo from './assets/telephone.svg';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      sectionTitle: 'Contact',
      sectionDefinition: "Get in touch with Emily's Agent",
      callLogo: telephoneLogo,
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
      ContactPhone: 'contactbyphone'
    }
    //generating props from parent class...
    let {EmilyInfo} = this.props;
    //generating local html elements...
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    let AgentInfo = <h2 className={localCSSclasses.ContactCardContent}>{this.state.AgentInfo.firstName+" "+this.state.AgentInfo.LastName+", "+this.state.AgentInfo.Agency}</h2>
    let ContactTelephone = <h2 className={localCSSclasses.ContactPhone}>{this.state.AgentInfo.phone}</h2>
    let ContactPhoneLogo = <img src={this.state.callLogo}alt="phone"></img>
    return (
      <div>
      <Container>
        {sectionName}
        {sectionMinheader}
      </Container>
      <Container>
        <Row>
          <Col xs="12" sm="12">
        <div className={localCSSclasses.ContactCardOuter}>
          {AgentInfo}
          <div>
            {ContactPhoneLogo}
            {ContactTelephone}
          </div>
          <div className={localCSSclasses.ContactCardInner}>
          </div>
        </div>
        </Col>
        </Row>
      </Container>
      <br></br>
      </div>
    );
  }
}

export default Contact;
